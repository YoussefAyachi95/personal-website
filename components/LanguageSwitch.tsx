"use client"

import React from 'react'
import { useLanguage } from '@/hooks/useLanguage';
import Image from 'next/image';

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
                    {language === 'en' ? 
                    <Image 
                      src="https://www.svgrepo.com/show/248821/united-kingdom-uk.svg"
                      alt="English"
                      width="30"
                      height="30" 
                    /> : 
                    <Image 
                      src="https://www.svgrepo.com/show/405490/flag-for-flag-germany.svg"
                      alt="English"
                      width="30"
                      height="30"
                    />
                  }
        </button>
        )
}
