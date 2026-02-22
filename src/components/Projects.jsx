import { useState } from 'react'
import styles from './Projects.module.css'

const projects = [
  {
    title: 'EduNex — O\'quv Markaz Tizimi',
    desc: 'O\'quv markazini to\'liq tizimlashtirish uchun platforma. Director, Manager, Admin, Teacher va Studentlar uchun alohida Telegram bot va web panel. Har bir rol o\'z imkoniyatlariga ega.',
    tags: ['NestJS', 'Prisma', 'PostgreSQL', 'React.js', 'Tailwind CSS', 'AWS'],
    github: null,
    live: 'https://edunex.uz',
    images: [
      `${import.meta.env.BASE_URL}screenshots/project1/img1.png`,
      `${import.meta.env.BASE_URL}screenshots/project1/img2.png`,
      `${import.meta.env.BASE_URL}screenshots/project1/img3.png`,
    ],
  },
  {
    title: 'Intizom — Productivity App',
    desc: 'Odatlar, vazifalar, maqsadlar va moliyani kuzatuvchi to\'liq platforma. Obuna tizimi, admin panel va analytics bilan. O\'zini rivojlantirmoqchi bo\'lgan foydalanuvchilar uchun yaratilgan.',
    tags: ['NestJS', 'Prisma', 'PostgreSQL', 'React', 'TypeScript', 'Tailwind CSS'],
    github: null,
    live: 'https://intizom.uz',
    images: [
      `${import.meta.env.BASE_URL}screenshots/project2/img1.png`,
      `${import.meta.env.BASE_URL}screenshots/project2/img2.png`,
      `${import.meta.env.BASE_URL}screenshots/project2/img3.png`,
    ],
  },
  {
    title: 'Ustoz Support — AI Yordamchi',
    desc: 'O\'qituvchilar uchun AI asosida taqdimot, test, o\'yin va amaliyotlar yaratuvchi zamonaviy platforma. Google autentifikatsiya va obuna tizimi bilan.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Google OAuth'],
    github: null,
    live: 'https://support-teacher.edunex.uz',
    images: [
      `${import.meta.env.BASE_URL}screenshots/project3/img1.png`,
      `${import.meta.env.BASE_URL}screenshots/project3/img2.png`,
      `${import.meta.env.BASE_URL}screenshots/project3/img3.png`,
    ],
  },
  {
    title: 'Prezentor — AI Taqdimot Bot',
    desc: 'Telegram bot orqali Google Gemini AI yordamida taqdimot, referat va mustaqil ishlar yaratuvchi xizmat. 1000+ dan ortiq faol foydalanuvchi bilan ishlamoqda.',
    tags: ['Node.js', 'Telegraf', 'MongoDB', 'Google Gemini AI'],
    github: null,
    live: 'https://t.me/prezentor_bot',
    images: [
      `${import.meta.env.BASE_URL}screenshots/project4/img1.png`,
      `${import.meta.env.BASE_URL}screenshots/project4/img2.png`,
    ],
  },
  {
    title: 'ShopUz — E-Commerce Platforma',
    desc: 'To\'liq funksional onlayn do\'kon. Mahsulot katalogi, savat, buyurtmalar va admin panel. JWT autentifikatsiya, qidiruv va kategoriya filtri bilan.',
    tags: ['NestJS', 'Prisma', 'PostgreSQL', 'React', 'TypeScript', 'Tailwind CSS'],
    github: null,
    live: 'https://shop.edunex.uz',
    images: [
      `${import.meta.env.BASE_URL}screenshots/project5/img1.png`,
      `${import.meta.env.BASE_URL}screenshots/project5/img2.png`,
      `${import.meta.env.BASE_URL}screenshots/project5/img3.png`,
    ],
  },
  {
    title: 'Real-Time Chat App',
    desc: 'Socket.io asosida qurilgan real vaqtli chat ilovasi. Guruhli xonalar, xususiy xabarlar, emoji va jonli onlayn holat ko\'rsatkichi. JWT autentifikatsiya bilan.',
    tags: ['Node.js', 'Socket.io', 'React', 'TypeScript', 'MongoDB'],
    github: null,
    live: 'https://chat.edunex.uz',
    gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
    icon: '💬',
  },
]

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.label}>// projects</span>
          <h2 className={styles.title}>Loyihalar</h2>
          <p className={styles.subtitle}>Qurgan eng yaxshi ishlarimdan ba'zilari</p>
        </div>

        <div className={styles.grid}>
          {projects.map((project, i) => (
            project.images
              ? <ImageCard key={i} {...project} />
              : <GradientCard key={i} {...project} />
          ))}
        </div>

        <div className={styles.more}>
          <a href="https://github.com/CodeMasterKR" target="_blank" rel="noreferrer" className={styles.moreBtn}>
            GitHub'da ko'proq
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  )
}

