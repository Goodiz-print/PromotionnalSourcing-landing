import { getRelativeLocaleUrl } from 'astro:i18n'
import { defaultLang, type Lang } from './ui'

/* Slugs par locale. Les slugs FR et EN diffèrent volontairement (SEO local), donc on ne peut
   pas se contenter de préfixer le pathname courant par la locale : il faut cette table. */
export const routes = {
  home: { fr: '/', en: '/' },
  contact: { fr: '/contact', en: '/contact' },
  thanks: { fr: '/merci', en: '/thank-you' },
  legal: { fr: '/mentions-legales', en: '/legal-notice' },
  privacy: { fr: '/politique-de-confidentialite', en: '/privacy-policy' },
} as const

export type RouteKey = keyof typeof routes

/** Chemin relatif d'une route dans une locale donnée ('/contact', '/en/contact'). */
export function localizedPath(key: RouteKey, lang: string | undefined): string {
  const locale = (lang && lang in routes.home ? lang : defaultLang) as Lang
  return getRelativeLocaleUrl(locale, routes[key][locale])
}

/** Ancre sur la page d'accueil, utilisable depuis n'importe quelle page ('/#agences'). */
export function homeAnchor(hash: string, lang: string | undefined): string {
  const home = localizedPath('home', lang)
  /* Le chemin doit rester absolu : sans le slash final, '#agences' seul resterait
     relatif à la page courante et ne ramènerait jamais vers l'accueil. */
  return `${home.endsWith('/') ? home : `${home}/`}#${hash}`
}
