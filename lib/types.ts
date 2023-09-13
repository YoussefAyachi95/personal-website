import { links } from "./data"

export type SectionName = (typeof links)[number]["name"]

export type Language = 'en' | 'de';

export type LanguageContextType = {
  language: Language;
  changeLanguage: (newLanguage: Language) => void;
};