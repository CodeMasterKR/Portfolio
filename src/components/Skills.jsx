import styles from './Skills.module.css'

const categories = [
  {
    title: 'Backend',
    color: '#50fa7b',
    icon: '⚙️',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Express.js', level: 88 },
      { name: 'REST API', level: 92 },
      { name: 'PostgreSQL', level: 80 },
      { name: 'MongoDB', level: 82 },
      { name: 'Redis', level: 70 },
    ],
  },
  {
    title: 'Frontend',
    color: '#6c63ff',
    icon: '🎨',
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'JavaScript', level: 92 },
      { name: 'TypeScript', level: 78 },
      { name: 'HTML / CSS', level: 88 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'Vite', level: 82 },
    ],
  },
  {
    title: 'Tools & DevOps',
    color: '#8be9fd',
    icon: '🛠️',
    skills: [
      { name: 'Git & GitHub', level: 90 },
      { name: 'Docker', level: 72 },
      { name: 'Linux', level: 75 },
      { name: 'Nginx', level: 68 },
      { name: 'Postman', level: 88 },
      { name: 'VS Code', level: 95 },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <span className={styles.label}>// skills</span>
          <h2 className={styles.title}>Texnologiyalar</h2>
          <p className={styles.subtitle}>
            Ishlatadigan asosiy texnologiyalar va asboblar
          </p>
        </div>

        <div className={styles.grid}>
          {categories.map(cat => (
            <SkillCard key={cat.title} {...cat} />
          ))}
        </div>

        <div className={styles.extras}>
          {['JWT', 'Socket.io', 'GraphQL', 'Prisma', 'Jest', 'Webpack', 'Figma', 'CI/CD'].map(tag => (
            <span key={tag} className={styles.tag}>{tag}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

function SkillCard({ title, color, icon, skills }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <span className={styles.cardIcon}>{icon}</span>
        <h3 className={styles.cardTitle} style={{ color }}>{title}</h3>
      </div>
      <div className={styles.skillList}>
        {skills.map(skill => (
          <div key={skill.name} className={styles.skillItem}>
            <div className={styles.skillTop}>
              <span className={styles.skillName}>{skill.name}</span>
              <span className={styles.skillPercent} style={{ color }}>{skill.level}%</span>
            </div>
            <div className={styles.bar}>
              <div
                className={styles.barFill}
                style={{ '--w': `${skill.level}%`, '--c': color }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
