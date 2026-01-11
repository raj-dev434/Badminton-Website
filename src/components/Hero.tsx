const Hero = () => {
    // const handleStartTraining = () => {
    //     // Scroll to features section
    //     document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
    // };

    // const handleLearnMore = () => {
    //     // Scroll to training section
    //     document.getElementById('training')?.scrollIntoView({ behavior: 'smooth' });
    // };

    return (
        <section id="hero" className="flex-1 flex flex-col justify-center items-start px-6 max-w-7xl mx-auto w-full">
            <div className="max-w-2xl">

                <h1 className="text-5xl md:text-8xl font-black text-white mb-6 leading-tight">
                    SERVE IT <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#64ffda] to-blue-500">
                        FAST
                    </span>
                </h1>
                <p className="text-gray-400 text-lg mb-8 max-w-md leading-relaxed">
                    Elevate your game with world-class coaching, premium equipment, and a community of passionate players.
                </p>

            </div>
        </section>
    );
};

export default Hero;
