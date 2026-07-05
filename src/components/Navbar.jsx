import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'
import { useLang } from '../i18n/LanguageContext'
import { SUPPORTED, LANG_LABELS } from '../i18n/translations'

export default function Navbar() {
  const { lang, setLang, t } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  const links = [
    { href: '#hero', label: t.nav.home },
    { href: '#skills', label: t.nav.skills },
    { href: '#projects', label: t.nav.projects },
    { href: '#contact', label: t.nav.contact },
  ]

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href="#hero" className={styles.logo}>
          <span className={styles.logoSymbol}>&lt;</span>
          Ibrohimov
          <span className={styles.logoSymbol}>/&gt;</span>
        </a>

        <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
          {links.map(link => (
            <a key={link.href} href={link.href} className={styles.link} onClick={closeMenu}>
              {link.label}
            </a>
          ))}

          <div className={styles.langSwitch} role="group" aria-label="Language">
            {SUPPORTED.map(code => (
              <button
                key={code}
                type="button"
                className={`${styles.langBtn} ${lang === code ? styles.langActive : ''}`}
                onClick={() => setLang(code)}
              >
                {LANG_LABELS[code]}
              </button>
            ))}
          </div>

          <a
            href="#contact"
            className={styles.cta}
            onClick={closeMenu}
          >
            {t.nav.hire}
          </a>
        </nav>

        <button
          className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {menuOpen && <div className={styles.overlay} onClick={closeMenu} />}
    </header>
  )
}
