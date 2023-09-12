"use client"

import React from 'react'
import { motion } from 'framer-motion'
import useSectionInView from '@/hooks/useSectionInView'
import { sendEmail } from '@/actions/sendEmail'
import toast from "react-hot-toast";
import SectionHeading from './SectionHeading'
import SubmitButton from './SubmitButton'

export default function Contact() {
    const { ref } = useSectionInView("Contact")

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
            <p className="text-gray-700 -mt-6">
                Contact me directly at <a className="underline" href="mailto:youssef-ayachi@web.de">youssef-ayachi@web.de</a> or through this form.
            </p>
            <form className="mt-10 flex flex-col" action={async (formData) => {
                    const {data, error} = await sendEmail(formData)

                    if (error) {
                        toast.error(error)
                        return
                    }

                    toast.success("Email has been sent!")
                }}>
                <input name="senderEmail" type="email" required maxLength={500} placeholder="Your email" className="h-14 px-4 rounded-lg borderBlack" />
                <textarea name="message" className="h-52 my-3 rounded-lg borderBlack p-4" required maxLength={5000} placeholder="Your message" />
                <SubmitButton />
            </form>
        </motion.section>
    )
}