function Feesdetails() {
    const plans = [
        {
            title: "Coaching Program",
            subtitle: "For Kids & Juniors",
            price: "1200",
            period: "per month",
            features: [
                "Professional coaching",
                "Skill assessment",
                "Foundation focus",
                "Standard batch timing"
            ],
            icon: "🎓",
            highlight: false
        },
        {
            title: "Membership",
            subtitle: "Individual Access",
            price: "1200",
            period: "per month",
            features: [
                "Full court access",
                "Morning/Evening slots",
                "Member tournaments",
                "Locker facility"
            ],
            icon: "🏸",
            highlight: true
        },
        {
            title: "Guest Play",
            subtitle: "Pay as you go",
            price: "500",
            period: "per hour",
            features: [
                "On-demand booking",
                "Open court availability",
                "Equipment rental (extra)",
                "Perfect for casual play"
            ],
            icon: "⭐",
            highlight: false
        }
    ];

    return (
        <section id="features" className="px-6 py-20 max-w-7xl mx-auto w-full">
            <div className="text-center mb-16">
                <h2
                    className="text-4xl md:text-5xl font-bold text-white mb-4"
                    style={{ fontFamily: "'Orbitron', sans-serif" }}
                >
                    FEES <span className="text-[#64ffda]">DETAILS</span>
                </h2>
                <p className="text-gray-400 max-w-lg mx-auto">
                    Affordable pricing for every level of player. Court available all time for your convenience.
                </p>
                <div className="h-1 w-24 bg-[#64ffda] mx-auto mt-6 rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className={`glass-card flex flex-col relative overflow-hidden transition-all duration-300 hover:-translate-y-2 ${plan.highlight ? 'border-[#64ffda]/40 shadow-lg shadow-[#64ffda]/10 ring-1 ring-[#64ffda]/20' : ''
                            }`}
                    >
                        {plan.highlight && (
                            <div className="absolute top-0 right-0 bg-[#64ffda] text-[#0a192f] text-[10px] font-bold px-3 py-1 rounded-bl-lg tracking-widest uppercase">
                                Popular
                            </div>
                        )}

                        <div className="mb-8">
                            <span className="text-4xl mb-4 block">{plan.icon}</span>
                            <h3 className="text-2xl font-bold text-white mb-1 tracking-tight">{plan.title}</h3>
                            <p className="text-[#64ffda] text-sm font-medium">{plan.subtitle}</p>
                        </div>

                        <div className="mb-8 flex items-baseline gap-1">
                            <span className="text-4xl font-black text-white">₹{plan.price}</span>
                            <span className="text-gray-500 text-sm font-medium">{plan.period}</span>
                        </div>

                        <ul className="space-y-4 mb-10 flex-1">
                            {plan.features.map((feature, fIndex) => (
                                <li key={fIndex} className="flex items-center gap-3 text-gray-400 text-sm">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none" viewBox="0 0 24 24"
                                        strokeWidth={2} stroke="currentColor"
                                        className="w-4 h-4 text-[#64ffda]"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <button
                            onClick={() => {
                                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                                setTimeout(() => document.getElementById('contact-name')?.focus(), 800);
                            }}
                            className={`w-full py-3 rounded-xl font-bold transition-all duration-300 ${plan.highlight
                                ? 'bg-[#64ffda] text-[#0a192f] hover:bg-white hover:scale-[1.02]'
                                : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
                                }`}
                        >
                            Get Started
                        </button>
                    </div>
                ))}
            </div>

            <div className="mt-12 text-center p-6 glass-card border-dashed border-white/20">
                <p className="text-gray-300 font-medium">
                    🏸 <span className="text-[#64ffda]">Special Offer:</span> Advanced court booking available at all times!
                </p>
            </div>
        </section>
    );
}

export default Feesdetails;
