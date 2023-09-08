"use client"

import React, { useEffect } from 'react'
import { projectsData } from '@/lib/data'
import { useInView } from 'react-intersection-observer'
import useActiveSectionContext from '@/hooks/useActiveSectionContext'
import SectionHeading from './SectionHeading'
import Project from './Project'

export default function Projects() {
    const { ref, inView } = useInView({
        threshold: 0.5,
    })
    const { setActiveSection } = useActiveSectionContext()

    useEffect(() => {
        if (inView) {
        setActiveSection("Projects")
        }
    }, [inView, setActiveSection])


  return (
    <section ref={ref} id="projects" className="scroll-mt-28">
        <SectionHeading>My projects</SectionHeading>
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

