import styles from './Projects.module.css'

const projects = [
  {
    title: 'E-Commerce Platform',
    desc: 'To\'liq funksional onlayn do\'kon. Foydalanuvchi autentifikatsiyasi, mahsulot boshqaruvi, to\'lov integratsiyasi va admin panel bilan.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
  },
  {
    title: 'Real-Time Chat App',
    desc: 'Socket.io asosida ishlovchi real-vaqt chat ilovasi. Xonalar, fayl yuborish, online status va bildirishnomalar mavjud.',
    tags: ['React', 'Socket.io', 'Express', 'MongoDB'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: true,
  },
  {
    title: 'Task Management API',
    desc: 'RESTful API — loyiha va vazifalarni boshqarish uchun. JWT auth, rol asosidagi ruxsat, to\'liq CRUD.',
    tags: ['Node.js', 'Express', 'PostgreSQL', 'JWT', 'Docker'],
    github: 'https://github.com',
    live: null,
    featured: true,
  },
  {
    title: 'Analytics Dashboard',
    desc: 'Interaktiv ma\'lumot vizualizatsiyasi. Grafik va diagrammalar bilan real-vaqt statistika ko\'rsatish.',
    tags: ['React', 'TypeScript', 'Chart.js', 'REST API'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: false,
  },
  {
    title: 'URL Shortener',
    desc: 'Havola qisqartiruvchi xizmat. Qisqa havola yaratish, statistika, QR kod generatsiyasi.',
    tags: ['Node.js', 'Redis', 'MongoDB', 'React'],
    github: 'https://github.com',
    live: 'https://example.com',
    featured: false,
  },
  {
    title: 'Blog CMS',
    desc: 'To\'liq funksional blog tizimi. Markdown qo\'llab-quvvatlash, kategoriyalar, izohlar va SEO optimallashtirish.',
    tags: ['Next.js', 'Node.js', 'PostgreSQL', 'Prisma'],
    github: 'https://github.com',
    live: null,
    featured: false,
  },
]

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.label}>// projects</span>
          <h2 className={styles.title}>Loyihalar</h2>
          <p className={styles.subtitle}>
            Qurgan eng yaxshi ishlarimdan ba'zilari
          </p>
        </div>

        <div className={styles.grid}>
          {projects.map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>

        <div className={styles.more}>
          <a href="https://github.com" target="_blank" rel="noreferrer" className={styles.moreBtn}>
            GitHub'da ko'proq ko'rish
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ title, desc, tags, github, live, featured }) {
  return (
    <div className={`${styles.card} ${featured ? styles.featured : ''}`}>
      {featured && <div className={styles.featuredBadge}>Featured</div>}
      <div className={styles.cardTop}>
        <div className={styles.cardIcon}>
          <FolderIcon />
        </div>
        <div className={styles.cardLinks}>
          {github && (
            <a href={github} target="_blank" rel="noreferrer" aria-label="GitHub" className={styles.iconLink}>
              <GitHubIcon />
            </a>
          )}
          {live && (
            <a href={live} target="_blank" rel="noreferrer" aria-label="Live" className={styles.iconLink}>
              <ExternalIcon />
            </a>
          )}
        </div>
      </div>

      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDesc}>{desc}</p>

      <div className={styles.tags}>
        {tags.map(tag => (
          <span key={tag} className={styles.tag}>{tag}</span>
        ))}
      </div>
    </div>
  )
}

function FolderIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
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

function ExternalIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}
