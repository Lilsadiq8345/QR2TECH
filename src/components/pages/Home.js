import React, { useEffect, useRef } from 'react';
import Navbar from '../ui/Navbar';
import Footer from '../ui/Footer';
import './Home.css';

const Home = () => {
    const teamCardsRef = useRef(null);



    const teamMembers = [
        { id: 1, image: '82c3511673a90c9b2cdbd1e430e6d67b.jpg', title: 'Artificial Intelligence & Machine Learning', description: 'Our people use the latest scientific techniques and advanced analytical methods to solve real-life challenges.' },
        { id: 2, image: 'GettyImages-1488105257.jpeg', title: 'Technology Innovation', description: 'Our people identify, test, and deliver the latest tech solutions to business, enabling our Engineers to keep on innovating.' },
        { id: 3, image: 'mike.png', title: 'Engineering', description: 'Our Engineering team collaborates seamlessly with our researchers, synergizing their expertise to propel us into the future.' },
        { id: 4, image: 'c9431d6f819712b2ea35a0001b527cf2.jpg', title: 'Research', description: 'Our Research teams stand as beacons of intellectual curiosity and technological prowess.' },
    ];

    useEffect(() => {
        const scrollLoop = (ref) => {
            if (ref.current) {
                const totalWidth = ref.current.scrollWidth / 2;

                // Reset the scroll to the start when it reaches the end
                if (ref.current.scrollLeft >= totalWidth) {
                    ref.current.scrollLeft = 0;
                } else {
                    ref.current.scrollLeft += 1;
                }
            }
        };

        const teamScrollInterval = setInterval(() => scrollLoop(teamCardsRef), 10);

        return () => {
            clearInterval(teamScrollInterval);
        };
    }, []);



    return (
        <>
            <Navbar />

            {/* Hero Section */}
            <section className="hero relative flex items-center justify-start min-h-screen p-6 sm:p-10 text-white mb-6 mt-6" id="home">
                <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px]">
                    <img
                        src="/qr.png"
                        alt="QR2 Tech"
                        className="absolute inset-0 w-full h-full object-cover"
                    />

                </div>
            </section>

            {/* About Section */}
            <section className="flex flex-col md:flex-row items-center p-6 sm:p-8 md:p-16 space-y-6 md:space-y-0 md:space-x-6 lg:space-x-8 bg-white">
                <div className="flex-1 text-center md:text-left">
                    <h3 className="text-[#7a00a6] font-semibold text-lg md:text-xl mb-6">Simulated Intelligence</h3>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold leading-tight mb-4 text-gray-800 italic">
                        Mission is to bring the force of simulated intelligence Technologies for a Better Tomorrow
                    </h2>
                    <p className="text-base md:text-lg leading-relaxed text-gray-600 mb-4">
                        Our mission is to create advanced AI solutions that empower businesses to operate more efficiently,
                        make informed decisions, and unlock new growth opportunities.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed text-gray-600">
                        We create AI-powered solutions that transform lives, bringing innovation and accessibility to every
                        corner of Nigeria and beyond.
                    </p>
                </div>
                <div className="relative flex-1 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                    <img
                        src="/about-1.jpg"
                        alt="AI Illustration"
                        className="rounded-lg shadow-lg w-full"
                    />
                </div>
            </section>

            {/* Team Section */}
            <section id="team" className="team-container py-16 bg-gray-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 md:mb-8">THE TEAM</h2>
                    <p className="text-base md:text-lg text-center mb-8 md:mb-16">The ones who run this company</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 overflow-x-auto" ref={teamCardsRef}>
                        {teamMembers.map((member, index) => (
                            <div key={index} className="card bg-white shadow-md rounded-lg p-6 hover:-translate-y-2 transition-transform duration-300">
                                <img src={member.image} alt={member.title} className="w-full h-40 md:h-48 object-cover rounded-t-lg mb-4" />
                                <h3 className="text-lg md:text-xl font-bold">{member.title}</h3>
                                <p className="text-sm md:text-base text-gray-600">{member.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>





            <Footer />
        </>
    );
};

export default Home;
