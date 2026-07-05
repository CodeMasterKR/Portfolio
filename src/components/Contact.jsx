import { useState } from 'react'
import styles from './Contact.module.css'
import { useLang } from '../i18n/LanguageContext'

export default function Contact() {
  const { t } = useLang()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleChange = e => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('loading')
    // Bu yerda o'zingizning email xizmatingizni ulang
    // Masalan: EmailJS, Formspree, yoki backend API
    await new Promise(r => setTimeout(r, 1200))
    setStatus('success')
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.label}>{t.contact.label}</span>
          <h2 className={styles.title}>{t.contact.title}</h2>
          <p className={styles.subtitle}>
            {t.contact.subtitle}
          </p>
        </div>

        <div className={styles.layout}>
          <div className={styles.info}>
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>{t.contact.infoTitle}</h3>
              <p className={styles.infoText}>
                {t.contact.infoText}
              </p>

              <div className={styles.contacts}>
                <a href="mailto:ibrahimovkamronbek7@gmail.com" className={styles.contactItem}>
                  <div className={styles.contactIcon}><EmailIcon /></div>
                  <div>
                    <span className={styles.contactLabel}>Email</span>
                    <span className={styles.contactValue}>ibrahimovkamronbek7@gmail.com</span>
                  </div>
                </a>
                <a href="tel:+998935895766" className={styles.contactItem}>
                  <div className={styles.contactIcon}><PhoneIcon /></div>
                  <div>
                    <span className={styles.contactLabel}>{t.contact.phone}</span>
                    <span className={styles.contactValue}>+998 93 589 57 66</span>
                  </div>
                </a>
                <a href="https://t.me/Ibrohimov_kamron" target="_blank" rel="noreferrer" className={styles.contactItem}>
                  <div className={styles.contactIcon}><TelegramIcon /></div>
                  <div>
                    <span className={styles.contactLabel}>Telegram</span>
                    <span className={styles.contactValue}>@Ibrohimov_kamron</span>
                  </div>
                </a>
                <a href="https://github.com/kamron-ibrohimov" target="_blank" rel="noreferrer" className={styles.contactItem}>
                  <div className={styles.contactIcon}><GitHubIcon /></div>
                  <div>
                    <span className={styles.contactLabel}>GitHub</span>
                    <span className={styles.contactValue}>kamron-ibrohimov</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="name">{t.contact.nameLabel}</label>
              <input
                id="name"
                name="name"
                type="text"
                className={styles.formInput}
                placeholder="Kamronbek"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                className={styles.formInput}
                placeholder="email@example.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="message">{t.contact.messageLabel}</label>
              <textarea
                id="message"
                name="message"
                className={styles.formTextarea}
                placeholder={t.contact.messagePlaceholder}
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className={styles.submitBtn}
              disabled={status === 'loading' || status === 'success'}
            >
              {status === 'loading' && <span className={styles.spinner} />}
              {status === 'idle' && t.contact.send}
              {status === 'loading' && t.contact.sending}
              {status === 'success' && t.contact.sent}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

function EmailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  )
}

function TelegramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}
