"use client"

import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import useSectionInView from '@/hooks/useSectionInView'
import { sendEmail } from '@/actions/sendEmail'
import { useLanguage } from '@/hooks/useLanguage'
import toast from "react-hot-toast";
import SectionHeading from './SectionHeading'
import SubmitButton from './SubmitButton'

export default function Contact() {
    const { ref } = useSectionInView("Contact")
    const { language } = useLanguage()
    const senderEmailRef = useRef<HTMLInputElement>(null)
    const messageRef = useRef<HTMLTextAreaElement>(null)

    return (
        <motion.section
        ref={ref}
        id="contact" 
        className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
        initial={{
            opacity: 0,
        }}
        whileInView={{
            opacity: 1,
        }}
        transition={{
            duration: 1,
        }}
        viewport={{
            once: true,
        }}
        >
            {
                language === "de" ? (
                    <>
                        <SectionHeading>Kontaktieren Sie mich</SectionHeading>
                        <p className="text-gray-700 -mt-6 dark:text-white/80">
                            Kontaktieren Sie mich direkt unter <a className="underline" href="mailto:youssef-ayachi@web.de">youssef-ayachi@web.de</a> oder über dieses Formular.
                        </p>
                    </>
                ) : (
                    <>
                        <SectionHeading>Contact Me</SectionHeading>
                        <p className="text-gray-700 -mt-6 dark:text-white/80">
                            Contact me directly at <a className="underline" href="mailto:youssef-ayachi@web.de">youssef-ayachi@web.de</a> or through this form.
                        </p>
                    </>
                )
            }
            <form className="mt-10 flex flex-col dark:text-black" action={async (formData) => {
                    const senderEmail = senderEmailRef.current?.value;
                    const message = messageRef.current?.value;
                
                    if (!senderEmail || !message) {
                        console.error("senderEmailRef or messageRef is null");
                        return;
                    }

                    const {data, error} = await sendEmail(formData)

                    if (error) {
                        toast.error(error)
                        return
                    }

                    toast.success("Email has been sent!")

                    senderEmailRef.current.value = '';
                    messageRef.current.value = '';
                }}>
                <input 
                    name="senderEmail" 
                    type="email" 
                    required 
                    maxLength={500} 
                    ref={senderEmailRef}
                    placeholder={language === "de" ? "Ihre Email" : "Your Email"}
                    className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none" />
                <textarea 
                    name="message" 
                    className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none" 
                    required 
                    maxLength={5000} 
                    ref={messageRef}
                    placeholder={language === "de" ? "Ihre Nachricht" : "Your message"}/>
                <SubmitButton />
            </form>
        </motion.section>
    )
}
