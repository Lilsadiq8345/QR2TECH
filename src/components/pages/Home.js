import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../ui/Navbar';
import Footer from '../ui/Footer';
import './Home.css';

const Home = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const projectCardsRef = useRef(null);
    const teamCardsRef = useRef(null);

    const projects = [
        { id: 1, image: 'rem-farms.png', title: 'Rem Farm', logo: 'REM FARM LOGO 6.png', description: 'A farming as a service infrastructure, where contemporary technology meets farming.' },
        { id: 2, image: 'data-scientist.jpg', title: 'Better Life', logo: 'company-logo.png', description: 'An innovative solution designed to streamline business processes, enhance productivity, and drive growth through cutting-edge technology.' },
        { id: 3, image: 'artificial-intelligence.jpg', title: 'Gidi Up', logo: 'company-logo.png', description: 'Provides comprehensive services for managing and optimizing your IT infrastructure, ensuring seamless operations.' },
        { id: 4, image: 'robot-technology.jpg', title: 'Xplorer', logo: 'company-logo.png', description: 'Offers unparalleled solutions for data analytics and business intelligence, empowering you to make data-driven decisions.' },
    ];

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

        const projectScrollInterval = setInterval(() => scrollLoop(projectCardsRef), 5);
        const teamScrollInterval = setInterval(() => scrollLoop(teamCardsRef), 10);

        return () => {
            clearInterval(projectScrollInterval);
            clearInterval(teamScrollInterval);
        };
    }, []);

    const handleProjectClick = (project) => {
        setSelectedProject(project);
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
    };

    return (
        <>
            <Navbar />

            {/* Hero Section */}
            <section className="hero relative flex items-center justify-start min-h-screen p-6 sm:p-10 text-white mb-6 mt-6" id="home">
                <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-60">
                    <source src="/robot.mov" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="text-container bg-black bg-opacity-60 p-4 sm:p-6 lg:p-10 rounded-lg max-w-xs sm:max-w-sm lg:max-w-md text-left relative z-10 animate-pop-in">
                    <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-100 mb-3 animate-pop-in-delay">Welcome to Qr2tech</h1>
                    <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-gray-300 mb-4 animate-pop-in-delay2">Your AI-Powered Solution Partner</h2>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-2 animate-pop-in-delay3">QR2Tech excels at solving complex problems and creating innovative AI-driven solutions to transform your business.</p>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-300 animate-pop-in-delay4">From data analysis to advanced web development, we push the boundaries of technology to deliver impactful solutions.</p>
                </div>
            </section>

            {/* About Section */}
            <section className="flex flex-col md:flex-row items-center p-6 sm:p-8 md:p-16 space-y-6 md:space-y-0 md:space-x-6 lg:space-x-8 bg-white">
                <div className="flex-1 text-center md:text-left">
                    <h3 className="text-purple-500 font-semibold text-lg md:text-xl mb-6">Simulated Intelligence</h3>
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

            {/* Projects Section */}
            <section id="projects" className="case-studies py-16">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-8 ml-4 md:ml-8"><i style={{ fontStyle: 'italic' }}>Our Successful Projects</i></h2>
                <button className="all-button bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded ml-4 md:ml-4"><a href="/notfound">All Cases Read Now</a></button>
                <div className="project-cards flex overflow-x-auto px-4 md:px-8 space-x-4" ref={projectCardsRef}>
                    {projects.concat(projects).map((project, index) => (
                        <div
                            key={index}
                            className="project-card flex-shrink-0 w-72 md:w-80 bg-white shadow-md rounded-lg p-6 cursor-pointer transition-transform hover:scale-105"
                            onClick={() => handleProjectClick(project)}
                        >
                            <img src={project.image} alt={project.title} className="w-full h-40 md:h-48 object-fit rounded-t-lg" />
                            <div className="project-info mt-4">
                                <img src={project.logo} alt="Company Logo" className="w-8 h-8 mb-2" />
                                <h3 className="text-lg font-bold">{project.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>

            </section>

            {/* Modal for selected project */}
            {selectedProject && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full mx-4">
                        <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
                        <p className="mb-4">{selectedProject.description}</p>
                        <button onClick={handleCloseModal} className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded">
                            Close
                        </button>
                    </div>
                </div>
            )}

            <Footer />
        </>
    );
};

export default Home;
