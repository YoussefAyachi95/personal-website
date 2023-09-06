"use client"

import React from 'react'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

export default function About() {
  return (
    <motion.section 
    className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.175 }}
    >
        <SectionHeading>About Me</SectionHeading>
        <p className="mb-3">
            After gaining experience in various fields over the course of many years, I decided to pursue my passion for programming. 
            Initially, I took some online courses at <a href="https://www.coursera.org/" target="_blank" className="font-medium">Coursera</a> to get started with the basics. After realizing that this was the path I wanted to follow, 
            I enrolled in a one-year coding bootcamp at <a href="https://digitalcareerinstitute.org/" target="_blank" className="font-medium">DCI</a> and successfully graduating as a <span className="font-medium">Full-stack web developer</span>.
            My favorite aspect of programming lies in design and functionality. I <span className="font-medium">love</span> the satisfaction of finally witnessing the end product. 
            My core stack includes <span className="font-medium">React, Next.js, Node.js, and MongoDB</span>. I am also proficient in TypeScript and SQL. 
            I am always eager to learn about new technologies and stay updated with the latest developments. 
            Currently, I am actively seeking a <span className="font-medium">full-time position</span> as a software developer.
        </p>
        <p>
            These days, I spend most of my time researching, learning new skills, and coding. 
            When I&apos;m not coding, I enjoy playing video games, having a walk in the park nearby, and petting all the good cats. 
        </p>
    </motion.section>
  )
}
