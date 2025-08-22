import React from 'react';
import { Globe } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <Globe className="h-8 w-8 text-blue-600 mr-3" />
            <h1 className="text-2xl font-bold text-gray-900">WebSites Pro</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#sites" className="text-gray-700 hover:text-blue-600 transition-colors">
              Sites
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}