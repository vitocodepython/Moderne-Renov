import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      title: 'Rénovation complète appartement Haussmannien',
      location: 'Paris 16ème',
      category: 'Rénovation complète',
      image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Transformation complète d\'un appartement de 120m² avec respect du cachet ancien'
    },
    {
      title: 'Cuisine moderne ouverte',
      location: 'Neuilly-sur-Seine',
      category: 'Aménagement',
      image: 'https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Création d\'une cuisine ouverte design avec îlot central et matériaux haut de gamme'
    },
    {
      title: 'Salle de bain spa',
      location: 'Boulogne-Billancourt',
      category: 'Rénovation partielle',
      image: 'https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Transformation d\'une salle de bain en espace détente avec douche italienne'
    },
    {
      title: 'Loft industriel moderne',
      location: 'Montreuil',
      category: 'Rénovation complète',
      image: 'https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Aménagement d\'un loft de 200m² dans un ancien entrepôt industriel'
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Nos Réalisations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez quelques-unes de nos réalisations qui témoignent 
            de notre expertise et de notre attention aux détails.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl shadow-2xl">
            <img
              src={projects[currentProject].image}
              alt={projects[currentProject].title}
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <div className="mb-4">
                <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {projects[currentProject].category}
                </span>
              </div>
              <h3 className="text-3xl font-bold mb-2">
                {projects[currentProject].title}
              </h3>
              <p className="text-orange-300 font-semibold mb-2">
                {projects[currentProject].location}
              </p>
              <p className="text-gray-200 text-lg max-w-2xl">
                {projects[currentProject].description}
              </p>
            </div>
          </div>

          <button
            onClick={prevProject}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ArrowLeft className="w-6 h-6 text-gray-800" />
          </button>

          <button
            onClick={nextProject}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
          >
            <ArrowRight className="w-6 h-6 text-gray-800" />
          </button>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentProject(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentProject ? 'bg-orange-500 w-8' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;