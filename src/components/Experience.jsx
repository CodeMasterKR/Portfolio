import styles from './Experience.module.css'
import { useLang } from '../i18n/LanguageContext'

export default function Experience() {
  const { t } = useLang()
  const { work, education, languages } = t.experience

  return (
    <section id="experience" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.label}>{t.experience.label}</span>
          <h2 className={styles.title}>{t.experience.title}</h2>
        </div>

        <div className={styles.timeline}>
          {work.map((job, i) => (
            <WorkCard key={i} {...job} />
          ))}
        </div>

        <div className={styles.bottom}>
          <div className={styles.column}>
            <div className={styles.colHeader}>
              <GradIcon />
              <span>{t.experience.educationTitle}</span>
            </div>
            <div className={styles.cards}>
              {education.map((item, i) => (
                <EduCard key={i} {...item} />
              ))}
            </div>
          </div>

          <div className={styles.column}>
            <div className={styles.colHeader}>
              <GlobeIcon />
              <span>{t.experience.languagesTitle}</span>
            </div>
            <div className={styles.langCard}>
              {languages.map((lang, i) => (
                <LangBar key={i} {...lang} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function WorkCard({ company, role, period, current, projects }) {
  return (
    <div className={styles.workCard}>
      <div className={styles.workMarker}>
        <span className={styles.markerDot} />
      </div>
      <div className={styles.workBody}>
        <div className={styles.workTop}>
          <div>
            <h3 className={styles.workRole}>{role}</h3>
            <span className={styles.workCompany}>{company}</span>
          </div>
          {current
            ? <span className={styles.currentBadge}><span className={styles.liveDot} />{period}</span>
            : <span className={styles.period}>{period}</span>
          }
        </div>

        <div className={styles.projects}>
          {projects.map((p, i) => (
            <div key={i} className={styles.project}>
              <div className={styles.projectHead}>
                <h4 className={styles.projectName}>{p.name}</h4>
                <span className={styles.projectSummary}>{p.summary}</span>
              </div>
              <div className={styles.projectStack}>
                {p.stack.map(s => (
                  <span key={s} className={styles.stackTag}>{s}</span>
                ))}
              </div>
              <ul className={styles.points}>
                {p.points.map((pt, j) => (
                  <li key={j}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
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

function LangBar({ name, level, value }) {
  return (
    <div className={styles.lang}>
      <div className={styles.langTop}>
        <span className={styles.langName}>{name}</span>
        <span className={styles.langLevel}>{level}</span>
      </div>
      <div className={styles.langTrack}>
        <span className={styles.langFill} style={{ width: `${value}%` }} />
      </div>
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

function GlobeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
    </svg>
  )
}
