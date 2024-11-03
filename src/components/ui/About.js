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

        {/* Our Team Section */}
        <h2 className="text-2xl font-bold text-center mt-16 mb-8">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center">
            <img src="/habeeb.jpeg" alt="Team Member 1" className="w-24 h-24 rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Dr. Habeeb Balogun</h3>
            <p className="text-gray-500">CEO & Founder</p>
          </div>
          <div className="text-center">
            <img src="/lilsadiq.jpeg" alt="Team Member 2" className="w-24 h-24 rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Abubakar Abdulrazak</h3>
            <p className="text-gray-500">Chief Technology Officer</p>
          </div>
          <div className="text-center">
            <img src="/mike.png" alt="Team Member 3" className="w-24 h-24 rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Mike Johnson</h3>
            <p className="text-gray-500">Senior Developer</p>
          </div>
        </div>

      </div>
      <Footer />
    </section>

  );
}

export default About;