interface SiteCardProps {
  site: Site;
}

export function SiteCard({ site }: SiteCardProps) {
  const handleContactClick = () => {
    window.open('https://form.jotform.com/votre-formulaire-id', '_blank');
  };

  return (
        </div>
        
        <div className="space-y-3">
          <button
            onClick={handleContactClick}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
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