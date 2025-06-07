import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-3">
            <img 
              src="/public/image.png" 
              alt="Moderne Renov Logo" 
              className="h-12 w-auto"
            />
            <span className="text-2xl font-bold text-gray-800">Moderne Renov</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-blue-800 transition-colors">
              Accueil
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-blue-800 transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="text-gray-700 hover:text-blue-800 transition-colors">
              Réalisations
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-blue-800 transition-colors">
              À propos
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-blue-800 transition-colors">
              Contact
            </button>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="w-4 h-4" />
              <span>07 77 38 59 83</span>
            </div>
            <button
              onClick={() => scrollToSection('quote')}
              className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors font-semibold"
            >
              Devis gratuit
            </button>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-left text-gray-700 hover:text-blue-800 transition-colors">
                Accueil
              </button>
              <button onClick={() => scrollToSection('services')} className="text-left text-gray-700 hover:text-blue-800 transition-colors">
                Services
              </button>
              <button onClick={() => scrollToSection('portfolio')} className="text-left text-gray-700 hover:text-blue-800 transition-colors">
                Réalisations
              </button>
              <button onClick={() => scrollToSection('about')} className="text-left text-gray-700 hover:text-blue-800 transition-colors">
                À propos
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left text-gray-700 hover:text-blue-800 transition-colors">
                Contact
              </button>
              <div className="flex items-center space-x-2 text-sm text-gray-600 pt-2">
                <Phone className="w-4 h-4" />
                <span>07 77 38 59 83</span>
              </div>
              <button
                onClick={() => scrollToSection('quote')}
                className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors font-semibold w-fit"
              >
                Devis gratuit
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;