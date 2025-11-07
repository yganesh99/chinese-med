'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface NavigationProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['Home', 'Services', 'Philosophy', 'Testimonials', 'Contact'];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-background/95 backdrop-blur-xl layer-shadow py-3' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3 group cursor-pointer">
            <div className="text-3xl font-serif font-bold text-primary transition-transform group-hover:scale-110">
              自然
            </div>
            <div className="text-xl font-semibold text-foreground">TCM Clinic</div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  const sectionId = item.toLowerCase();
                  setActiveSection(sectionId);
                  scrollToSection(sectionId);
                }}
                className={`font-medium transition-all duration-300 pb-1 ${
                  activeSection === item.toLowerCase()
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-gray-700 hover:text-primary'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-primary hover:bg-primary-dark text-white font-semibold py-2.5 px-6 rounded-full uppercase text-sm tracking-wide transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 fade-in">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  const sectionId = item.toLowerCase();
                  setActiveSection(sectionId);
                  setMobileMenuOpen(false);
                  scrollToSection(sectionId);
                }}
                className="block w-full text-left py-3 px-4 text-gray-700 hover:bg-primary hover:text-white transition-colors rounded-lg mb-1"
              >
                {item}
              </button>
            ))}
            <button className="w-full mt-2 bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-4 rounded-lg uppercase text-sm tracking-wide transition-colors">
              Book Now
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
