// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/ui/About';
import ScrollToTop from './components/ui/ScrollToTop';
import Faq from './components/ui/Faq';
import ContactSection from './components/pages/ContactSection';




const App = () => {
  // Scroll to section function
  const handleNavigation = (sectionId) => {
    setTimeout(() => {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }, 0);
  };

  return (
    <Router>
      <ScrollToTop />



      <Routes>
        {/* Investor Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<ContactSection />} />

        {/* Scrollable Sections */}
        <Route
          path="/home"
          element={<div onLoad={() => handleNavigation('home')}></div>}
        />
        <Route
          path="/about"
          element={<div onLoad={() => handleNavigation('about')}></div>}
        />
        <Route
          path="/contact"
          element={<div onLoad={() => handleNavigation('contact')}></div>}
        />


      </Routes>
    </Router>
  );
};

export default App;
