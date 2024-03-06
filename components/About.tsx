"use client"

import React from 'react'
import useSectionInView from '@/hooks/useSectionInView'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'
import { useLanguage } from '@/hooks/useLanguage'


export default function About() {
  const { ref } = useSectionInView("About")
  const { language } = useLanguage()
  
  return (
    <motion.section 
    ref={ref}
    className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.175 }}
    id="about"
    >
       {
        language === "de" ? (
          <>
            <SectionHeading>Über mich</SectionHeading>
            <p className="mb-3 text-lg">
              Nachdem ich viele Jahre lang Erfahrungen in verschiedenen Bereichen gesammelt hatte, entschied ich mich, meine Leidenschaft für das Programmieren zu verfolgen.
              Zunächst absolvierte ich einige Online-Kurse auf <a href="https://www.coursera.org/" target="_blank" className="font-medium hover:underline">Coursera</a>, um mit den Grundlagen zu beginnen. Nachdem ich erkannte, dass dies der Weg war, den ich verfolgen wollte,
              schrieb ich mich in ein einjähriges Coding-Bootcamp an der <a href="https://digitalcareerinstitute.org/" target="_blank" className="font-medium hover:underline">DCI</a> ein und schloss erfolgreich als <span className="font-medium">Full-Stack Web Developer</span> ab.
            </p>
            <p className="mb-3 text-lg">
              Mein Kernstack umfasst <span className="font-medium">Typescript, React/Next.js, Node.js und PostgreSQL</span> aber Ich bin immer bestrebt, neue Technologien zu lernen und auf dem neuesten Stand der Entwicklungen zu bleiben.
            </p>
            <p className="text-lg">
              In diesen Tagen verbringe ich die meiste Zeit mit Recherchieren, dem Erlernen neuer Fähigkeiten und dem Codieren.
              Wenn ich nicht code, spiele ich gerne Videospiele, mache Spaziergänge im nahegelegenen Park und streichle alle guten Katzen.
            </p>
          </>
        ): (
          <>
            <SectionHeading>About Me</SectionHeading>
            <p className="mb-3 text-lg">
                After gaining experience in various fields over the course of many years, I decided to pursue my passion for programming. 
                Initially, I took some online courses at <a href="https://www.coursera.org/" target="_blank" className="font-medium hover:underline">Coursera</a> to get started with the basics. After realizing that this was the path I wanted to follow, 
                I enrolled in a one-year coding bootcamp at <a href="https://digitalcareerinstitute.org/" target="_blank" className="font-medium hover:underline">DCI</a> and successfully graduating as a <span className="font-medium">Full Stack Web Developer</span>.
            </p>
            <p className="mb-3 text-lg">
                My core stack includes <span className="font-medium">Typescript, React/Next.js, Node.js and PostgreSQL</span> but I am always eager to learn about new technologies and I stay updated with the latest developments. 
            </p>
            <p className="text-lg">
                These days, I spend most of my time researching, learning new skills, and coding. 
                When I&apos;m not coding, I enjoy playing video games, having a walk in the park nearby, and petting all the good cats. 
            </p>
          </>
        )
       }
    </motion.section>
  )
}
