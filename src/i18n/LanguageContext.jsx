import { createContext, useContext, useState, useEffect } from 'react'
import { translations, SUPPORTED, DEFAULT_LANG } from './translations'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    const saved = typeof localStorage !== 'undefined' ? localStorage.getItem('lang') : null
    return saved && SUPPORTED.includes(saved) ? saved : DEFAULT_LANG
  })

  useEffect(() => {
    localStorage.setItem('lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  const setLang = (l) => {
    if (SUPPORTED.includes(l)) setLangState(l)
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLang() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLang must be used within <LanguageProvider>')
  return ctx
}
