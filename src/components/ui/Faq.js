import React from 'react';
import Navbar from '../ui/Navbar';
import Footer from '../ui/Footer';

function Faq() {
  return (
    <section className="bg-gray-100 py-16 mt-20 mb-20">
      <Navbar />
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>

        <div className="space-y-6">
          {/* General FAQ Item */}
          <details className="p-4 border rounded-xl group">
            <summary className="flex items-center font-semibold cursor-pointer hover:text-green-600">
              <span className="text-xl mr-3 group-open:hidden">+</span>
              <span className="text-xl mr-3 hidden group-open:inline">−</span>
              What is QR2Tech?
            </summary>
            <p className="mt-3 text-gray-700">
              QR2Tech is an innovative technology company that specializes in AI-powered solutions. We provide cutting-edge services in data analysis, web development, and more.
            </p>
          </details>

          {/* Services FAQ Item */}
          <details className="p-4 border rounded-xl group">
            <summary className="flex items-center font-semibold cursor-pointer hover:text-green-600">
              <span className="text-xl mr-3 group-open:hidden">+</span>
              <span className="text-xl mr-3 hidden group-open:inline">−</span>
              What services do you offer?
            </summary>
            <p className="mt-3 text-gray-700">
              Our services include:
              <ul>
                <li>AI and Machine Learning</li>
                <li>Web Development</li>
                <li>Data Analysis</li>
                <li>Custom Software Solutions</li>
              </ul>
            </p>
          </details>

          {/* Pricing FAQ Item */}
          <details className="p-4 border rounded-xl group">
            <summary className="flex items-center font-semibold cursor-pointer hover:text-green-600">
              <span className="text-xl mr-3 group-open:hidden">+</span>
              <span className="text-xl mr-3 hidden group-open:inline">−</span>
              How much do your services cost?
            </summary>
            <p className="mt-3 text-gray-700">
              Our pricing varies depending on the specific project requirements. Please contact us for a customized quote.
            </p>
          </details>

          {/* Contact FAQ Item */}
          <details className="p-4 border rounded-xl group">
            <summary className="flex items-center font-semibold cursor-pointer hover:text-green-600">
              <span className="text-xl mr-3 group-open:hidden">+</span>
              <span className="text-xl mr-3 hidden group-open:inline">−</span>
              How can I contact you?
            </summary>
            <p className="mt-3 text-gray-700">
              You can contact us via email at balogunhabeeb14@gmail.com  or by phone at (+44)7574371119.
            </p>
          </details>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Faq;