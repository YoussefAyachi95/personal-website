"use client"

import React from 'react'
import { skillsData } from '@/lib/data'
import useSectionInView from '@/hooks/useSectionInView'
import { useLanguage } from '@/hooks/useLanguage'
import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        },
    }),
}

export default function Skills() {
    const { ref } = useSectionInView("Skills")
    const { language } = useLanguage()

    return (
        <section ref={ref} id="skills" className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40">
            <SectionHeading>
                {
                    language === "de" ? "Meine Fähigkeiten" : "My Skills"
                }
            </SectionHeading>
            <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
                {
                    skillsData.map((skill, index) => (
                        <motion.li 
                            key={index} 
                            className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80" 
                            variants={fadeInAnimationVariants} 
                            initial="initial"
                            whileInView="animate"
                            custom={index}
                            viewport={{
                                once:true,
                        }}>
                            {skill}
                        </motion.li>
                    ))
                }
            </ul>
        </section>
    )
}
