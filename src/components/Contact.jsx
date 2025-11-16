import React, { useState } from 'react'
import { motion } from "framer-motion"
import { Mail, Phone } from "lucide-react"

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
    const onSubmit = (e) => {
        e.preventDefault()
        console.log('Contact form submitted', form)
        alert('Thanks — form data printed to console (for demo).')
        setForm({ name: '', email: '', message: '' })
    }

    return (
        <section id="contact" className="mt-20 mb-24">
            <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-semibold mb-8 text-center"
            >
                Contact
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <motion.form
                    onSubmit={onSubmit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-[#0c0e10] p-8 rounded-2xl border border-gray-800 shadow-lg shadow-black/20 backdrop-blur"
                >
                    <label className="block mb-5">
                        <span className="text-sm text-gray-300">Name</span>
                        <input
                            required
                            name="name"
                            value={form.name}
                            onChange={onChange}
                            className="mt-2 block w-full bg-[#111316] border border-gray-700 focus:border-[#ff7b00] outline-none rounded-lg px-4 py-3 transition-all"
                        />
                    </label>

                    <label className="block mb-5">
                        <span className="text-sm text-gray-300">Email</span>
                        <input
                            required type="email"
                            name="email"
                            value={form.email}
                            onChange={onChange}
                            className="mt-2 block w-full bg-[#111316] border border-gray-700 focus:border-[#ff7b00] outline-none rounded-lg px-4 py-3 transition-all"
                        />
                    </label>

                    <label className="block mb-5">
                        <span className="text-sm text-gray-300">Message</span>
                        <textarea
                            required
                            name="message"
                            value={form.message}
                            onChange={onChange}
                            rows="5"
                            className="mt-2 block w-full bg-[#111316] border border-gray-700 focus:border-[#ff7b00] outline-none rounded-lg px-4 py-3 transition-all"
                        ></textarea>
                    </label>

                    <button
                        type="submit"
                        className="mt-4 w-full py-3 bg-[#ff7b00] hover:bg-[#ff8c1a] text-black rounded-xl font-semibold text-lg transition-all shadow-md"
                    >
                        Send Message
                    </button>
                </motion.form>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-[#0c0e10] p-8 rounded-2xl border border-gray-800 shadow-lg shadow-black/20 backdrop-blur flex flex-col justify-center"
                >
                    <h4 className="font-semibold text-xl mb-4">Get in touch</h4>

                    <div className="flex items-center gap-3 text-gray-300">
                        <Mail size={18} className="text-[#ff7b00]" />
                        <p className="text-sm">hello@vyomgarud.example</p>
                    </div>

                    <div className="flex items-center gap-3 text-gray-300 mt-3">
                        <Phone size={18} className="text-[#ff7b00]" />
                        <p className="text-sm">+91 8881444693</p>
                    </div>

                    <p className="text-gray-400 text-sm mt-6 leading-relaxed">
                        Or fill the form and we'll respond within 2 business days.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
