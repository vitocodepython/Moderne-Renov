import React from 'react';
import { Home, Hammer, Palette, Zap, Droplet, Shield } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Rénovation complète',
      description: 'Transformation totale de votre habitat avec une approche globale et personnalisée.',
      features: ['Gros œuvre', 'Second œuvre', 'Finitions', 'Coordination']
    },
    {
      icon: Hammer,
      title: 'Rénovation partielle',
      description: 'Rénovation ciblée de pièces spécifiques selon vos besoins et votre budget.',
      features: ['Cuisine', 'Salle de bain', 'Séjour', 'Chambre']
    },
    {
      icon: Palette,
      title: 'Aménagement intérieur',
      description: 'Optimisation et décoration de vos espaces avec un design moderne et fonctionnel.',
      features: ['Cloisons', 'Placards', 'Déco', 'Mobilier']
    },
    {
      icon: Zap,
      title: 'Électricité',
      description: 'Installation et rénovation électrique aux normes avec des artisans qualifiés.',
      features: ['Mise aux normes', 'Tableau électrique', 'Éclairage', 'Domotique']
    },
    {
      icon: Droplet,
      title: 'Plomberie',
      description: 'Travaux de plomberie et sanitaire pour votre confort et votre sécurité.',
      features: ['Chauffage', 'Sanitaire', 'Canalisations', 'VMC']
    },
    {
      icon: Shield,
      title: 'Isolation',
      description: 'Amélioration de votre confort thermique et réduction de vos factures.',
      features: ['Combles', 'Murs', 'Sol', 'Étanchéité']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Nos Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une expertise complète pour tous vos projets de rénovation, 
            de la conception à la réalisation avec un savoir-faire reconnu.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-800 transition-colors duration-300">
                <service.icon className="w-8 h-8 text-blue-800 group-hover:text-white transition-colors duration-300" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;