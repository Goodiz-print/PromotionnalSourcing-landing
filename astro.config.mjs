// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://promotional-sourcing.eu',
  integrations: [
    sitemap({
      // Les pages de confirmation de formulaire sont en noindex : les exclure du sitemap
      // évite d'envoyer à Google des URLs qu'on lui demande par ailleurs d'ignorer.
      filter: (page) => !/\/(merci|thank-you)\/$/.test(page),
      i18n: {
        defaultLocale: 'fr',
        locales: {
          fr: 'fr-FR',
          en: 'en-US',
        },
      },
    }),
  ],
  i18n: {
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
