"use client"

import { Button } from "@/components/ui/button"
import { useFormStatus } from "react-dom"
import type React from "react"

interface SubmitButtonProps {
    children: React.ReactNode
    language: "es" | "en" // Pass language as a prop
}

export function SubmitButton({ children, language }: SubmitButtonProps) {
    const { pending } = useFormStatus()
    const translations = {
        es: {
            registering: "Registrando...",
        },
        en: {
            registering: "Registering...",
        },
    }
    const t = translations[language]

    return (
        <Button
            type="submit"
            disabled={pending}
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white h-12 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group relative overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            <div className="relative flex items-center justify-center gap-3">
                {pending ? (
                    <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span>{t.registering}</span>
                    </>
                ) : (
                    <>
                        <svg
                            className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <span>{children}</span>
                    </>
                )}
            </div>
        </Button>
    )
}

interface SmallSubmitButtonProps {
    children: React.ReactNode
    language: "es" | "en" // Pass language as a prop
}

export function SmallSubmitButton({ children, language }: SmallSubmitButtonProps) {
    const { pending } = useFormStatus()
    const translations = {
        es: {
            registering: "Registrando...",
        },
        en: {
            registering: "Registering...",
        },
    }
    const t = translations[language]

    return (
        <Button
            type="submit"
            disabled={pending}
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white h-10 text-sm font-bold rounded-lg"
        >
            {pending ? t.registering : children}
        </Button>
    )
}
