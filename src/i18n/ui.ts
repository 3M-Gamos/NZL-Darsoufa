export const locales = ['fr', 'en'] as const;
export type Lang = (typeof locales)[number];
export const defaultLang: Lang = 'fr';

export type I18nText = { fr: string; en: string };

/** Retourne la valeur d'un champ bilingue { fr, en } dans la langue demandée. */
export function pick(value: I18nText | undefined, lang: Lang): string {
  if (!value) return '';
  return value[lang] || value[defaultLang] || '';
}

export function isLang(value: string | undefined): value is Lang {
  return value === 'fr' || value === 'en';
}

export const localeLabels: Record<Lang, string> = { fr: 'Français', en: 'English' };
export const htmlLang: Record<Lang, string> = { fr: 'fr', en: 'en' };

/** Slugs localisés des pages. Clé = identifiant de page, valeur = slug par langue. */
export const routes = {
  home: { fr: '', en: '' },
  rooms: { fr: 'chambres', en: 'rooms' },
  services: { fr: 'services', en: 'services' },
  rabat: { fr: 'rabat', en: 'rabat' },
  contact: { fr: 'contact', en: 'contact' },
  guide: { fr: 'guide', en: 'guide' },
} as const;
export type RouteKey = keyof typeof routes;

export function localePath(lang: Lang, key: RouteKey, hash?: string): string {
  const slug = routes[key][lang];
  const path = slug ? `/${lang}/${slug}/` : `/${lang}/`;
  return hash ? `${path}#${hash}` : path;
}

