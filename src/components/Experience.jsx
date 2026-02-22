import styles from './Experience.module.css'

const education = [
  {
    institution: 'Toshkent Davlat Pedagogika Universiteti',
    degree: 'Matematika va Informatika o\'qituvchisi',
    period: '2021 — 2025',
    type: 'Bakalavr',
  },
  {
    institution: 'Najot Ta\'lim',
    degree: 'Fullstack Development Bootcamp',
    period: '2024',
    type: 'Bootcamp',
  },
]

const work = [
  {
    company: 'London Education o\'quv markazi',
    role: 'Main Fullstack Mentor',
    period: 'Mart 2025 — hozir',
    current: true,
  },
  {
    company: 'Yakkasaroy 172-maktab',
    role: 'Informatika o\'qituvchisi',
    period: '2023',
    current: false,
  },
]

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.label}>// experience</span>
          <h2 className={styles.title}>Ta'lim & Ish tajriba</h2>
        </div>

        <div className={styles.grid}>
          <div className={styles.column}>
            <div className={styles.colHeader}>
              <GradIcon />
              <span>Ta'lim</span>
            </div>
            <div className={styles.cards}>
              {education.map((item, i) => (
                <EduCard key={i} {...item} />
              ))}
            </div>
          </div>

          <div className={styles.column}>
            <div className={styles.colHeader}>
              <BriefIcon />
              <span>Ish tajriba</span>
            </div>
            <div className={styles.cards}>
              {work.map((item, i) => (
                <WorkCard key={i} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function EduCard({ institution, degree, period, type }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardTop}>
        <span className={styles.typeBadge}>{type}</span>
        <span className={styles.period}>{period}</span>
      </div>
      <h4 className={styles.cardTitle}>{institution}</h4>
      <p className={styles.cardSub}>{degree}</p>
    </div>
  )
}

function WorkCard({ company, role, period, current }) {
  return (
    <div className={`${styles.card} ${current ? styles.cardActive : ''}`}>
      <div className={styles.cardTop}>
        {current
          ? <span className={styles.currentBadge}><span className={styles.liveDot} />Hozir</span>
          : <span className={styles.typeBadge}>Sobiq</span>
        }
        <span className={styles.period}>{period}</span>
      </div>
      <h4 className={styles.cardTitle}>{company}</h4>
      <p className={styles.cardSub}>{role}</p>
    </div>
  )
}

function GradIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
    </svg>
  )
}

function BriefIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
    </svg>
  )
}
