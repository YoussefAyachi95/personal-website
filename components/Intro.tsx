"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import useSectionInView from '@/hooks/useSectionInView'
import useActiveSectionContext from '@/hooks/useActiveSectionContext'
import { useLanguage } from '@/hooks/useLanguage'
import { BsArrowRight, BsLinkedin, BsGithub } from'react-icons/bs'
import { HiDownload } from'react-icons/hi'

import meImg from '@/public/me.jpg'

export default function Intro() {
    const { ref } = useSectionInView("Home", 0.5)
    const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext()
    const { language } = useLanguage()


    return (
        <section ref={ref} id="home" className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
            <div className="flex items-center justify-center">
                <div className="relative">
                    <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "tween", duration: 0.2 }}>
                        <Image
                        src={meImg}
                        alt="Youssef Ayachi portrait" 
                        width="192"  
                        height="192"  
                        quality="95" 
                        priority={true}
                        className="h-36 w-36 object-cover rounded-full border-[0.35rem] border-white shadow-xl"
                        />
                    </motion.div>

                    <motion.span
                    // animation-wave
                    className="text-4xl absolute bottom-1 right-1"
                    initial={{ opacity: 0, scale: 0 }} 
                    animate={{ opacity: 1, scale: 1 }} 
                    transition={{ type: "spring", stiffness: 125, delay: 0.1, duration: 0.7 }}>
                        👋🏽
                    </motion.span>
                </div>
            </div>

            <motion.h1
            className="mb-10 mt-4 px-4 text-2xl font-medium !leading[1.5] sm:text-4xl"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            >
                {language === 'de' ? (
                    <>
                        <span>Hallo! </span>
                        <span>Ich bin <span className="hover:cursor-pointer font-bold">Youssef,</span> Frontend Developer, </span>
                        <span>und ich möchte dazu beitragen, das Internet zu einem kreativeren, zugänglicheren und besseren Ort zu machen.</span>
                    </>
                ) : (
                    <>
                        <span>Hi there! </span>
                        <span>I&apos;m <span className="hover:cursor-pointer font-bold">Youssef,</span> Frontend Developer, </span>
                        <span>and I want to help make the internet a more creative, accessible, and better place.</span>
                    </>
                )}
            </motion.h1>

            <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.1,
            }}
            >
                {language === 'de' ? (
                    <>
                        <Link
                        href="#contact"
                        className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full
                        outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                        onClick={() => {
                            setActiveSection('Contact');
                            setTimeOfLastClick(Date.now());
                        }}> Kontaktiere mich <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
                        </Link>

                        <a
                        href="/CV.pdf"
                        download
                        className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full
                        outline-none focus:scale-110 hover:scale-110 active:scale-105 transition borderBlack dark:bg-white/10"> 
                        Lebenslauf herunterladen <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
                        </a>
                    </>
                    ) : (
                    <>
                        <Link
                        href="#contact"
                        className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full
                        outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
                        onClick={() => {
                            setActiveSection('Contact');
                            setTimeOfLastClick(Date.now());
                        }}
                        >
                        Contact me <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
                        </Link>

                        <a
                        href="/CV.pdf"
                        download
                        className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full
                        outline-none focus:scale-110 hover:scale-110 active:scale-105 transition 
                        borderBlack dark:bg-white/10"> Download CV <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
                        </a>
                    </>
                    )}
                    <a 
                    href="https://www.linkedin.com/in/youssef-ayachi-0a097b229/" 
                    target="_blank" 
                    className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15]
                    hover:text-gray-950 active:scale-105 transition borderBlack dark:bg-white/10 dark:text-white/60">
                        <BsLinkedin />
                    </a>

                    <a 
                    href="https://github.com/YoussefAyachi95" 
                    target="_blank" 
                    className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] 
                    hover:text-gray-950 active:scale-105 transition borderBlack dark:bg-white/10 dark:text-white/60">
                        <BsGithub />
                    </a>
            </motion.div>
        </section>
    )
}
