"use client"

import type React from "react"
import { useFormStatus } from "react-dom"

interface SubmitButtonProps extends React.ComponentPropsWithoutRef<"button"> {
    children: React.ReactNode
    language?: "es" | "en" // Make language optional
    disabled?: boolean
}

interface SmallSubmitButtonProps extends React.ComponentPropsWithoutRef<"button"> {
    children: React.ReactNode
    language?: "es" | "en" // Make language optional
    disabled?: boolean
}

export function SubmitButton({ children, language, disabled, ...props }: SubmitButtonProps) {
    const { pending } = useFormStatus()
    const loadingText = language === "es" ? "Enviando..." : "Sending..."

    return (
        <button
            {...props}
            type="submit"
            disabled={disabled || pending}
            className={`w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 animate-in zoom-in-90 duration-500 delay-600 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 ${disabled || pending ? "opacity-50 cursor-not-allowed" : ""}`}
        >
            <div className="relative flex items-center justify-center gap-3">
                <span>{pending ? loadingText : children}</span>
            </div>
        </button>
    )
}

export function SmallSubmitButton({ children, language, disabled, ...props }: SmallSubmitButtonProps) {
    const { pending } = useFormStatus()
    const loadingText = language === "es" ? "Enviando..." : "Sending..."
    return (
        <button
            {...props}
            type="submit"
            disabled={disabled || pending}
            // Copia las mismas clases de SubmitButton
            className={`w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 animate-in zoom-in-90 duration-500 delay-600 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 ${disabled || pending ? "opacity-50 cursor-not-allowed" : ""}`}
        >
            {/* Copia la estructura interna de SubmitButton */}
            <div className="relative flex items-center justify-center gap-3">
                <span>{pending ? loadingText : children}</span>
            </div>
        </button>
    )
}
