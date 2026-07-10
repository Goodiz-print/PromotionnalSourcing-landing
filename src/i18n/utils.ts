import { ui, defaultLang } from './ui'

type UiKeys = keyof (typeof ui)[typeof defaultLang]

export function useTranslations(lang: string | undefined) {
  const locale = (lang && lang in ui ? lang : defaultLang) as keyof typeof ui

  return function t<K extends UiKeys>(key: K): (typeof ui)[typeof defaultLang][K] {
    return (ui[locale] as Record<UiKeys, unknown>)[key] as (typeof ui)[typeof defaultLang][K] ?? ui[defaultLang][key]
  }
}
