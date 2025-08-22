import { Site } from '../types/Site';

export const sites: Site[] = [
  {
    id: 1,
    name: "Site Vitrine Élégant",
    description: "Un site vitrine moderne et épuré, parfait pour présenter votre entreprise avec style. Design responsive et optimisé pour le SEO.",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: "À partir de 899€",
    rating: 4.8,
    features: ["Design responsive", "SEO optimisé", "Formulaire de contact", "Galerie photos", "Blog intégré"],
    category: "vitrine"
  },
  {
    id: 2,
    name: "E-commerce Premium",
    description: "Boutique en ligne complète avec système de paiement sécurisé, gestion des stocks et tableau de bord administrateur.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: "À partir de 1499€",
    rating: 4.9,
    features: ["Paiement sécurisé", "Gestion stocks", "Multi-devises", "Analytics", "Support client"],
    category: "ecommerce"
  },
  {
    id: 3,
    name: "Portfolio Créatif",
    description: "Showcase parfait pour artistes, photographes et créatifs. Galeries interactives et animations fluides.",
    image: "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: "À partir de 699€",
    rating: 4.7,
    features: ["Galeries interactives", "Animations CSS", "Mode sombre", "Lightbox", "Contact intégré"],
    category: "portfolio"
  },
  {
    id: 4,
    name: "Site Restaurant",
    description: "Site spécialement conçu pour restaurants avec menu interactif, réservations en ligne et galerie de plats.",
    image: "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: "À partir de 1199€",
    rating: 4.6,
    features: ["Menu interactif", "Réservations", "Galerie plats", "Avis clients", "Localisation"],
    category: "restaurant"
  },
  {
    id: 5,
    name: "Site Immobilier",
    description: "Plateforme immobilière avec recherche avancée, cartes interactives et gestion des biens.",
    image: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: "À partir de 1799€",
    rating: 4.8,
    features: ["Recherche avancée", "Cartes interactives", "Visite virtuelle", "Calculateur prêt", "CRM intégré"],
    category: "immobilier"
  },
  {
    id: 6,
    name: "Blog Professionnel",
    description: "Plateforme de blog moderne avec système de commentaires, newsletter et optimisation SEO avancée.",
    image: "https://images.pexels.com/photos/265667/pexels-photo-265667.jpeg?auto=compress&cs=tinysrgb&w=800",
    price: "À partir de 799€",
    rating: 4.5,
    features: ["Éditeur avancé", "Newsletter", "Commentaires", "SEO avancé", "Réseaux sociaux"],
    category: "blog"
  }
];