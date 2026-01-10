const Footer = () => {
    return (
        <footer id="contact" className="py-12 px-6 max-w-7xl mx-auto w-full border-t border-white/10 mt-auto">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="text-center md:text-left">
                    <h2 className="text-2xl font-bold text-[#64ffda] mb-2" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                        NELLAI BADMINTON
                    </h2>
                    <p className="text-gray-400 text-sm max-w-xs">
                        Professional coaching and premium facilities for badminton enthusiasts of all ages and skill levels.
                    </p>
                </div>

                <div className="flex flex-col items-center md:items-end gap-4">
                    <div className="flex gap-6">
                        <a
                            href="https://www.instagram.com/nellaibadmintonacademy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-2 text-gray-400 hover:text-[#64ffda] transition-colors"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24" height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-5 h-5 group-hover:scale-110 transition-transform"
                            >
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                            </svg>
                            <span className="text-sm font-semibold">Instagram</span>
                        </a>

                        <a
                            href="https://www.google.com/maps/place/Nellai+Badminton+Academy+%26+Nellai+Diesel+Service/@8.7479109,77.709563,17z/data=!3m1!4b1!4m6!3m5!1s0x3b0411005aa5e33d:0xf26c4f2658330ff5!8m2!3d8.7479109!4d77.709563!16s%2Fg%2F11y6h6n6b_?hl=en-GB&entry=ttu&g_ep=EgoyMDI2MDEwNy4wIKXMDSoASAFQAw%3D%3D"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-2 text-gray-400 hover:text-[#e11d48] transition-colors"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24" height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-5 h-5 group-hover:scale-110 transition-transform"
                            >
                                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                                <circle cx="12" cy="10" r="3" />
                            </svg>
                            <span className="text-sm font-semibold">Google Maps</span>
                        </a>
                    </div>
                    <p className="text-gray-500 text-xs mt-2">
                        © 2026 Nellai Badminton Academy. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
