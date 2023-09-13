import { useContext } from "react";
import { LanguageContext } from "@/context/LanguageContext";
import { LanguageContextType } from "@/lib/types";

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  
  return context as LanguageContextType;
};