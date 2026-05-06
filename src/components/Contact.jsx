import { useState } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
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
          <span className={styles.label}>// contact</span>
          <h2 className={styles.title}>Bog'lanish</h2>
          <p className={styles.subtitle}>
            Loyiha yoki hamkorlik bo'yicha murojaat qiling
          </p>
        </div>

        <div className={styles.layout}>
          <div className={styles.info}>
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>Kontakt</h3>
              <p className={styles.infoText}>
                Hozirda yangi loyihalarga ochiqman. Quyidagi manzillar orqali bog'laning.
              </p>

              <div className={styles.contacts}>
                <a href="mailto:ibrahimovkamronbek7@gmail.com" className={styles.contactItem}>
                  <div className={styles.contactIcon}><EmailIcon /></div>
                  <div>
                    <span className={styles.contactLabel}>Email</span>
                    <span className={styles.contactValue}>ibrahimovkamronbek7@gmail.com</span>
                  </div>
                </a>
                <a href="https://t.me/Ibrohimov_kamron" target="_blank" rel="noreferrer" className={styles.contactItem}>
                  <div className={styles.contactIcon}><TelegramIcon /></div>
                  <div>
                    <span className={styles.contactLabel}>Telegram</span>
                    <span className={styles.contactValue}>@Ibrohimov_kamron</span>
                  </div>
                </a>
                <a href="https://linkedin.com/in/ibrohimov-kamronbek" target="_blank" rel="noreferrer" className={styles.contactItem}>
                  <div className={styles.contactIcon}><LinkedInIcon /></div>
                  <div>
                    <span className={styles.contactLabel}>LinkedIn</span>
                    <span className={styles.contactValue}>ibrohimov-kamronbek</span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label className={styles.formLabel} htmlFor="name">Ismingiz</label>
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
              <label className={styles.formLabel} htmlFor="message">Xabar</label>
              <textarea
                id="message"
                name="message"
                className={styles.formTextarea}
                placeholder="Sizning loyihangiz haqida qisqacha..."
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
              {status === 'idle' && 'Xabar yuborish'}
              {status === 'loading' && 'Yuborilmoqda...'}
              {status === 'success' && '✓ Xabar yuborildi!'}
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

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}
