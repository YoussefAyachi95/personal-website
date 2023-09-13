"use client"

import React, { useState, useEffect, createContext, useContext } from 'react';
import { LanguageContextType, Language } from '@/lib/types';

type LanguageContextProviderProps = {
  children: React.ReactNode;
};

export const LanguageContext = createContext<LanguageContextType | null>(null);

export default function LanguageContextProvider({
  children,
}: LanguageContextProviderProps) {
  const [language, setLanguage] = useState<Language>('en');

  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    window.localStorage.setItem('language', newLanguage);
  };

  useEffect(() => {
    const localLanguage = window.localStorage.getItem('language') as Language | null;

    if (localLanguage) {
      setLanguage(localLanguage);
    } else {
      const userPreferredLanguage = navigator.language.split('-')[0];
      if (userPreferredLanguage === 'de') {
        setLanguage('de');
      } else {
        setLanguage('en');
      }
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
