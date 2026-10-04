// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

/**
 * URL publique du site. À remplacer par le nom de domaine définitif :
 * elle sert aux balises canonical / hreflang, au sitemap et au QR code du guide.
 */
const SITE = process.env.SITE_URL ?? 'https://www.riaddarsoufa.com';

export default defineConfig({
  site: SITE,
  trailingSlash: 'always',
  i18n: {
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
    routing: {
      prefixDefaultLocale: true,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'fr',
        locales: { fr: 'fr-FR', en: 'en-GB' },
      },
      filter: (page) => !page.includes('/qr/') && !page.includes('/admin'),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
