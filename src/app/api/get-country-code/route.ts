import { NextResponse } from "next/server"

// Este es un manejador de ruta (Route Handler) de Next.js.
// Actúa como un endpoint de API en tu aplicación.
export async function GET(request: Request) {
    try {
        // Obtenemos la dirección IP del usuario de los encabezados de la solicitud.
        // Vercel automáticamente rellena 'x-forwarded-for' o 'x-real-ip' con la IP del cliente.
        const ip = request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip") || "127.0.0.1"
        console.log(`[API Route] IP detectada: ${ip}`) // Log para depuración

        // Usamos una API de geolocalización IP gratuita (ip-api.com) para obtener el código de país.
        // Nota: Para producción, considera un servicio más robusto y con límites de tasa.
        const response = await fetch(`http://ip-api.com/json/${ip}?fields=countryCode`)
        const data = await response.json()

        if (data.countryCode) {
            console.log(`[API Route] Código de país detectado: ${data.countryCode}`) // Log para depuración
            return NextResponse.json({ countryCode: data.countryCode })
        } else {
            // Si no se puede determinar el código de país, devolvemos un error 404.
            console.log("[API Route] No se pudo determinar el código de país.") // Log para depuración
            return NextResponse.json({ error: "No se pudo determinar el código de país" }, { status: 404 })
        }
    } catch (error) {
        // Manejo de errores en caso de que la solicitud falle.
        console.error("[API Route] Error al obtener el código de país:", error) // Log para depuración
        return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 })
    }
}
