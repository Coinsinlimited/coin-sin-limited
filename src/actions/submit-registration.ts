"use server" // Directiva para indicar que este es un Server Action

import nodemailer from "nodemailer" // Importamos nodemailer

// Define el tipo para el estado de errores del formulario
type FormErrors = {
    name?: string[]
    surname?: string[]
    email?: string[]
    phone?: string[]
    dateOfBirth?: string[]
    countryCode?: string[]
    language?: string[]
    _form?: string[] // Añadido para errores generales del formulario
}

// Define el tipo para el estado completo del formulario
type FormState = {
    success: boolean
    message: string
    errors: FormErrors
}

export async function submitRegistration(prevState: FormState, formData: FormData): Promise<FormState> {
    const name = formData.get("name") as string
    const surname = formData.get("surname") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const dateOfBirth = formData.get("dateOfBirth") as string
    const countryCode = formData.get("countryCode") as string
    const language = formData.get("language") as string

    // Validación básica de los campos (puedes expandirla según tus necesidades)
    const errors: FormErrors = {}
    if (!name || name.trim().length < 2) {
        errors.name = ["El nombre es obligatorio y debe tener al menos 2 caracteres."]
    }
    if (!surname || surname.trim().length < 2) {
        errors.surname = ["El apellido es obligatorio y debe tener al menos 2 caracteres."]
    }
    if (!email || !email.includes("@")) {
        errors.email = ["El email es obligatorio y debe ser válido."]
    }
    if (!phone || phone.trim().length < 8) {
        errors.phone = ["El teléfono es obligatorio y debe tener al menos 8 dígitos."]
    }
    if (!dateOfBirth) {
        errors.dateOfBirth = ["La fecha de nacimiento es obligatoria."]
    }
    if (!countryCode) {
        errors.countryCode = ["El código de país es obligatorio."]
    }
    if (!language) {
        errors.language = ["El idioma es obligatorio."]
    }

    // Si hay errores de validación, devuelve el estado con los errores
    if (Object.keys(errors).length > 0) {
        return { success: false, message: "Por favor, corrige los errores en el formulario.", errors }
    }

    // --- Lógica de Envío de Email con Nodemailer (Gmail) ---
    const gmailUser = process.env.GMAIL_USER // Tu dirección de Gmail (ej: tu_correo@gmail.com)
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD // La contraseña de aplicación de Gmail

    // Verifica que las variables de entorno estén configuradas
    if (!gmailUser || !gmailAppPassword) {
        console.error("GMAIL_USER o GMAIL_APP_PASSWORD no están configuradas en las variables de entorno.")
        return {
            success: false,
            message: "Error interno del servidor: La configuración de email no está completa.",
            errors: { _form: ["Error al configurar el servicio de email."] },
        }
    }

    // Crea un "transporter" de Nodemailer usando las credenciales de Gmail
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: gmailUser,
            pass: gmailAppPassword,
        },
    })

    try {
        // Envía el email usando Nodemailer
        const info = await transporter.sendMail({
            from: `"${name} ${surname}" <${gmailUser}>`, // El remitente será tu Gmail, pero con el nombre del usuario del formulario
            to: process.env.CLIENT_EMAIL_FOR_RECEIVING_FORMS, // El email de tu cliente donde recibirá los datos del formulario
            subject: `Nuevo Registro de Coin Sin Limited: ${name} ${surname}`,
            html: `
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Apellido:</strong> ${surname}</p>
        <p><strong>Email del Usuario:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${countryCode} ${phone}</p>
        <p><strong>Fecha de Nacimiento:</strong> ${dateOfBirth}</p>
        <p><strong>Idioma Seleccionado:</strong> ${language}</p>
        <br/>
        <p>Este usuario se ha registrado a través del formulario de Coin Sin Limited.</p>
      `,
        })

        console.log("Mensaje enviado: %s", info.messageId)

        // Si el email se envió con éxito, devuelve el estado de éxito para el formulario
        return {
            success: true,
            message: "¡Registro exitoso! Nos pondremos en contacto contigo pronto.",
            errors: {},
        }
    } catch (error) {
        console.error("Error inesperado al enviar el email con Nodemailer:", error)
        return {
            success: false,
            message: "Error interno del servidor al procesar el registro.",
            errors: { _form: ["Ocurrió un error inesperado al enviar el email."] },
        }
    }
}
