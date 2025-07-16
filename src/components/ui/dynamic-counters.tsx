"use client"

import { useState, useEffect } from "react"
import { User } from "lucide-react"

type Language = "es" | "en" | "ca" | "it"

interface DynamicCountersProps {
    language: Language
    translations: Record<Language, any> // Using any for simplicity, can be more specific
}

export default function DynamicCounters({ language, translations }: DynamicCountersProps) {
    const [platformNetBenefit, setPlatformNetBenefit] = useState(466842291)
    const [newUsersToday, setNewUsersToday] = useState(4002)

    useEffect(() => {
        const benefitInterval = setInterval(() => {
            setPlatformNetBenefit((prev) => prev + Math.floor(Math.random() * 1000) + 100) // Increment by 100-1099
        }, 5000) // Update every 5 seconds

        const usersInterval = setInterval(() => {
            setNewUsersToday((prev) => prev + Math.floor(Math.random() * 5) + 1) // Increment by 1-5 users
        }, 10000) // Update every 10 seconds

        return () => {
            clearInterval(benefitInterval)
            clearInterval(usersInterval)
        }
    }, [])

    const t = translations[language]

    return (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
            <div className="text-white text-xs text-center sm:text-left">
                <div className="text-orange-400 font-semibold">{t.platformBenefit}</div>
                <div className="text-lg font-bold">€{platformNetBenefit.toLocaleString()}</div>
            </div>
            <div className="text-white text-xs text-center sm:text-left">
                <div className="text-orange-400 font-semibold">{t.userIncome}</div>
                <div className="text-lg font-bold flex items-center justify-center sm:justify-start gap-1">
                    <User className="w-4 h-4 text-white" />
                    {newUsersToday.toLocaleString()}
                </div>
            </div>
        </div>
    )
}
