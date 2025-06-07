import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Contactez-nous
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une question ? Un projet ? N'hésitez pas à nous contacter. 
            Notre équipe est à votre disposition pour vous conseiller.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-8 h-8 text-blue-800" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Notre adresse</h3>
                <p className="text-gray-600 leading-relaxed">
                  6 Avenue du clos de la vigne<br />
                  77150 FEROLLES-ATTILLY<br />
                  France
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-8 h-8 text-green-800" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Téléphone</h3>
                <p className="text-gray-600 leading-relaxed">
                  <a href="tel:0777385983" className="hover:text-blue-800 transition-colors">
                    07 77 38 59 83
                  </a><br />
                  <span className="text-sm text-gray-500">Appel gratuit</span>
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-8 h-8 text-orange-800" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Email</h3>
                <p className="text-gray-600 leading-relaxed">
                  <a href="mailto:modernerenov.pro@gmail.com" className="hover:text-blue-800 transition-colors">
                  modernerenov.pro@gmail.com
                  </a><br />
                  <span className="text-sm text-gray-500">Réponse sous 24h</span>
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock className="w-8 h-8 text-purple-800" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Horaires</h3>
                <p className="text-gray-600 leading-relaxed">
                  Du Lundi au Samedi<br />
                  07:00 à 20:30<br />
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Zone d'intervention
            </h3>
            <p className="text-gray-600 mb-6">
              Nous intervenons dans toute l'Île-de-France pour vos projets de rénovation.
            </p>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-800">Seine-et-Marne</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Ferolles-Attilly</li>
                  <li>• Déplacement gratuit</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-800">Petite Couronne</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Hauts-de-Seine (92)</li>
                  <li>• Seine-Saint-Denis (93)</li>
                  <li>• Val-de-Marne (94)</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-800">Grande Couronne</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Seine-et-Marne (77)</li>
                  <li>• Yvelines (78)</li>
                  <li>• Essonne (91)</li>
                  <li>• Val-d'Oise (95)</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-800">Délais</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Devis sous 48h</li>
                  <li>• Intervention rapide</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;