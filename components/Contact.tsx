"use client"

import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import useSectionInView from '@/hooks/useSectionInView'
import { sendEmail } from '@/actions/sendEmail'
import toast from "react-hot-toast";
import SectionHeading from './SectionHeading'
import SubmitButton from './SubmitButton'

export default function Contact() {
    const { ref } = useSectionInView("Contact")
    const senderEmailRef = useRef<HTMLInputElement | null>(null)
    const messageRef = useRef<HTMLTextAreaElement | null>(null)

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
            <SectionHeading>Contact Me</SectionHeading>
            <p className="text-gray-700 -mt-6 dark:text-white/80">
                Contact me directly at <a className="underline" href="mailto:youssef-ayachi@web.de">youssef-ayachi@web.de</a> or through this form.
            </p>
            <form className="mt-10 flex flex-col dark:text-black" action={async (formData) => {
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
                    placeholder="Your email"
                    className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none" />
                <textarea 
                    name="message" 
                    className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none" 
                    required 
                    maxLength={5000} 
                    ref={messageRef}
                    placeholder="Your message" />
                <SubmitButton />
            </form>
        </motion.section>
    )
}
