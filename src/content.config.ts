import { defineCollection } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Tout le contenu éditable du site ET du guide d'accueil vit dans `src/content/`.
 * Chaque texte visible existe en français et en anglais ({ fr, en }).
 * Le CMS (/admin) et l'éditeur GitHub modifient ces mêmes fichiers :
 * une seule source de vérité, aucun doublon entre le site et le guide.
 */
const i18n = z.object({ fr: z.string(), en: z.string() });
const i18nOptional = z.object({ fr: z.string().default(''), en: z.string().default('') }).optional();

const riad = defineCollection({
  loader: glob({ pattern: 'riad.json', base: './src/content/settings' }),
  schema: z.object({
    name: z.string(),
    tagline: i18n,
    intro: i18n,
    address: z.object({
      street: z.string(),
      city: z.string(),
      postalCode: z.string().default(''),
      country: i18n,
    }),
    mapsUrl: z.url(),
    phone: z.string(),
    /** Numéro WhatsApp au format international sans "+" ni espaces (ex: 212600000000) */
    whatsapp: z.string().regex(/^\d{8,15}$/),
    email: z.email(),
    bookingUrl: z.url(),
    instagram: z.url().optional(),
    facebook: z.url().optional(),
    hours: z.object({
      checkInFrom: z.string(),
      checkInTo: z.string(),
      checkOut: z.string(),
      breakfastFrom: z.string(),
      breakfastTo: z.string(),
      receptionFrom: z.string(),
      receptionTo: z.string(),
    }),
    wifi: z.object({
      ssid: z.string(),
      password: z.string(),
    }),
    access: i18n,
    parking: i18n,
    images: z.object({
      hero: z.string(),
      about: z.string(),
    }),
  }),
});

const guide = defineCollection({
  loader: glob({ pattern: 'guide.json', base: './src/content/settings' }),
  schema: z.object({
    welcome: i18n,
    hostName: z.string(),
    houseRules: z.array(i18n),
    transportTips: z.array(z.object({ title: i18n, text: i18n })),
    emergency: z.array(z.object({ label: i18n, number: z.string() })),
    goodToKnow: z.array(i18n).default([]),
  }),
});

const rooms = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/rooms' }),
  schema: z.object({
    name: i18n,
    description: i18n,
    capacity: z.number().int().positive(),
    size: z.number().positive(),
    bed: i18n,
    features: z.array(i18n),
    priceFrom: z.number().nonnegative(),
    image: z.string(),
    order: z.number().default(99),
  }),
});

const services = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/services' }),
  schema: z.object({
    title: i18n,
    description: i18n,
    price: i18n,
    category: z.enum(['dining', 'transport', 'wellness', 'other']),
    icon: z.enum(['dinner', 'breakfast', 'plane', 'train', 'car', 'spa', 'compass', 'star']),
    showOnSite: z.boolean().default(true),
    showInGuide: z.boolean().default(true),
    note: i18nOptional,
    order: z.number().default(99),
  }),
});

const minibar = defineCollection({
  loader: file('./src/content/settings/minibar.json', {
    // Le fichier est un objet { items: [...] } (format attendu par le CMS)
    parser: (text) => JSON.parse(text).items,
  }),
  schema: z.object({
    name: i18n,
    price: z.number().nonnegative(),
    order: z.number().default(99),
  }),
});

const places = defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/places' }),
  schema: z.object({
    name: i18n,
    category: z.enum(['culture', 'restaurant', 'cafe', 'shopping', 'nature', 'nightlife']),
    description: i18n,
    mapsUrl: z.url(),
    distance: i18n,
    tip: i18nOptional,
    featured: z.boolean().default(false),
    order: z.number().default(99),
  }),
});

export const collections = { riad, guide, rooms, services, minibar, places };
