import React from 'react';
import { Users, Award, Clock, Star } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, value: '100+', label: 'Clients satisfaits' },
    { icon: Award, value: '10+', label: 'Années d\'expérience' },
    { icon: Clock, value: '150+', label: 'Projets réalisés' },
    { icon: Star, value: '4.9/5', label: 'Note moyenne' }
  ];

  return (
    <section id="about" className="py-20 bg-blue-900">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Pourquoi nous choisir ?
            </h2>
            
            <div className="space-y-6 text-blue-100 text-lg leading-relaxed">
              <p>
                <strong className="text-white">Moderne Renov</strong> est votre partenaire de confiance 
                pour tous vos projets de rénovation. Nous accompagnons 
                les particuliers dans la transformation de leur habitat.
              </p>
              
              <p>
                Notre équipe d'artisans qualifiés et passionnés met son expertise au service 
                de vos projets, qu'il s'agisse d'une rénovation complète ou de travaux ciblés. 
                Nous privilégions la qualité, le respect des délais et la satisfaction client.
              </p>
              
              <p>
                De la conception à la réalisation, nous vous accompagnons à chaque étape 
                de votre projet avec transparence et professionnalisme. Notre approche 
                personnalisée garantit un résultat à la hauteur de vos attentes.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-blue-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1571471/pexels-photo-1571471.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Équipe Moderne Renov"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-8 -left-8 bg-white rounded-xl p-6 shadow-xl max-w-xs">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="font-bold text-gray-800">Qualité garantie</div>
                  <div className="text-sm text-gray-600">Travaux assurés</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;