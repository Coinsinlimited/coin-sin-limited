"use server"
import nodemailer from "nodemailer"
import { z } from "zod"

// Esquema de validación para el formulario de registro
const registrationSchema = z.object({
    name: z.string().min(2, { message: "El nombre es requerido" }),
    surname: z.string().min(2, { message: "El apellido es requerido" }),
    email: z.string().email({ message: "Ingrese un email válido" }),
    phone: z.string().min(8, { message: "Ingrese un teléfono válido" }),
    countryCode: z.string().min(1, { message: "Seleccione un país" }),
    language: z.string().min(1, { message: "Idioma requerido" }),
})

export type RegistrationState = {
    errors?: {
        name?: string[]
        surname?: string[]
        email?: string[]
        phone?: string[]
        countryCode?: string[]
        language?: string[]
        _form?: string[]
    }
    success?: boolean
    message?: string
}

export async function submitRegistration(prevState: RegistrationState, formData: FormData): Promise<RegistrationState> {
    // Extraer datos del formulario
    const name = formData.get("name") as string
    const surname = formData.get("surname") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const countryCode = formData.get("countryCode") as string
    const language = formData.get("language") as string

    // Validar datos
    const validationResult = registrationSchema.safeParse({
        name,
        surname,
        email,
        phone,
        countryCode,
        language,
    })

    // Si hay errores de validación, retornarlos
    if (!validationResult.success) {
        return {
            errors: validationResult.error.flatten().fieldErrors,
            success: false,
            message: "Por favor, complete todos los campos correctamente.",
        }
    }

    try {
        // Configurar transporte de nodemailer
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER || "penteadoa08@gmail.com",
                pass: process.env.EMAIL_PASSWORD, // Asegúrate de configurar esta variable de entorno
            },
        })

        // Configurar el email
        const mailOptions = {
            from: `"Coin Sin Limited Registration" <${process.env.EMAIL_USER || "penteadoa08@gmail.com"}>`,
            to: "constructoraoficialmyn@gmail.com", // Cambia por tu email de destino
            subject: `Nueva Registración - ${name} ${surname}`,
            html: `
        <h1>Nueva Registración en Coin Sin Limited</h1>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Apellido:</strong> ${surname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${countryCode} ${phone}</p>
        <p><strong>Idioma:</strong> ${language}</p>
        <p><strong>Fecha:</strong> ${new Date().toLocaleString()}</p>
        <hr>
        <p>Este mensaje fue enviado desde el formulario de registro de Coin Sin Limited.</p>
      `,
        }

        // Enviar el email
        await transporter.sendMail(mailOptions)

        // Retornar éxito
        return {
            success: true,
            message: "¡Gracias por registrarte! Te contactaremos a la brevedad.",
        }
    } catch (error) {
        console.error("Error al enviar el email:", error)
        return {
            errors: {
                _form: ["Hubo un problema al enviar tu registro. Por favor, intenta nuevamente más tarde."],
            },
            success: false,
            message: "Error al enviar el formulario.",
        }
    }
}
