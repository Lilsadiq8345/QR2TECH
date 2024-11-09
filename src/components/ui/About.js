import React from 'react';
import Navbar from '../ui/Navbar';
import Footer from '../ui/Footer';

function About() {
  return (
    <section className="bg-gray-100 py-16 mb-20 mt-20">
      <Navbar />
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Welcome to Qr2tech</h2>
        <p className="text-lg text-center mb-8">
          Your AI-Powered Solution Partner
        </p>
        <p className="text-lg text-center mb-8">
          Qr2tech excels at solving complex problems and creating innovative AI-driven solutions to transform your business. From data analysis to advanced web development, we push the boundaries of technology to deliver impactful solutions.
        </p>



      </div>
      <Footer />
    </section>

  );
}

export default About;