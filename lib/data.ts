import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import IffyImg from "@/public/Iffy.jpg";
import SnappyImg from "@/public/Snappy.jpg";
import dassanaImg from "@/public/dassana.png";
import dungeonImg from "@/public/dungeon.png";

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
    location: "Coursera - Online",
    description:
      "3 Months online course for beginners with HTML, CSS and Javascript",
    icon: React.createElement(LuGraduationCap),
    date: "11/2021 - 01/2022",
  },
  {
    title: "Specialized Programm - Javascript und JQuery",
    location: "Coursera - Online",
    description:
      "2 Months online course where I learnt to manipulate data with Javascript and JQuery",
    icon: React.createElement(CgWorkAlt),
    date: "01/2022 - 03/2022",
  },
  {
    title: "Intership as Full-Stack Web Developer",
    location: "DCI, Berlin - Remote",
    description:
      "One-year full-time intensive training program for web developer, including MERN technologies. Responsive frontend created, CRUD operations performed, server built, and connected to a database.",
    icon: React.createElement(FaReact),
    date: "06/2022 - 08/2023",
  },
] as const;

export const projectsData = [
  {
    title: "Iffy",
    description:
      "Iffy is a React-based GIF search app that enables users to filter, view, and save GIFs, explore different routes, and store their last search in local storage.",
    tags: ["React", "SCSS", "Wouter"],
    imageUrl: IffyImg,
  },
  {
    title: "Dassana Project Administrator",
    description:
      "A group application project made with React and Firebase. This project allows you to create a user and manage your projects.",
    tags: ["React", "Firebase"],
    imageUrl: dassanaImg,
  },
  {
    title: "Snappy",
    description:
      "A functional Snapchat Clone Web App. Users can sign in, upload pictures to a database, and view them for 10 seconds before they disappear",
    tags: ["React", "Redux", "Firebase"],
    imageUrl: SnappyImg,
  },
  {
    title: "Text Based Dungeon Crawler",
    description:
      "A group project to create a text-based JavaScript mini game in the terminal. Players navigate through rooms, facing randomly generated enemies to defeat.",
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
  "Redux",
  "Express",
  "PostgreSQL",
  "JQuery",
  "Figma",
  "Photoshop",
] as const;