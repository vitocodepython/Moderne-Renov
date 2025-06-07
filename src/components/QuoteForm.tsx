import React from 'react';
import { Send, User, Mail, Phone, Home, MessageSquare } from 'lucide-react';

const QuoteForm = () => {
  return (
    <section id="quote" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Demande de Devis Gratuit
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Parlez-nous de votre projet et recevez un devis personnalisé 
            sous 48 heures. C'est gratuit et sans engagement.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <form
            action="https://formsubmit.co/modernerenov.pro@gmail.com"
            method="POST"
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
          >
            <input type="hidden" name="_subject" value="🧾 Nouveau devis reçu depuis le site Moderne Rénov" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://vitocodepython.github.io/Moderne-Renov/#/merci" />
            <input type="hidden" name="_template" value="table" />
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-800 flex items-center space-x-2">
                  <User className="w-6 h-6 text-blue-800" />
                  <span>Informations personnelles</span>
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Prénom *</label>
                    <input type="text" name="Prénom" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" placeholder="Votre prénom" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Nom *</label>
                    <input type="text" name="Nom" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" placeholder="Votre nom" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2"><Mail className="w-4 h-4 inline mr-1" />Email *</label>
                  <input type="email" name="Email" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" placeholder="votre@email.fr" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2"><Phone className="w-4 h-4 inline mr-1" />Téléphone *</label>
                  <input type="text" name="Téléphone" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" placeholder="01 23 45 67 89" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2"><Home className="w-4 h-4 inline mr-1" />Adresse du projet</label>
                  <input type="text" name="Adresse du projet" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" placeholder="Ville, département" />
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-800 flex items-center space-x-2">
                  <Home className="w-6 h-6 text-blue-800" />
                  <span>Votre projet</span>
                </h3>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Type de projet *</label>
                  <input type="text" name="Type de projet" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" placeholder="Ex: Rénovation complète" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Surface (m²)</label>
                    <input type="text" name="Surface" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" placeholder="Ex: 80" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Budget estimé</label>
                    <input type="text" name="Budget estimé" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" placeholder="Ex: 25 000€ - 50 000€" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Délai souhaité</label>
                  <input type="text" name="Délai souhaité" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" placeholder="Ex: 1 à 3 mois" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2"><MessageSquare className="w-4 h-4 inline mr-1" />Description du projet</label>
                  <textarea name="Description du projet" rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none" placeholder="Décrivez votre projet, vos attentes, vos contraintes..." />
                </div>
              </div>
            </div>
            <div className="mt-12 text-center">
              <button type="submit" className="bg-orange-500 text-white px-12 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-3 mx-auto hover:bg-orange-600 transform hover:scale-105">
                <Send className="w-5 h-5" />
                <span>Envoyer ma demande</span>
              </button>
              <p className="text-sm text-gray-500 mt-4">* Champs obligatoires - Devis gratuit et sans engagement</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;