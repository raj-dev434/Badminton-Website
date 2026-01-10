function Coaching() {
    const batches = [
        {
            title: "Morning Batch",
            target: "Adults & Seniors",
            timing: "6:00 AM - 7:30 AM",
            icon: "🌅",
            color: "from-orange-500/20 to-yellow-500/10"
        },
        {
            title: "Afternoon Batch",
            target: "Kids & Juniors",
            timing: "6:00 PM - 7:30 PM",
            icon: "🏸",
            color: "from-[#64ffda]/20 to-blue-500/10"
        }
    ];

    return (
        <section id="training" className="px-6 py-20 max-w-7xl mx-auto w-full">
            <div className="text-center mb-16">
                <h2
                    className="text-4xl md:text-5xl font-bold text-white mb-4"
                    style={{ fontFamily: "'Orbitron', sans-serif" }}
                >
                    COACHING <span className="text-[#64ffda]">PROGRAMS</span>
                </h2>
                <div className="h-1 w-24 bg-[#64ffda] mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {batches.map((batch, index) => (
                    <div
                        key={index}
                        className={`glass-card relative overflow-hidden group hover:border-[#64ffda]/50 transition-all duration-500`}
                    >
                        {/* Gradient Background Decoration */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${batch.color} opacity-30 group-hover:opacity-50 transition-opacity`}></div>

                        <div className="relative z-10">
                            <div className="flex items-center gap-4 mb-6">
                                <span className="text-4xl">{batch.icon}</span>
                                <div>
                                    <h3 className="text-2xl font-bold text-white tracking-tight">{batch.title}</h3>
                                    <p className="text-[#64ffda] font-medium text-sm">{batch.target}</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center gap-3 text-gray-300 bg-white/5 p-4 rounded-lg border border-white/5">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 24 24"
                                        strokeWidth={1.5} stroke="currentColor"
                                        className="w-6 h-6 text-[#64ffda]"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                    <div>
                                        <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Timing</p>
                                        <p className="text-xl font-semibold text-white">{batch.timing}</p>
                                    </div>
                                </div>

                                <p className="text-gray-400 leading-relaxed">
                                    Join our professional coaching sessions tailored for your specific needs. From foundational skills to advanced techniques.
                                </p>

                                <button
                                    onClick={() => {
                                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                        setTimeout(() => document.getElementById('contact-name')?.focus(), 800);
                                    }}
                                    className="w-full mt-4 py-3 bg-white/5 hover:bg-[#64ffda] text-white hover:text-[#0a192f] border border-white/10 hover:border-[#64ffda] rounded-xl font-bold transition-all duration-300"
                                >
                                    Book Slot
                                </button>
                            </div>
                        </div>

                        {/* Subtle background glow */}
                        <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-[#64ffda] opacity-10 blur-3xl group-hover:opacity-20 transition-opacity"></div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Coaching;