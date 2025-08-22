import React from 'react';
import { Sparkles, Zap, Shield } from 'lucide-react';

export function Hero() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Sites Web
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {' '}Professionnels
          </span>
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Choisissez parmi notre collection de sites web modernes et professionnels, 
          prêts à être personnalisés pour votre entreprise.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="flex flex-col items-center">
            <div className="bg-blue-100 p-4 rounded-full mb-4">
              <Zap className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Rapide</h3>
            <p className="text-gray-600 text-center">
              Sites optimisés pour des performances exceptionnelles
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="bg-purple-100 p-4 rounded-full mb-4">
              <Sparkles className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Moderne</h3>
            <p className="text-gray-600 text-center">
              Designs contemporains et tendances actuelles
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="bg-green-100 p-4 rounded-full mb-4">
              <Shield className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Sécurisé</h3>
            <p className="text-gray-600 text-center">
              Protection avancée et mises à jour régulières
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}