import React, { useState } from "react";
import "./Navbar.css"; // Ensure this CSS file is updated with the latest styles

function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Toggle mobile menu
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Scroll to the top of the page
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <header className="fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-6 py-3 md:py-4 bg-white shadow-md z-50">
            {/* Logo and Title */}
            <div className="flex items-center space-x-2">
                <img
                    src="/QR2TECH ICON GREEN.jpg"
                    alt="qr2tech logo"
                    onClick={scrollToTop}
                    className="w-8 h-8 md:w-12 md:h-12 cursor-pointer"
                />
                <h1
                    onClick={scrollToTop}
                    className="text-lg md:text-xl font-semibold text-gray-800 cursor-pointer hover:text-green-500"
                >
                    Qr2tech
                </h1>
            </div>

            {/* Navigation Links and Contact Us Button for Desktop */}
            <div className="hidden md:flex items-center space-x-6">
                <nav className="flex space-x-6 text-gray-700">
                    <a href="#home" onClick={scrollToTop} className="hover:text-green-500">
                        Home
                    </a>
                    <a href="#products" className="hover:text-green-500">
                        Products
                    </a>
                    <a href="#about" className="hover:text-green-500">
                        About
                    </a>
                </nav>
                <a
                    href="#contact"
                    className="px-4 py-2 text-white bg-green-500 rounded-full hover:bg-green-600 transition duration-200"
                >
                    Contact Us
                </a>
            </div>

            {/* Mobile Menu Icon */}
            <div className="md:hidden">
                <button
                    aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
                    onClick={toggleMobileMenu}
                    className="text-gray-800 focus:outline-none"
                >
                    <span className="material-icons">
                        {isMobileMenuOpen ? "close" : "menu"}
                    </span>
                </button>
            </div>

            {/* Mobile Menu (Overlay) */}
            {isMobileMenuOpen && (
                <div className="absolute top-0 left-0 w-full h-full bg-white bg-opacity-90 flex flex-col items-center justify-center space-y-6 text-gray-700 md:hidden animate-pop-in p-4">
                    <button
                        onClick={toggleMobileMenu}
                        className="absolute top-4 right-4 text-gray-800 text-3xl focus:outline-none"
                    >
                        &times;
                    </button>
                    <a href="#home" onClick={() => { scrollToTop(); toggleMobileMenu(); }} className="text-lg hover:text-green-500">
                        Home
                    </a>
                    <a href="#products" onClick={toggleMobileMenu} className="text-lg hover:text-green-500">
                        Products
                    </a>
                    <a href="#about" onClick={toggleMobileMenu} className="text-lg hover:text-green-500">
                        About
                    </a>
                    <a
                        href="#contact"
                        onClick={toggleMobileMenu}
                        className="px-6 py-3 text-white bg-green-500 rounded-full hover:bg-green-600 transition duration-200"
                    >
                        Contact Us
                    </a>
                </div>
            )}
        </header>
    );
}

export default Navbar;
