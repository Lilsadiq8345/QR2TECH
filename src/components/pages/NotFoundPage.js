import React from 'react';
import Navbar from '../ui/Navbar';
import Footer from '../ui/Footer';

function NotFoundPage() {
    return (
        <div className="h-screen flex flex-col items-center justify-center mb-20 mt-20 bg-gray-100">
            <Navbar />
            <h1 className="text-gray-800 font-bold text-9xl mb-10 mt-10">404</h1>
            <p className="text-gray-500 text-xl mt-4">Page Not Found</p>
            <p className="text-gray-400 text-base mt-4 mb-10 mt-10">The page you are looking for doesn't exist.</p>

            <Footer />
        </div>

    );
}

export default NotFoundPage;