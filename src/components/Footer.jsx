import React from "react";

export default function Footer() {
    return (
        <footer className="bg-[#090b0c] border-t border-gray-800/50 mt-20">
            <div className="container-max py-10">
                <div className="flex flex-col md:flex-row justify-between items-start gap-10">

                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-[#ff7b00] rounded-xl flex items-center justify-center text-black font-bold text-lg shadow-lg">
                            VG
                        </div>
                        <div>
                            <h2 className="text-white text-xl font-semibold">VyomGarud</h2>
                            <p className="text-gray-400 text-sm">UAV Systems</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-gray-400 text-sm">
                        <div>
                            <h3 className="text-white font-semibold mb-3">Company</h3>
                            <ul className="space-y-2">
                                <li className="hover:text-[#ff7b00] transition">About</li>
                                <li className="hover:text-[#ff7b00] transition">Careers</li>
                                <li className="hover:text-[#ff7b00] transition">Mission</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-white font-semibold mb-3">Solutions</h3>
                            <ul className="space-y-2">
                                <li className="hover:text-[#ff7b00] transition">Recon UAV</li>
                                <li className="hover:text-[#ff7b00] transition">Cargo Drone</li>
                                <li className="hover:text-[#ff7b00] transition">Swarm AI</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-white font-semibold mb-3">Support</h3>
                            <ul className="space-y-2">
                                <li className="hover:text-[#ff7b00] transition">Contact</li>
                                <li className="hover:text-[#ff7b00] transition">Documentation</li>
                                <li className="hover:text-[#ff7b00] transition">Terms & Privacy</li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex gap-5 text-gray-400">
                        <a className="hover:text-[#ff7b00] transition" href="#">
                            <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M22.46 6c-.77.35-1.6.58-2.46..."></path>
                            </svg>
                        </a>
                        <a className="hover:text-[#ff7b00] transition" href="#">
                            <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2.04c-5.5 0-10 ..."></path>
                            </svg>
                        </a>
                        <a className="hover:text-[#ff7b00] transition" href="#">
                            <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M16 8a6 6 0 11-12 0..."></path>
                            </svg>
                        </a>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-10 pt-5 text-center text-gray-500 text-sm">
                    © {new Date().getFullYear()} VyomGarud. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
