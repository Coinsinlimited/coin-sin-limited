import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
    // Attempt to get the IP address from various headers
    const ip = request.ip || request.headers.get("x-forwarded-for") || request.headers.get("x-real-ip")

    if (!ip) {
        return NextResponse.json({ error: "Unable to determine IP address" }, { status: 400 })
    }

    try {
        // Use a public IP geolocation API. Be mindful of rate limits for production.
        // For Vercel deployments, `request.geo` is often available and more reliable.
        // If `request.geo` is available, use it directly.
        if (request.geo) {
            return NextResponse.json({ countryCode: request.geo.country })
        }

        // Fallback to an external API if not deployed on Vercel or geo is not available
        const response = await fetch(`https://ipapi.co/${ip}/json/`)
        if (!response.ok) {
            throw new Error(`Failed to fetch IP info: ${response.statusText}`)
        }
        const data = await response.json()

        if (data.country_code) {
            return NextResponse.json({ countryCode: data.country_code })
        } else {
            return NextResponse.json({ error: "Country code not found for IP" }, { status: 404 })
        }
    } catch (error) {
        console.error("Error in get-country-code API:", error)
        return NextResponse.json({ error: "Internal server error" }, { status: 500 })
    }
}