export const ui = {
  fr: {
    'nav.home': 'Accueil',
    'nav.rooms': 'Chambres',
    'nav.services': 'Services',
    'nav.rabat': 'Rabat',
    'nav.contact': 'Contact',
    'nav.guide': "Guide d'accueil",
    'nav.book': 'Réserver',
    'nav.menu': 'Menu',
    'nav.close': 'Fermer',
    'lang.switch': 'English',
    'lang.switchShort': 'EN',

    'home.eyebrow': 'Riad · Médina de Rabat',
    'home.discoverRooms': 'Découvrir les chambres',
    'home.aboutEyebrow': 'La maison',
    'home.aboutTitle': 'Une maison de famille au cœur de la médina',
    'home.roomsEyebrow': 'Chambres & suites',
    'home.roomsTitle': 'Des chambres autour du patio',
    'home.roomsAll': 'Toutes les chambres',
    'home.servicesEyebrow': 'Services',
    'home.servicesTitle': 'Tout pour un séjour sans souci',
    'home.servicesAll': 'Voir tous les services',
    'home.rabatEyebrow': 'Autour du riad',
    'home.rabatTitle': 'Nos bonnes adresses à Rabat',
    'home.rabatAll': 'Explorer Rabat',
    'home.guideEyebrow': 'Déjà chez nous ?',
    'home.guideTitle': "Le guide d'accueil, dans votre poche",
    'home.guideText':
      "Horaires, Wi-Fi, accès et parking, dîner marocain, transferts, et nos adresses préférées avec itinéraires Google Maps. Scannez le QR code de votre chambre ou ouvrez le guide ici.",
    'home.guideCta': 'Ouvrir le guide',
    'home.contactTitle': 'Une question, une envie particulière ?',
    'home.contactText': 'Nous répondons rapidement sur WhatsApp, par téléphone ou par e-mail.',

    'rooms.title': 'Chambres & suites',
    'rooms.intro':
      'Chaque chambre a été pensée comme une pièce de la maison : matériaux d’ici, lumière du patio et calme de la médina.',
    'rooms.from': 'à partir de',
    'rooms.perNight': '/ nuit',
    'rooms.guests': 'pers.',
    'rooms.size': 'm²',
    'rooms.book': 'Réserver cette chambre',
    'rooms.features': 'Équipements',

    'services.title': 'Services & extras',
    'services.intro':
      'Dîner marocain fait maison, transferts aéroport, hammam… Tous nos services se réservent simplement auprès de l’équipe.',
    'services.dining': 'Table & cuisine',
    'services.transport': 'Transferts & transports',
    'services.wellness': 'Bien-être',
    'services.other': 'Autres services',
    'services.minibar': 'Minibar',
    'services.minibarIntro': 'Les consommations sont relevées au départ et réglées avec le séjour.',
    'services.bookWhatsapp': 'Réserver via WhatsApp',
    'services.price': 'Tarif',

    'rabat.title': 'Rabat, nos bonnes adresses',
    'rabat.intro':
      'Une sélection personnelle de lieux à voir, où manger et où flâner, tous à portée de marche ou de petit taxi. Chaque adresse ouvre l’itinéraire dans Google Maps.',
    'rabat.culture': 'À visiter',
    'rabat.restaurant': 'Où manger',
    'rabat.cafe': 'Cafés & pauses',
    'rabat.shopping': 'Shopping & artisanat',
    'rabat.nature': 'Nature & détente',
    'rabat.nightlife': 'Soirées',
    'rabat.maps': 'Itinéraire',
    'rabat.tip': 'Notre conseil',

    'contact.title': 'Contact & accès',
    'contact.intro': 'Nous sommes joignables tous les jours. Pour une réservation, le plus simple reste WhatsApp.',
    'contact.whatsapp': 'Écrire sur WhatsApp',
    'contact.call': 'Appeler',
    'contact.email': 'Écrire un e-mail',
    'contact.address': 'Adresse',
    'contact.hours': 'Horaires',
    'contact.access': 'Comment venir',
    'contact.parking': 'Parking',
    'contact.maps': 'Ouvrir dans Google Maps',
    'contact.reception': 'Accueil',
    'contact.checkIn': 'Arrivée',
    'contact.checkOut': 'Départ',
    'contact.breakfast': 'Petit-déjeuner',

    'guide.title': "Guide d'accueil",
    'guide.welcome': 'Bienvenue',
    'guide.essentials': 'Essentiels',
    'guide.services': 'Services',
    'guide.rabat': 'Rabat',
    'guide.practical': 'Pratique',
    'guide.contact': 'Contact',
    'guide.hours': 'Horaires',
    'guide.wifi': 'Wi-Fi',
    'guide.wifiNetwork': 'Réseau',
    'guide.wifiPassword': 'Mot de passe',
    'guide.copy': 'Copier',
    'guide.copied': 'Copié !',
    'guide.access': 'Accès au riad',
    'guide.parking': 'Parking',
    'guide.minibar': 'Prix minibar',
    'guide.transportTips': 'Se déplacer à Rabat',
    'guide.houseRules': 'Vie de la maison',
    'guide.emergency': "Numéros d'urgence",
    'guide.goodToKnow': 'Bon à savoir',
    'guide.whatsapp': 'WhatsApp',
    'guide.call': 'Appeler',
    'guide.email': 'E-mail',
    'guide.maps': 'Google Maps',
    'guide.fullSite': 'Voir le site complet',
    'guide.hostSign': 'Toute l’équipe du',
    'guide.whatsappMessage': 'Bonjour, je suis client(e) du Riad Dar Soufa et j’aurais une question :',
    'guide.bookService': 'Demander',

    'wa.service': 'Bonjour, je souhaiterais réserver : ',
    'wa.room': 'Bonjour, je souhaiterais réserver la chambre : ',
    'wa.default': 'Bonjour, je souhaiterais avoir des informations sur le Riad Dar Soufa.',

    'footer.rights': 'Tous droits réservés.',
    'footer.guide': "Guide d'accueil digital",
    'footer.legal': 'Mentions légales',
    'footer.follow': 'Suivez-nous',
    'footer.navigation': 'Navigation',
    'footer.contact': 'Contact',

    'notfound.title': 'Page introuvable',
    'notfound.text': 'La page que vous cherchez n’existe pas ou a été déplacée.',
    'notfound.back': "Retour à l'accueil",

    'currency': 'MAD',
  },
  en: {
    'nav.home': 'Home',
    'nav.rooms': 'Rooms',
    'nav.services': 'Services',
    'nav.rabat': 'Rabat',
    'nav.contact': 'Contact',
    'nav.guide': 'Welcome guide',
    'nav.book': 'Book now',
    'nav.menu': 'Menu',
    'nav.close': 'Close',
    'lang.switch': 'Français',
    'lang.switchShort': 'FR',

    'home.eyebrow': 'Riad · Rabat Medina',
    'home.discoverRooms': 'Discover the rooms',
    'home.aboutEyebrow': 'The house',
    'home.aboutTitle': 'A family home in the heart of the medina',
    'home.roomsEyebrow': 'Rooms & suites',
    'home.roomsTitle': 'Rooms gathered around the patio',
    'home.roomsAll': 'All rooms',
    'home.servicesEyebrow': 'Services',
    'home.servicesTitle': 'Everything for a carefree stay',
    'home.servicesAll': 'See all services',
    'home.rabatEyebrow': 'Around the riad',
    'home.rabatTitle': 'Our favourite spots in Rabat',
    'home.rabatAll': 'Explore Rabat',
    'home.guideEyebrow': 'Already staying with us?',
    'home.guideTitle': 'Your welcome guide, in your pocket',
    'home.guideText':
      'Opening hours, Wi-Fi, access and parking, Moroccan dinner, transfers, and our favourite places with Google Maps directions. Scan the QR code in your room or open the guide here.',
    'home.guideCta': 'Open the guide',
    'home.contactTitle': 'A question or a special request?',
    'home.contactText': 'We reply quickly on WhatsApp, by phone or by e-mail.',

    'rooms.title': 'Rooms & suites',
    'rooms.intro':
      'Each room was designed as a room of the house: local materials, patio light and the quiet of the medina.',
    'rooms.from': 'from',
    'rooms.perNight': '/ night',
    'rooms.guests': 'guests',
    'rooms.size': 'sqm',
    'rooms.book': 'Book this room',
    'rooms.features': 'Amenities',

    'services.title': 'Services & extras',
    'services.intro':
      'Home-cooked Moroccan dinner, airport transfers, hammam… All our services are easily booked with the team.',
    'services.dining': 'Dining',
    'services.transport': 'Transfers & transport',
    'services.wellness': 'Wellness',
    'services.other': 'Other services',
    'services.minibar': 'Minibar',
    'services.minibarIntro': 'Items are counted at departure and settled with your stay.',
    'services.bookWhatsapp': 'Book via WhatsApp',
    'services.price': 'Price',

    'rabat.title': 'Rabat, our favourite addresses',
    'rabat.intro':
      'A personal selection of places to see, eat and wander, all within walking or short taxi distance. Each address opens directions in Google Maps.',
    'rabat.culture': 'To visit',
    'rabat.restaurant': 'Where to eat',
    'rabat.cafe': 'Cafés & breaks',
    'rabat.shopping': 'Shopping & crafts',
    'rabat.nature': 'Nature & leisure',
    'rabat.nightlife': 'Evenings',
    'rabat.maps': 'Directions',
    'rabat.tip': 'Our tip',

    'contact.title': 'Contact & access',
    'contact.intro': 'We are reachable every day. For bookings, WhatsApp is the easiest way.',
    'contact.whatsapp': 'Message on WhatsApp',
    'contact.call': 'Call',
    'contact.email': 'Send an e-mail',
    'contact.address': 'Address',
    'contact.hours': 'Opening hours',
    'contact.access': 'How to get here',
    'contact.parking': 'Parking',
    'contact.maps': 'Open in Google Maps',
    'contact.reception': 'Reception',
    'contact.checkIn': 'Check-in',
    'contact.checkOut': 'Check-out',
    'contact.breakfast': 'Breakfast',

    'guide.title': 'Welcome guide',
    'guide.welcome': 'Welcome',
    'guide.essentials': 'Essentials',
    'guide.services': 'Services',
    'guide.rabat': 'Rabat',
    'guide.practical': 'Practical',
    'guide.contact': 'Contact',
    'guide.hours': 'Hours',
    'guide.wifi': 'Wi-Fi',
    'guide.wifiNetwork': 'Network',
    'guide.wifiPassword': 'Password',
    'guide.copy': 'Copy',
    'guide.copied': 'Copied!',
    'guide.access': 'Getting to the riad',
    'guide.parking': 'Parking',
    'guide.minibar': 'Minibar prices',
    'guide.transportTips': 'Getting around Rabat',
    'guide.houseRules': 'House life',
    'guide.emergency': 'Emergency numbers',
    'guide.goodToKnow': 'Good to know',
    'guide.whatsapp': 'WhatsApp',
    'guide.call': 'Call',
    'guide.email': 'E-mail',
    'guide.maps': 'Google Maps',
    'guide.fullSite': 'Visit the full website',
    'guide.hostSign': 'The whole team at',
    'guide.whatsappMessage': 'Hello, I am a guest at Riad Dar Soufa and I have a question:',
    'guide.bookService': 'Request',

    'wa.service': 'Hello, I would like to book: ',
    'wa.room': 'Hello, I would like to book the room: ',
    'wa.default': 'Hello, I would like some information about Riad Dar Soufa.',

    'footer.rights': 'All rights reserved.',
    'footer.guide': 'Digital welcome guide',
    'footer.legal': 'Legal notice',
    'footer.follow': 'Follow us',
    'footer.navigation': 'Navigation',
    'footer.contact': 'Contact',

    'notfound.title': 'Page not found',
    'notfound.text': 'The page you are looking for does not exist or has moved.',
    'notfound.back': 'Back to home',

    'currency': 'MAD',
  },
} as const satisfies Record<Lang, Record<string, string>>;

export type UiKey = keyof (typeof ui)['fr'];

export function useTranslations(lang: Lang) {
  return function t(key: UiKey): string {
    return ui[lang][key] ?? ui[defaultLang][key] ?? key;
  };
}
