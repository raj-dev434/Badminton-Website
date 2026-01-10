import { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleJoinClick = () => {
        setIsMenuOpen(false);
        // Scroll to contact form
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => document.getElementById('contact-name')?.focus(), 800);
    };

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const navLinks = [
        { name: 'Coaching', href: '#training' },
        { name: 'Fees Details', href: '#features' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isMenuOpen ? 'bg-[#0a192f]' : 'bg-[#0a192f]/80 backdrop-blur-md border-b border-white/5'
            }`}>
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center w-full">
                <h1
                    className="text-xl md:text-3xl font-bold tracking-tight text-[#64ffda] drop-shadow-lg cursor-pointer"
                    style={{ fontFamily: "'Orbitron', sans-serif" }}
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    NELLAI <span className="md:inline block">BADMINTON</span>
                </h1>

                {/* Desktop Links */}
                <div className="space-x-8 hidden md:flex text-sm font-medium">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-gray-300 hover:text-[#64ffda] transition-colors font-semibold"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <button
                        onClick={handleJoinClick}
                        className="hidden sm:block bg-[#64ffda] text-[#0a192f] px-6 py-2 rounded-full font-bold hover:bg-white hover:shadow-lg hover:shadow-[#64ffda]/50 transition-all text-sm"
                    >
                        Join Now
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white p-2"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24"
                            strokeWidth={1.5} stroke="currentColor"
                            className="w-8 h-8"
                        >
                            <path
                                strokeLinecap="round" strokeLinejoin="round"
                                d={isMenuOpen ? "M6 18 18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"}
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`md:hidden fixed inset-x-0 top-[72px] bg-[#0a192f] border-b border-white/5 transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
                }`}>
                <div className="flex flex-col p-6 space-y-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-xl font-medium text-gray-300 hover:text-[#64ffda] transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <button
                        onClick={handleJoinClick}
                        className="bg-[#64ffda] text-[#0a192f] px-8 py-3 rounded-xl font-bold hover:bg-white transition-all text-center"
                    >
                        Join Now
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
