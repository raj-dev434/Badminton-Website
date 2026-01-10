const features = [
    {
        icon: '⚡',
        title: 'Speed Training',
        description: 'Enhance your reflexes and movement speed on the court.',
    },
    {
        icon: '🎯',
        title: 'Precision Shots',
        description: 'Master the art of placement and control.',
    },
    {
        icon: '🏆',
        title: 'Pro Tournaments',
        description: 'Competitions for all levels, from amateur to pro.',
    },
];

const Features = () => {
    return (
        <section id="features" className="px-6 py-12 max-w-7xl mx-auto w-full">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
                What We Offer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="glass-card hover:scale-105 transition-transform cursor-pointer"
                    >
                        <div className="text-badminton-green text-3xl mb-4">{feature.icon}</div>
                        <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                        <p className="text-gray-400 text-sm">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Features;
