import styles from './Skills.module.css'
import { useLang } from '../i18n/LanguageContext'
import {
  SiNodedotjs, SiExpress, SiPostgresql, SiMongodb, SiNestjs,
  SiReact, SiJavascript, SiTypescript, SiNextdotjs, SiTailwindcss, SiShadcnui,
  SiGit, SiDocker, SiLinux, SiNginx, SiSwagger,
  SiSocketdotio, SiGraphql, SiPrisma, SiReactquery, SiMui,
} from 'react-icons/si'
import { TbApi } from 'react-icons/tb'

const categories = [
  {
    title: 'Backend',
    color: '#50fa7b',
    skills: [
      { name: 'Node.js',    icon: SiNodedotjs,     color: '#539e43' },
      { name: 'NestJS',     icon: SiNestjs,        color: '#e0234e' },
      { name: 'Express.js', icon: SiExpress,       color: '#eeeeee' },
      { name: 'REST API',   icon: TbApi,           color: '#ff6b6b' },
      { name: 'GraphQL',    icon: SiGraphql,       color: '#e10098' },
      { name: 'WebSocket',  icon: SiSocketdotio,   color: '#e0e0e0' },
    ],
  },
  {
    title: 'Frontend',
    color: '#6c63ff',
    skills: [
      { name: 'Next.js',      icon: SiNextdotjs,   color: '#e0e0e0' },
      { name: 'React.js',     icon: SiReact,       color: '#61dafb' },
      { name: 'TypeScript',   icon: SiTypescript,  color: '#3178c6' },
      { name: 'JavaScript',   icon: SiJavascript,  color: '#f7df1e' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38bdf8' },
      { name: 'TanStack Query', icon: SiReactquery, color: '#ff4154' },
      { name: 'Shadcn',       icon: SiShadcnui,    color: '#e0e0e0' },
      { name: 'Material UI',  icon: SiMui,         color: '#007fff' },
    ],
  },
  {
    title: 'Database',
    color: '#ffb86c',
    skills: [
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
      { name: 'MongoDB',    icon: SiMongodb,    color: '#47a248' },
      { name: 'Prisma ORM', icon: SiPrisma,     color: '#5a67d8' },
    ],
  },
  {
    title: 'Tools',
    color: '#8be9fd',
    skills: [
      { name: 'Docker',  icon: SiDocker,  color: '#2496ed' },
      { name: 'Nginx',   icon: SiNginx,   color: '#009639' },
      { name: 'Linux',   icon: SiLinux,   color: '#fcc624' },
      { name: 'Git',     icon: SiGit,     color: '#f05032' },
      { name: 'Swagger', icon: SiSwagger, color: '#85ea2d' },
    ],
  },
]

export default function Skills() {
  const { t } = useLang()
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.label}>{t.skills.label}</span>
          <h2 className={styles.title}>{t.skills.title}</h2>
          <p className={styles.subtitle}>{t.skills.subtitle}</p>
        </div>

        <div className={styles.grid}>
          {categories.map(cat => (
            <div key={cat.title} className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.dot} style={{ background: cat.color }} />
                <h3 className={styles.cardTitle} style={{ color: cat.color }}>{cat.title}</h3>
              </div>
              <div className={styles.skillGrid}>
                {cat.skills.map(({ name, icon: Icon, color }) => (
                  <div key={name} className={styles.skillItem} style={{ '--c': color }}>
                    <div className={styles.iconWrap}>
                      <Icon className={styles.icon} style={{ color }} />
                    </div>
                    <span className={styles.skillName}>{name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
