"use server"

import { z } from "zod"
import nodemailer from "nodemailer" // Importa nodemailer

const registrationSchema = z.object({
    name: z.string().min(1, "Name is required"),
    surname: z.string().min(1, "Surname is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(8, "Phone number is required and must be at least 8 digits"),
    dateOfBirth: z.string().min(1, "Date of birth is required"),
    countryCode: z.string().min(1, "Country code is required"),
    language: z.string().min(1, "Language is required"),
})

export async function submitRegistration(prevState: any, formData: FormData) {
    const rawFormData = Object.fromEntries(formData.entries())

    const validatedFields = registrationSchema.safeParse(rawFormData)

    if (!validatedFields.success) {
        return {
            success: false,
            message: "Validation failed.",
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    const { name, surname, email, phone, dateOfBirth, countryCode, language } = validatedFields.data

    // Configura el transportador de Nodemailer para Hotmail/Outlook
    const transporter = nodemailer.createTransport({
        host: "smtp.office365.com", // Servidor SMTP de Hotmail/Outlook
        port: 587,
        secure: false, // Usa TLS, no SSL directo en este puerto
        auth: {
            user: process.env.EMAIL_USER, // Tu dirección de correo Hotmail (remitente)
            pass: process.env.EMAIL_PASS, // Tu contraseña de Hotmail o contraseña de aplicación
        },
        tls: {
            ciphers: "SSLv3", // Puede ser necesario para algunos servidores SMTP
        },
    })

    // Opciones del correo electrónico
    const mailOptions = {
        from: "coinsinlimited@hotmail.com", // La dirección de correo desde la que se envía
        to: "coinsinlimited@hotmail.com", // La dirección de correo a la que quieres que lleguen los datos (tu Hotmail)
        subject: "Nuevo Registro de Cliente en Coin Sin Limited", // Asunto del correo
        html: `
      <h1>Nuevo Registro de Cliente</h1>
      <p>Se ha recibido un nuevo registro a través del formulario de Coin Sin Limited con los siguientes datos:</p>
      <ul>
        <li><strong>Nombre:</strong> ${name}</li>
        <li><strong>Apellido:</strong> ${surname}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Teléfono:</strong> ${countryCode} ${phone}</li>
        <li><strong>Fecha de Nacimiento:</strong> ${dateOfBirth}</li>
        <li><strong>Idioma del Formulario:</strong> ${language}</li>
      </ul>
      <p>Por favor, contacta a este cliente lo antes posible.</p>
    `,
    }

    try {
        // Envía el correo electrónico
        await transporter.sendMail(mailOptions)
        console.log("Email sent successfully")
        return {
            success: true,
            message: "¡Registro exitoso! Nos pondremos en contacto contigo pronto.",
            errors: {},
        }
    } catch (error: any) {
        console.error("Error sending email:", error)
        return {
            success: false,
            message: "Hubo un error al procesar tu registro. Por favor, inténtalo de nuevo más tarde.",
            errors: {
                _form: [error.message || "Failed to send email."],
            },
        }
    }
}
