import { getCollection, getEntry } from 'astro:content';
import type { Lang } from '../i18n/ui';

const byOrder = <T extends { data: { order: number } }>(a: T, b: T) => a.data.order - b.data.order;

export async function getRiad() {
  const entry = await getEntry('riad', 'riad');
  if (!entry) throw new Error('src/content/settings/riad.json est introuvable');
  return entry.data;
}

export async function getGuide() {
  const entry = await getEntry('guide', 'guide');
  if (!entry) throw new Error('src/content/settings/guide.json est introuvable');
  return entry.data;
}

export async function getRooms() {
  return (await getCollection('rooms')).sort(byOrder);
}

export async function getServices(where: 'site' | 'guide' | 'all' = 'all') {
  const all = (await getCollection('services')).sort(byOrder);
  if (where === 'site') return all.filter((s) => s.data.showOnSite);
  if (where === 'guide') return all.filter((s) => s.data.showInGuide);
  return all;
}

export async function getMinibar() {
  return (await getCollection('minibar')).sort(byOrder);
}

export async function getPlaces() {
  return (await getCollection('places')).sort(byOrder);
}

export const serviceCategories = ['dining', 'transport', 'wellness', 'other'] as const;
export const placeCategories = ['culture', 'restaurant', 'cafe', 'shopping', 'nature', 'nightlife'] as const;

export function groupBy<T, K extends string>(items: T[], key: (item: T) => K, order: readonly K[]) {
  const groups = new Map<K, T[]>();
  for (const k of order) groups.set(k, []);
  for (const item of items) groups.get(key(item))?.push(item);
  return [...groups.entries()].filter(([, list]) => list.length > 0);
}

/** Lien WhatsApp "click to chat" avec message pré-rempli. */
export function whatsappLink(number: string, message?: string) {
  const base = `https://wa.me/${number}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function telLink(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, '')}`;
}

export function formatPrice(amount: number, lang: Lang) {
  return new Intl.NumberFormat(lang === 'fr' ? 'fr-MA' : 'en-GB', { maximumFractionDigits: 0 }).format(amount);
}
