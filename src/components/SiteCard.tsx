import React from 'react';
import { ExternalLink, Star } from 'lucide-react';
import { Site } from '../types/Site';

interface SiteCardProps {
  site: Site;
}

export function SiteCard({ site }: SiteCardProps) {
  const handleContactClick = () => {
    // Remplacez cette URL par votre vrai formulaire JotForm
    window.open('https://form.jotform.com/votre-formulaire-id', '_blank');
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="relative">
        <img 
          src={site.image} 
          alt={site.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-full text-sm font-semibold text-gray-700">
          {site.price}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900">{site.name}</h3>
          <div className="flex items-center">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600 ml-1">{site.rating}</span>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-3">{site.description}</p>
        
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {site.features.slice(0, 3).map((feature, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-blue-50 text-blue-700 text-sm rounded-full"
              >
                {feature}
              </span>
            ))}
            {site.features.length > 3 && (
              <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                +{site.features.length - 3} autres
              </span>
            )}
          </div>
        </div>
        
        <div className="space-y-3">
          <button
            onClick={handleContactClick}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center"
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            Demander un devis
          </button>
          <p className="text-xs text-gray-500 text-center">
            Cliquez pour accéder au formulaire de contact
          </p>
        </div>
      </div>
    </div>
  );
}