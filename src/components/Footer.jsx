import styles from './Footer.module.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <a href="#hero" className={styles.logo}>
          <span className={styles.sym}>&lt;</span>dev<span className={styles.sym}>/&gt;</span>
        </a>
        <p className={styles.copy}>
          © {year} Kamronbek. Built with React & Vite.
        </p>
        <div className={styles.links}>
          <a href="https://github.com" target="_blank" rel="noreferrer" className={styles.link}>GitHub</a>
          <span className={styles.dot}>·</span>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className={styles.link}>LinkedIn</a>
          <span className={styles.dot}>·</span>
          <a href="https://t.me/username" target="_blank" rel="noreferrer" className={styles.link}>Telegram</a>
        </div>
      </div>
    </footer>
  )
}
