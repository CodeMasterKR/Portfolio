import styles from './Skills.module.css'
import {
  SiNodedotjs, SiExpress, SiPostgresql, SiMongodb, SiNestjs,
  SiReact, SiJavascript, SiTypescript, SiHtml5, SiTailwindcss, SiVite,
  SiGit, SiGithub, SiDocker, SiLinux, SiNginx, SiSwagger,
  SiJsonwebtokens, SiSocketdotio, SiGraphql, SiPrisma, SiJest, SiWebpack, SiFigma, SiPostman,
} from 'react-icons/si'
import { TbApi } from 'react-icons/tb'

const categories = [
  {
    title: 'Backend',
    color: '#50fa7b',
    skills: [
      { name: 'Node.js',    icon: SiNodedotjs,  color: '#539e43' },
      { name: 'Express.js', icon: SiExpress,    color: '#eeeeee' },
      { name: 'REST API',   icon: TbApi,        color: '#ff6b6b' },
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791' },
      { name: 'MongoDB',    icon: SiMongodb,    color: '#47a248' },
      { name: 'NestJS',     icon: SiNestjs,     color: '#e0234e' },
    ],
  },
  {
    title: 'Frontend',
    color: '#6c63ff',
    skills: [
      { name: 'React.js',     icon: SiReact,       color: '#61dafb' },
      { name: 'JavaScript',   icon: SiJavascript,  color: '#f7df1e' },
      { name: 'TypeScript',   icon: SiTypescript,  color: '#3178c6' },
      { name: 'HTML / CSS',   icon: SiHtml5,       color: '#e34f26' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38bdf8' },
      { name: 'Vite',         icon: SiVite,        color: '#a259ff' },
    ],
  },
  {
    title: 'Tools & DevOps',
    color: '#8be9fd',
    skills: [
      { name: 'Git',     icon: SiGit,    color: '#f05032' },
      { name: 'GitHub',  icon: SiGithub, color: '#e0e0e0' },
      { name: 'Docker',  icon: SiDocker, color: '#2496ed' },
      { name: 'Linux',   icon: SiLinux,  color: '#fcc624' },
      { name: 'Nginx',   icon: SiNginx,  color: '#009639' },
      { name: 'Swagger', icon: SiSwagger, color: '#85ea2d' },
    ],
  },
]

const extras = [
  { name: 'JWT',       icon: SiJsonwebtokens, color: '#d63aff' },
  { name: 'Socket.io', icon: SiSocketdotio,   color: '#e0e0e0' },
  { name: 'GraphQL',   icon: SiGraphql,       color: '#e10098' },
  { name: 'Prisma',    icon: SiPrisma,        color: '#5a67d8' },
  { name: 'Jest',      icon: SiJest,          color: '#c21325' },
  { name: 'Webpack',   icon: SiWebpack,       color: '#8dd6f9' },
  { name: 'Figma',     icon: SiFigma,         color: '#f24e1e' },
  { name: 'Postman',   icon: SiPostman,       color: '#ff6c37' },
]

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.label}>// skills</span>
          <h2 className={styles.title}>Texnologiyalar</h2>
          <p className={styles.subtitle}>Ishlatadigan asosiy texnologiyalar va asboblar</p>
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

        <div className={styles.extras}>
          <span className={styles.extrasLabel}>Shuningdek:</span>
          <div className={styles.extrasTags}>
            {extras.map(({ name, icon: Icon, color }) => (
              <span key={name} className={styles.extraTag} style={{ '--c': color }}>
                <Icon style={{ color }} className={styles.extraIcon} />
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
