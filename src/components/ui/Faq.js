import React from 'react';

const Faq = () => {
  return (
    <div>
      <section
        id="faq"
        className="mt-40 mb-40 p-6 max-w-6xl mx-auto text-left bg-white text-gray-900 rounded-xl shadow-lg"
      >
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-center">Frequently Asked Questions</h3>
        <div className="space-y-6">

          {/* General FAQ Item */}
          <details className="p-4 border rounded-xl group">
            <summary className="flex items-center font-semibold cursor-pointer hover:text-green-600">
              <span className="text-xl mr-3 group-open:hidden">+</span>
              <span className="text-xl mr-3 hidden group-open:inline">−</span>
              How can we invest?
            </summary>
            <p className="mt-3 text-gray-700">
              You can invest by exploring our marketplace, selecting a commodity, and choosing services to manage it until resale.
            </p>
          </details>

          {/* Investment Types FAQ Item */}
          <details className="p-4 border rounded-xl group">
            <summary className="flex items-center font-semibold cursor-pointer hover:text-green-600">
              <span className="text-xl mr-3 group-open:hidden">+</span>
              <span className="text-xl mr-3 hidden group-open:inline">−</span>
              What types of investments are available?
            </summary>
            <p className="mt-3 text-gray-700">
              We offer investments in various commodities like broilers, catfish, maize, and sheep, alongside associated services.
            </p>
          </details>

          {/* Minimum Investment FAQ Item */}
          <details className="p-4 border rounded-xl group">
            <summary className="flex items-center font-semibold cursor-pointer hover:text-green-600">
              <span className="text-xl mr-3 group-open:hidden">+</span>
              <span className="text-xl mr-3 hidden group-open:inline">−</span>
              Is there a minimum investment amount?
            </summary>
            <p className="mt-3 text-gray-700">
              Yes, the minimum investment amount is $100. This allows for flexibility while ensuring quality service.
            </p>
          </details>

          {/* Tracking Investments FAQ Item */}
          <details className="p-4 border rounded-xl group">
            <summary className="flex items-center font-semibold cursor-pointer hover:text-green-600">
              <span className="text-xl mr-3 group-open:hidden">+</span>
              <span className="text-xl mr-3 hidden group-open:inline">−</span>
              How do I track my investment?
            </summary>
            <p className="mt-3 text-gray-700">
              Track your investments through our dashboard, where you can access live updates, growth metrics, and market trends.
            </p>
          </details>

          {/* Risks FAQ Item */}
          <details className="p-4 border rounded-xl group">
            <summary className="flex items-center font-semibold cursor-pointer hover:text-green-600">
              <span className="text-xl mr-3 group-open:hidden">+</span>
              <span className="text-xl mr-3 hidden group-open:inline">−</span>
              What are the risks associated with investing?
            </summary>
            <p className="mt-3 text-gray-700">
              As with any investment, there are risks involved, including market fluctuations and operational challenges. We recommend diversifying your portfolio to minimize risks.
            </p>
          </details>
        </div>
      </section>
    </div>
  );
};

export default Faq;
