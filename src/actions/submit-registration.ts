"use server"

// Define el tipo para el estado de la respuesta del formulario
export type RegistrationState = {
    success: boolean
    message: string
    errors: {
        name?: string[]
        surname?: string[]
        email?: string[]
        phone?: string[]
        dateOfBirth?: string[] // ¡Añadido el campo dateOfBirth a los errores!
        countryCode?: string[]
        language?: string[]
        _form?: string[] // Para errores generales del formulario
    }
}

// Estado inicial del formulario
export const initialState: RegistrationState = {
    success: false,
    message: "",
    errors: {},
}

export async function submitRegistration(
    prevState: RegistrationState, // El estado anterior del formulario
    formData: FormData, // Los datos del formulario enviados
): Promise<RegistrationState> {
    const name = formData.get("name") as string
    const surname = formData.get("surname") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const dateOfBirth = formData.get("dateOfBirth") as string // Obtener la fecha de nacimiento
    const countryCode = formData.get("countryCode") as string
    const language = formData.get("language") as string

    const errors: RegistrationState["errors"] = {}

    // Validaciones básicas
    if (!name || name.trim().length < 2) {
        errors.name = ["El nombre debe tener al menos 2 caracteres."]
    }
    if (!surname || surname.trim().length < 2) {
        errors.surname = ["El apellido debe tener al menos 2 caracteres."]
    }
    if (!email || !email.includes("@")) {
        errors.email = ["Por favor, introduce una dirección de correo electrónico válida."]
    }
    if (!phone || phone.trim().length < 8) {
        errors.phone = ["El número de teléfono debe tener al menos 8 dígitos."]
    }
    if (!dateOfBirth) {
        errors.dateOfBirth = ["La fecha de nacimiento es obligatoria."]
    } else {
        // Validación de edad (ejemplo: mayor de 18 años)
        const today = new Date()
        const birthDate = new Date(dateOfBirth)
        let age = today.getFullYear() - birthDate.getFullYear()
        const m = today.getMonth() - birthDate.getMonth()
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--
        }
        if (age < 18) {
            errors.dateOfBirth = ["Debes tener al menos 18 años para registrarte."]
        }
    }
    if (!countryCode) {
        errors.countryCode = ["El código de país es obligatorio."]
    }

    // Si hay errores, devolver el estado con los errores
    if (Object.keys(errors).length > 0) {
        return {
            success: false,
            message: "El registro falló debido a errores de validación.",
            errors,
        }
    }

    // Simular una llamada a la API o una operación de base de datos
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // En una aplicación real, guardarías los datos aquí
    console.log("Datos de registro:", {
        name,
        surname,
        email,
        phone,
        dateOfBirth,
        countryCode,
        language,
    })

    // Devolver el estado de éxito
    return {
        success: true,
        message: `¡Muchas gracias, ${name}! Tu registro está completo.`,
        errors: {}, // Limpiar errores en caso de éxito
    }
}
