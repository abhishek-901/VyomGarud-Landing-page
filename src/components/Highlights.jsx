import React from 'react'

export default function Highlights() {
    const bullets = [
        { title: 'Military-grade reliability', text: 'Built to MIL-STD environments and tested for durability.' },
        { title: 'Secure comms & autonomy', text: 'End-to-end encryption and hardened autonomy stacks.' },
        { title: 'Rapid deployment', text: 'Field-deployable with minimal logistics footprint.' }
    ]

    return (
        <section className="mt-12 mb-12">
            <h3 className="text-2xl font-semibold mb-4">Highlights</h3>
            <div className="flex flex-col md:flex-row gap-4">
                {bullets.map(b => (
                    <div key={b.title} className="flex-1 bg-[#0b0d0e] p-6 rounded-xl border border-gray-800">
                        <h4 className="font-semibold">{b.title}</h4>
                        <p className="text-gray-400 mt-2 text-sm">{b.text}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
