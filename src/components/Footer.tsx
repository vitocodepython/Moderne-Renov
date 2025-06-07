import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigate('/') }>
              <img 
                src={`${import.meta.env.BASE_URL}image.png`}
                alt="Moderne Renov Logo" 
                className="h-10 w-auto filter brightness-0 invert"
              />
              <span className="text-2xl font-bold">Moderne Renov</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Votre expert en rénovation avec plus de 10 ans d'expérience. 
              Nous transformons vos projets en réalité avec passion et expertise.
            </p>
            <div className="flex space-x-4">
              {/* Réseaux sociaux supprimés */}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-300 hover:text-orange-400 transition-colors block"
                >
                  Accueil
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-orange-400 transition-colors block"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('portfolio')}
                  className="text-gray-300 hover:text-orange-400 transition-colors block"
                >
                  Réalisations
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-orange-400 transition-colors block"
                >
                  À propos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('quote')}
                  className="text-gray-300 hover:text-orange-400 transition-colors block"
                >
                  Devis gratuit
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Nos Services</h3>
            <ul className="space-y-3 text-gray-300">
              <li>Rénovation complète</li>
              <li>Cuisine & Salle de bain</li>
              <li>Aménagement intérieur</li>
              <li>Électricité & Plomberie</li>
              <li>Isolation thermique</li>
              <li>Finitions & Décoration</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-400" />
                <span className="text-gray-300">07 77 38 59 83</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-400" />
                <span className="text-gray-300">contact@modernerenov.fr</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-400 mt-1" />
                <div className="text-gray-300">
                  6 Avenue du clos de la vigne<br />
                  77150 FEROLLES-ATTILLY
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 Moderne Renov. Tous droits réservés.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-orange-400 transition-colors">
                Mentions légales
              </a>
              <a href="#" className="hover:text-orange-400 transition-colors">
                Politique de confidentialité
              </a>
              <a href="#" className="hover:text-orange-400 transition-colors">
                CGV
              </a>
            </div>
            {location.pathname === '/merci' ? (
              <button
                onClick={() => navigate('/')}
                className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors text-sm"
              >
                Retour à l'accueil
              </button>
            ) : (
              <button
                onClick={scrollToTop}
                className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors text-sm"
              >
                Haut de page
              </button>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;