function ImageCard({ title, desc, tags, github, live, images }) {
  const [current, setCurrent] = useState(0)
  const [hovered, setHovered] = useState(false)

  const prev = (e) => {
    e.preventDefault()
    setCurrent(i => (i - 1 + images.length) % images.length)
  }
  const next = (e) => {
    e.preventDefault()
    setCurrent(i => (i + 1) % images.length)
  }

  return (
    <div
      className={styles.card}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={styles.carousel}>
        {/* Sliding images */}
        <div className={styles.carouselTrack} style={{ transform: `translateX(-${current * 100}%)` }}>
          {images.map((src, i) => (
            <img key={i} src={src} alt={`${title} ${i + 1}`} className={styles.carouselImg} />
          ))}
        </div>

        {/* Gradient overlay */}
        <div className={styles.carouselOverlay} />

        {/* Shine effect */}
        <div className={`${styles.shine} ${hovered ? styles.shineActive : ''}`} />

        {/* Nav arrows */}
        {images.length > 1 && (
          <>
            <button className={`${styles.carouselBtn} ${styles.carouselPrev}`} onClick={prev}>
              <ChevronLeft />
            </button>
            <button className={`${styles.carouselBtn} ${styles.carouselNext}`} onClick={next}>
              <ChevronRight />
            </button>
          </>
        )}

        {/* Dots */}
        {images.length > 1 && (
          <div className={styles.dots}>
            {images.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
                onClick={(e) => { e.preventDefault(); setCurrent(i) }}
              />
            ))}
          </div>
        )}

        {/* Links */}
        <div className={styles.carouselLinks}>
          {github && (
            <a href={github} target="_blank" rel="noreferrer" className={styles.thumbBtn}>
              <GitHubIcon /> Code
            </a>
          )}
          {live && (
            <a href={live} target="_blank" rel="noreferrer" className={styles.thumbBtn}>
              <ExternalIcon /> Live
            </a>
          )}
        </div>
      </div>

      <div className={styles.body}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDesc}>{desc}</p>
        <div className={styles.cardFooter}>
          <div className={styles.tags}>
            {tags.map(tag => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
          <div className={styles.cardLinks}>
            {github && (
              <a href={github} target="_blank" rel="noreferrer" className={styles.cardLinkBtn}>
                <GitHubIcon /> Code
              </a>
            )}
            {live && (
              <a href={live} target="_blank" rel="noreferrer" className={styles.cardLinkBtn}>
                <ExternalIcon /> Live
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function GradientCard({ title, desc, tags, github, live, gradient, icon }) {
  return (
    <div className={styles.card}>
      <div className={styles.thumb} style={{ background: gradient }}>
        <div className={styles.thumbOverlay} />
        <span className={styles.thumbIcon}>{icon}</span>
        <div className={styles.thumbLinks}>
          {github && (
            <a href={github} target="_blank" rel="noreferrer" className={styles.thumbBtn}>
              <GitHubIcon /> Code
            </a>
          )}
          {live && (
            <a href={live} target="_blank" rel="noreferrer" className={styles.thumbBtn}>
              <ExternalIcon /> Live
            </a>
          )}
        </div>
      </div>

      <div className={styles.body}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDesc}>{desc}</p>
        <div className={styles.cardFooter}>
          <div className={styles.tags}>
            {tags.map(tag => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>
          <div className={styles.cardLinks}>
            {github && (
              <a href={github} target="_blank" rel="noreferrer" className={styles.cardLinkBtn}>
                <GitHubIcon /> Code
              </a>
            )}
            {live && (
              <a href={live} target="_blank" rel="noreferrer" className={styles.cardLinkBtn}>
                <ExternalIcon /> Live
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function ChevronLeft() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="15 18 9 12 15 6" />
    </svg>
  )
}

function ChevronRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}
