"use client"

import React from 'react'
import { projectsData } from '@/lib/data'
import useSectionInView from '@/hooks/useSectionInView'
import { useLanguage } from '@/hooks/useLanguage'
import SectionHeading from './SectionHeading'
import Project from './Project'

export default function Projects() {
    const { ref } = useSectionInView("Projects", 0.5)
    const { language } = useLanguage()

    return (
        <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
            <SectionHeading>
                {
                    language === "de" ? "Meine Projekte" : "My projects"
                }
            </SectionHeading>
            <div>
                {
                    projectsData.map(project => (
                        <React.Fragment key={project.title}>
                            <Project {...project} />
                        </React.Fragment>
                    ))
                }
            </div>
        </section>
    )
}

