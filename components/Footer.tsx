"use client"

import React from 'react'
import { useLanguage } from '@/hooks/useLanguage'

export default function Footer() {
    const currentYear = new Date().getFullYear()
    const { language } = useLanguage()

    return (
        <footer className="mb-10 px-4 text-center text-gray-500">
           {
            language === "de" ? (
                <>
                    <small className="mb-2 block text-xs">&copy; {currentYear} Youssef. Alle Rechte vorbehalten</small>
                    <p className="text-xs">
                        <span className="font-semibold">Über diese Website:</span> erstellt mit React & Next.js (App-Router & Server-Aktionen), TypeScript, Tailwind CSS, Framer Motion, React Email & Resend, Vercel-Hosting.
                    </p>
                </>
            ) : (
                <>
                    <small className="mb-2 block text-xs">&copy; {currentYear} Youssef. All rights reserved</small>
                    <p className="text-xs">
                        <span className="font-semibold">About this website:</span> built with React & Next.js (App router & server actions), Typescript, Tailwind CSS, Framer Motion, React Email & Resend, Vercel hosting.
                    </p>
                </>
            )
           }
        </footer>
    )
}
