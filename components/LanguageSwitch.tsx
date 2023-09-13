"use client"

import React from 'react'
import { useLanguage } from '@/hooks/useLanguage';

export default function LanguageSwitch() {
    const { language, changeLanguage } = useLanguage();

    const handleLanguageChange = () => {
        const newLanguage = language === 'en' ? 'de' : 'en';
        changeLanguage(newLanguage);
      };

    return (
        <button 
                className="fixed bottom-20 right-5 bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] 
                border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
                onClick={handleLanguageChange}
                >
                    {language === 'en' ? 'EN' : 'DE'}
        </button>
        )
}
