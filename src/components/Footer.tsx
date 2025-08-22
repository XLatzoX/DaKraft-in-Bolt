import React from 'react';
import { Globe, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Globe className="h-6 w-6 text-blue-400 mr-2" />
              <h3 className="text-lg font-semibold">WebSites Pro</h3>
            </div>
            <p className="text-gray-400">
              Votre partenaire pour des sites web professionnels et modernes.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2">
              <div className="flex items-center">
                <Mail className="h-4 w-4 text-blue-400 mr-2" />
                <span className="text-gray-400">contact@websitespro.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 text-blue-400 mr-2" />
                <span className="text-gray-400">+33 1 23 45 67 89</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Sites vitrine</li>
              <li>E-commerce</li>
              <li>Applications web</li>
              <li>Maintenance</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 WebSites Pro. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}