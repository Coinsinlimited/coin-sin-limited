'use client'

import { useFormStatus } from "react-dom"
import { Button } from "@/components/ui/button"

interface SubmitButtonProps {
    children: React.ReactNode
    className?: string
}

export function SubmitButton({ children, className }: SubmitButtonProps) {
    const { pending } = useFormStatus()

    return (
        <Button
            type="submit"
            disabled={pending}
            className={className}
        >
            {pending ? (
                <div className="relative flex items-center justify-center gap-3">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    <span>Registrando...</span>
                </div>
            ) : (
                <div className="relative flex items-center justify-center gap-3">
                    <svg
                        className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <span>{children}</span>
                </div>
            )}
        </Button>
    )
}
