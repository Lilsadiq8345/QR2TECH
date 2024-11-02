import React from 'react';

const About = () => {
  return (
    <>
      {/* About Us Section */}
      <section
        id="about"
        className="mt-40 mb-12 p-6 max-w-6xl mx-auto text-center bg-gradient-to-r from-green-600 to-teal-500 text-white rounded-xl shadow-lg lg:flex lg:items-center lg:gap-6"
      >
        <div className="lg:w-1/2">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 font-poppins">About Us</h3>
          <p className="text-lg leading-7 font-poppins">
            REM Farms is a future-oriented agricultural investment platform. Our goal is to empower
            investors to participate in sustainable agricultural ventures. With a focus on transparency,
            profitability, and easy access, we bridge the gap between technology and farming.
          </p>
        </div>
        <img
          src="/farm.jpeg"
          alt="Farming Illustration"
          className="mt-6 lg:mt-0 lg:w-1/2 rounded-lg shadow-md"
        />
      </section>

    </>
  );
};

export default About;
