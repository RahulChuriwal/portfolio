import React, { useState, useEffect } from 'react';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`glass-effect fixed top-0 left-0 right-0 z-50 ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <button className="flex items-center gap-3">
          <img src={require('../assets/photo.jpg')} alt="Rahul Churiwal Logo" className="h-10 w-10 rounded-full object-cover" />
          <span className="text-xl font-bold text-white">Rahul</span>
        </button>
        <nav className="hidden md:flex space-x-8 items-center">
          <a href="#about" className="hover:text-indigo-400 transition-colors duration-300">About</a>
          <a href="#experience" className="hover:text-indigo-400 transition-colors duration-300">Experience</a>
          <a href="#skills" className="hover:text-indigo-400 transition-colors duration-300">Skills</a>
          <a href="#projects" className="hover:text-indigo-400 transition-colors duration-300">Projects</a>
          <a href="#education" className="hover:text-indigo-400 transition-colors duration-300">Education</a>
          <a href="#contact" className="btn-gradient text-white font-semibold px-5 py-2 rounded-full">Contact Me</a>
        </nav>
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" x2="20" y1="12" y2="12"/>
            <line x1="4" x2="20" y1="6" y2="6"/>
            <line x1="4" x2="20" y1="18" y2="18"/>
          </svg>
        </button>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden px-6 pb-4 ${mobileMenuOpen ? '' : 'hidden'}`}>
        <a href="#about" className="block py-2 hover:text-indigo-400">About</a>
        <a href="#experience" className="block py-2 hover:text-indigo-400">Experience</a>
        <a href="#skills" className="block py-2 hover:text-indigo-400">Skills</a>
        <a href="#projects" className="block py-2 hover:text-indigo-400">Projects</a>
        <a href="#education" className="hover:text-indigo-400 transition-colors duration-300">Education</a>
        <a href="#contact" className="block mt-2 text-center btn-gradient text-white font-semibold px-5 py-2 rounded-full">Contact Me</a>
      </div>
    </header>
  );
}

export default Header;