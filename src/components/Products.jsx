import React from 'react'
import { motion } from 'framer-motion'

const items = [
    {
        title: 'Tactical Recon Drone',
        desc: 'Lightweight, long-endurance ISR platform with encrypted comms.',
        icon: '🛰️'
    },
    {
        title: 'Cargo Delivery UAV',
        desc: 'High-payload autonomous resupply with precision drop capabilities.',
        icon: '📦'
    },
    {
        title: 'Autonomous Swarm Module',
        desc: 'Cooperative autonomy for area coverage and redundancy.',
        icon: '🤖'
    },
    {
        title: 'Ground Control Suite',
        desc: 'Secure command station with mission planning and analytics.',
        icon: '💻'
    }
]

export default function Products() {
    return (
        <section id="products" className="mt-20 mb-24">
            <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl font-semibold mb-10 text-center"
            >
                Capabilities & Products
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {items.map((p, i) => (
                    <motion.div
                        key={p.title}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: i * 0.15 }}
                        whileHover={{ scale: 1.05, rotate: 1 }}
                        className="bg-[#0c0e10] border border-gray-800 p-6 rounded-2xl shadow-lg shadow-black/20 backdrop-blur-md cursor-pointer group"
                    >
                        <motion.div
                            initial={{ scale: 0.8 }}
                            whileHover={{ scale: 1.1 }}
                            transition={{ type: 'spring', stiffness: 200 }}
                            className="text-5xl mb-4 group-hover:rotate-6 transition-transform"
                        >
                            {p.icon}
                        </motion.div>

                        <h4 className="font-semibold text-lg group-hover:text-[#ff7b00] transition-colors">
                            {p.title}
                        </h4>

                        <p className="text-gray-400 mt-3 text-sm leading-relaxed">
                            {p.desc}
                        </p>

                        <motion.button
                            whileHover={{ x: 4 }}
                            className="mt-5 text-xs px-4 py-2 border border-gray-700 rounded-md group-hover:border-[#ff7b00] transition-colors"
                        >
                            Learn more →
                        </motion.button>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}