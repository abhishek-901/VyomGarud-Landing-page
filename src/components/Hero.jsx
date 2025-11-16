import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
    return (
        <header className="bg-brand-dark text-white overflow-hidden">
            {/* NAVBAR */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="container-max flex items-center justify-between py-8"
            >
                <div className="flex items-center gap-4">
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-12 h-12 bg-[#ff7b00] rounded-md flex items-center justify-center font-bold text-black shadow-lg"
                    >
                        VG
                    </motion.div>
                    <div>
                        <h1 className="text-xl font-semibold">VyomGarud</h1>
                        <p className="text-xs text-gray-400">Military-grade UAV Systems</p>
                    </div>
                </div>
                <nav className="hidden md:block">
                    <a href="#about" className="text-gray-300 mr-6 hover:text-white transition">About</a>
                    <a href="#products" className="text-gray-300 mr-6 hover:text-white transition">Products</a>
                    <a href="#contact" className="text-gray-300 hover:text-white transition">Contact</a>
                </nav>
            </motion.div>

            {/* HERO SECTION */}
            <div className="container-max py-20 flex flex-col-reverse md:flex-row items-center gap-12">
                {/* LEFT TEXT */}
                <div className="md:w-1/2">
                    <motion.h2
                        initial={{ y: 40, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.7 }}
                        className="text-4xl md:text-5xl font-bold leading-tight"
                    >
                        Precision. Autonomy. Reliability.
                    </motion.h2>

                    <motion.p
                        initial={{ y: 40, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="mt-4 text-gray-300 max-w-xl"
                    >
                        VyomGarud builds advanced unmanned aerial systems for critical missions — rugged, secure,
                        and engineered for precision outcomes.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="mt-8 flex gap-4"
                    >
                        <a href="#contact" className="inline-block px-6 py-3 bg-[#ff7b00] text-black rounded-md font-semibold shadow-lg hover:bg-[#ff8c1a] transition">Get in touch</a>
                        <a href="#products" className="inline-block px-6 py-3 border border-gray-700 rounded-md text-gray-200 hover:border-[#ff7b00] transition">Our Capabilities</a>
                    </motion.div>
                </div>

                {/* RIGHT DRONE IMAGE + ANIMATIONS */}
                <div className="md:w-1/2 flex justify-center relative">

                    {/* Floating Glow */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.4 }}
                        transition={{ duration: 1 }}
                        className="absolute w-72 h-72 bg-[#ff7b00] blur-[120px] rounded-full -z-10"
                    />

                    <motion.div
                        initial={{ scale: 0.85, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        whileHover={{ scale: 1.03 }}
                        className="w-full max-w-md bg-gradient-to-br from-[#111214] to-[#1b1d1f] rounded-3xl p-6 shadow-2xl border border-gray-800"
                    >
                        <motion.img
                            src="/drone.png"
                            alt="VyomGarud Drone"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="rounded-xl w-full object-cover drop-shadow-[0_0_20px_rgba(255,123,0,0.3)]"
                        />
                    </motion.div>
                </div>
            </div>
        </header>
    )
}