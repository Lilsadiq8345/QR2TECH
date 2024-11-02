import React from 'react';
import Navbar from '../ui/Navbar';
import './Home.css';

const Home = () => {
    return (
        <>
            <Navbar />

            {/* Hero Section */}
            <section className="hero relative flex items-center justify-center min-h-screen p-4 sm:p-10 text-white" id="home">
                {/* Video Background with Semi-Transparency */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                >
                    <source src="/robot.mov" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                {/* Text Overlay with Animation */}
                <div className="text-container bg-black bg-opacity-50 p-6 sm:p-10 rounded-lg max-w-lg sm:max-w-xl lg:max-w-3xl text-center animate-fade-in-up relative z-10">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-100 mb-4">
                        Welcome to Qr2tech
                    </h1>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-300 mb-6 animate-slide-up">
                        Your AI-Powered Solution Partner
                    </h2>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-4 animate-fade-in-delay">
                        QR2Tech is an AI-powered company that excels in solving complex challenges and developing innovative technology solutions.
                        We specialize in data analysis, AI-driven insights, and web development to help transform your ideas into impactful realities.
                    </p>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-300 animate-fade-in-delay">
                        From concept to execution, we integrate the latest advancements in artificial intelligence to ensure your business is equipped with the most efficient, future-forward tools and strategies.
                    </p>
                </div>
            </section>
        </>
    );
};

export default Home;
