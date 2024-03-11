import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import IffyImg from "@/public/Iffy.jpg";
import SnappyImg from "@/public/Snappy.jpg";
import dassanaImg from "@/public/dassana.png";
import dungeonImg from "@/public/dungeon.png";
import yourCharaImg from "@/public/yourchara.jpg";
import teachik from "@/public/teachik.jpg";
import wawaImg from "@/public/wawa.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "HTML, CSS und Javascript for Web Developers",
    title_de: "HTML, CSS und JavaScript für Webentwickler",
    location: "Coursera - Online",
    description:
      "3 Months online course for beginners with HTML, CSS and Javascript",
    description_de:
      "3 Monate Online-Kurs für Anfänger mit HTML, CSS und JavaScript",
    icon: React.createElement(LuGraduationCap),
    date: "11/2021 - 01/2022",
  },
  {
    title: "Specialized Programm - Javascript und JQuery",
    title_de: "Spezialisiertes Programm - JavaScript und JQuery",
    location: "Coursera - Online",
    description:
      "2 Months online course where I learnt to manipulate data with Javascript and JQuery",
    description_de:
      "2 Monate Online-Kurs, in dem ich gelernt habe, Daten mit JavaScript und JQuery zu manipulieren",
    icon: React.createElement(LuGraduationCap),
    date: "01/2022 - 03/2022",
  },
  {
    title: "Intership as Full-Stack Web Developer",
    title_de: "Ausbildung als Full-Stack Webentwickler",
    location: "DCI, Berlin - Remote",
    description:
      "One-year full-time intensive training program for web developers using MERN technologies. Created responsive design applications, performed CRUD operations and built servers connected to databases.",
    description_de:
      "Einjähriges Vollzeit-Intensivtraining für Webentwickler unter Verwendung von MERN-Technologien. Erstellung von reaktionsfähigen Designanwendungen, Durchführung von CRUD-Operationen und Aufbau von Servern, die mit Datenbanken verbunden sind.",
    icon: React.createElement(LuGraduationCap),
    date: "06/2022 - 08/2023",
  },
  {
    title: "Full Stack Web Developer (Self-Employed)",
    title_de: "Full Stack Web Developer (Selbstständig)",
    location: "Remote",
    description:
      "Expanding my knowledge and portfolio in the field of web and software development. Working in the frontend with new technologies such as TypeScript, Next.js, React Native, and Expo. Utilizing backend tools such as Prisma, Supabase, and PostgreSQL",
    description_de:
      "Ausbau meiner Kenntnisse und meines Portfolios im Bereich der Web und Softwareentwicklung. Arbeit im Frontend mit neuen Technologien wie TypeScript, Next.js, React Native und Expo. Einsatz von Backend-Tools wie Prisma, Supabase und PostgreSQL",
    icon: React.createElement(LuGraduationCap),
    date: "09/2023 - Today",
  },
] as const;

export const projectsData = [
  {
    title: "Wawa",
    description:
      "React Native mobile application designed to provide users with a convenient way to search for baby shops nearby",
    desc_de: "Ein Gruppenanwendungsprojekt, das mit React und Firebase erstellt wurde. Mit diesem Projekt können Sie Benutzer erstellen und Ihre Projekte verwalten.", 
    gitUrl: "https://github.com/YoussefAyachi95/wawa-mobile-app",
    tags: ["React-Native", "Expo", "Typescript", "Supabase", "Prisma", "PostgreSQL"],
    imageUrl: wawaImg,
  }, 
  {
    title: "Teachik",
    description:
      "Teachik is an online learning platform where instructors can create and monetize courses while learners enroll in and access a wide range of educational content.",
    desc_de: "Eine Online-Lernplattform, auf der Lehrer Kurse erstellen und verkaufen können, während Lernende sich einschreiben und auf eine Vielzahl von Bildungsinhalten zugreifen können.", 
    tags: ["Next.js", "Typescript", "Prisma", "Tailwind CSS"],
    gitUrl: "https://github.com/YoussefAyachi95/teachik",
    imageUrl: teachik,
  },
  {
    title: "YourChara AI",
    description:
      "Versatile platform for creating custom chatbots with unique personalities and conversational styles.",
    desc_de: "Vielseitige Plattform zur Erstellung individueller Chatbots mit einzigartigen Persönlichkeiten und Gesprächsstilen.", 
    tags: ["Next.js", "Typescript", "Prisma", "PostgreSQL", "Tailwind CSS"],
    gitUrl: "https://github.com/YoussefAyachi95/character-ai-clone",
    imageUrl: yourCharaImg,
  },
  {
    title: "Iffy",
    description:
      "Iffy is a React-based GIF search app that enables users to filter, view, and save GIFs, explore different routes, and store their last search in local storage.",
    desc_de: "Iffy ist eine React-basierte GIF-Such-App, die es Benutzern ermöglicht, GIFs zu filtern, anzusehen, zu speichern, und ihre Suche zu speichern.", 
    tags: ["React", "SCSS", "Wouter"],
    gitUrl: "https://github.com/YoussefAyachi95/React-Final-Project",
    imageUrl: IffyImg,
  },
  {
    title: "Dassana Project Administrator",
    description:
      "A group application project made with React and Firebase. This project allows you to create a user and manage your projects.",
    desc_de: "Ein Gruppenanwendungsprojekt, das mit React und Firebase erstellt wurde. Mit diesem Projekt können Sie Benutzer erstellen und Ihre Projekte verwalten.", 
    gitUrl: "https://github.com/YoussefAyachi95/dassana-project-administrator",
    tags: ["React", "Firebase"],
    imageUrl: dassanaImg,
  },
  {
    title: "Snappy",
    description:
      "A functional Snapchat Clone Web App. Users can sign in, upload pictures to a database, and view them for 10 seconds before they disappear",
    desc_de: "Eine funktionale Snapchat-Klon-Web-App. Benutzer können sich anmelden, Bilder in eine Datenbank hochladen und sie 10 Sekunden lang anzeigen, bevor sie verschwinden.",
    gitUrl: "https://github.com/YoussefAyachi95/Snappy",
    tags: ["React", "Redux", "Firebase"],
    imageUrl: SnappyImg,
  },
  {
    title: "Text Based Dungeon Crawler",
    description:
      "A group project to create a text-based JavaScript mini game in the terminal. Players navigate through rooms, facing randomly generated enemies to defeat.",
    desc_de: "Ein Gruppenprojekt zur Erstellung eines textbasierten JavaScript-Minispiel im Terminal. Spieler navigieren durch Räume.",
    gitUrl: "https://github.com/YoussefAyachi95/Text-Based-Dungeon-Crawler",
    tags: ["Javascript", "Node.js"],
    imageUrl: dungeonImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind CSS",
  "Bootstrap",
  "SCSS/SASS",
  "Prisma",
  "MongoDB",
  "Zustand",
  "Express",
  "PostgreSQL",
  "JQuery",
  "Figma",
  "Photoshop",
  "React-Native",
  "Expo",
  "Supabase",
  "Firebase",
] as const;