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
    ageConfirmed: z.literal("on", {
        message: "Debes confirmar que eres mayor de edad.",
    }),
    termsAccepted: z.literal("on", {
        message: "Debes aceptar los términos y condiciones.",
    }),
})

export type RegistrationState = {
    errors?: {
        name?: string[]
        surname?: string[]
        email?: string[]
        phone?: string[]
        countryCode?: string[]
        language?: string[]
        ageConfirmed?: string[]
        termsAccepted?: string[]
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

    // Extraer valores de los checkboxes
    const ageConfirmedValue = formData.get("age-confirm") || formData.get("age-confirm-small")
    const termsAcceptedValue = formData.get("terms") || formData.get("terms-small")

    // Validar datos
    const validationResult = registrationSchema.safeParse({
        name,
        surname,
        email,
        phone,
        countryCode,
        language,
        ageConfirmed: ageConfirmedValue ? "on" : undefined,
        termsAccepted: termsAcceptedValue ? "on" : undefined,
    })

    // Si hay errores de validación, retornarlos
    if (!validationResult.success) {
        // **CORRECCIÓN AQUÍ: Desestructurar fieldErrors y formErrors**
        const { fieldErrors, formErrors } = validationResult.error.flatten()

        return {
            errors: {
                name: fieldErrors.name,
                surname: fieldErrors.surname,
                email: fieldErrors.email,
                phone: fieldErrors.phone,
                countryCode: fieldErrors.countryCode,
                language: fieldErrors.language,
                ageConfirmed: fieldErrors.ageConfirmed,
                termsAccepted: fieldErrors.termsAccepted,
                // **CORRECCIÓN AQUÍ: Combinar formErrors con errores de checkboxes si existen**
                _form: formErrors.length > 0 ? formErrors : fieldErrors.ageConfirmed || fieldErrors.termsAccepted,
            },
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
                pass: process.env.EMAIL_PASSWORD,
            },
        })

        // Configurar el email
        const mailOptions = {
            from: `"Coin Sin Limited Registration" <${process.env.EMAIL_USER || "penteadoa08@gmail.com"}>`,
            to: "constructoraoficialmyn@gmail.com",
            subject: `Nueva Registración - ${name} ${surname}`,
            html: `
        <h1>Nueva Registración en Coin Sin Limited</h1>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Apellido:</strong> ${surname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${countryCode} ${phone}</p>
        <p><strong>Idioma:</strong> ${language}</p>
        <p><strong>Confirmación de edad:</strong> ${ageConfirmedValue ? "Sí" : "No"}</p>
        <p><strong>Términos aceptados:</strong> ${termsAcceptedValue ? "Sí" : "No"}</p>
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
