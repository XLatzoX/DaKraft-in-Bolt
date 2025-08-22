import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SiteCard } from './components/SiteCard';
import { Footer } from './components/Footer';
import { sites } from './data/sites';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header />
      <Hero />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Nos Sites Web Disponibles
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez notre sélection de sites web professionnels, prêts à être personnalisés selon vos besoins.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sites.map((site) => (
            <SiteCard 
              key={site.id} 
              site={site}
            />
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;