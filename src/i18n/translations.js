// 3 tilli kontent lug'ati — UZ (default), EN, RU.
// Tuzilma har til uchun bir xil; komponentlar shu obyektdan o'qiydi.

export const SUPPORTED = ['uz', 'en', 'ru']
export const DEFAULT_LANG = 'uz'

export const LANG_LABELS = { uz: "O‘z", en: 'En', ru: 'Ру' }

export const translations = {
  // ─────────────────────────────── UZBEK ───────────────────────────────
  uz: {
    nav: { home: 'Asosiy', skills: "Ko‘nikmalar", projects: 'Loyihalar', contact: 'Aloqa', hire: 'Ishga olish' },
    hero: {
      badge: 'Ish uchun ochiqman',
      greet: 'Salom, men',
      name: 'Kamronbek',
      role: 'Fullstack Dasturchi',
      desc: '<strong>Nest.js</strong> va <strong>Next.js</strong> — mening asosiy qurollarim. Kichik loyihalardan tortib katta tizimlargacha qurib beraman. Kod yozish uchun emas, muammoni hal qilish uchun dasturlashdaman.',
      viewProjects: "Loyihalarni ko‘rish",
      contactMe: "Bog‘lanish",
    },
    skills: {
      label: '// skills',
      title: 'Texnologiyalar',
      subtitle: 'Ishlatadigan asosiy texnologiyalar va asboblar',
    },
    experience: {
      label: '// experience',
      title: 'Ish tajriba',
      educationTitle: "Ta'lim",
      languagesTitle: 'Tillar',
      work: [
        {
          company: 'Tenzor SOFT', role: 'Frontend Dasturchi', period: 'Yanvar 2026 — Hozir', current: true,
          projects: [
            { name: 'Luvi.uz', summary: 'Ijtimoiy platforma uchun real-time muloqot moduli', stack: ['Next.js', 'TypeScript', 'WebSocket', 'Jitsi'], points: [
              'WebSocket asosida to‘liq real-time chat tizimini qurdim: xabar statuslari, onlayn holat indikatori va uzilishlarda avtomatik qayta ulanish mexanizmi bilan.',
              'Jitsi SDK orqali video/audio qo‘ng‘iroq funksiyasini integratsiya qildim: media stream boshqaruvi va barqaror ulanish logikasi.',
            ] },
            { name: 'Security AI', summary: 'AI asosidagi xavfsizlik platformasi', stack: ['Next.js', 'TypeScript', 'Tailwind', 'SSE'], points: [
              'SSE asosida token-by-token oqib keladigan AI chat interfeysini ishlab chiqdim — javob kutish vaqtini sezilarli qisqartirib, foydalanuvchi tajribasini yaxshiladim.',
              'Suhbatlarni folderlar bo‘yicha tashkil etish, autentifikatsiya va avtorizatsiya modullarini mustaqil loyihaladim va joriy qildim.',
            ] },
            { name: 'Navoiy Azot', summary: '100+ sahifali korporativ CMMS/EAM tizimi', stack: ['React', 'TanStack Query', 'TypeScript', 'Tailwind CSS'], points: [
              'Ko‘p rolli RBAC tizimini qurdim: bo‘lim darajasidagi scope va default-deny prinsipiga asoslangan himoya modeli.',
              'Ko‘p bosqichli tasdiqlash workflow‘i, real-time bildirishnomalar va SLA eskalatsiya tizimini amalga oshirdim.',
            ] },
          ],
        },
        {
          company: 'Mstore', role: 'Fullstack Dasturchi', period: '2026 — Hozir', current: true,
          projects: [
            { name: 'Mstore', summary: 'Chakana savdo do‘konlari uchun real-time savdo nazorati platformasi', stack: ['React', 'NestJS', 'Prisma', 'PostgreSQL', 'WebSocket'], points: [
              'Real-time savdo monitoringi, mahsulot va inventar boshqaruvini ishlab chiqdim.',
              'Kassir anomaliyalarini aniqlash tizimini qurdim: shubhali tranzaksiyalar, chegirma suiiste‘moli va smena davomidagi nomuvofiqliklarni avtomatik aniqlaydigan qoidalar mexanizmi.',
              'Natija: platforma Toshkentdagi chakana do‘konda production‘da ishlamoqda, to‘lovli mijozlar bilan.',
            ] },
          ],
        },
        {
          company: 'London Education', role: 'Fullstack Dasturchi va Mentor', period: '2023 Mart — 2025 Dekabr', current: false,
          projects: [
            { name: 'EduNex', summary: 'O‘quv markazi uchun ichki boshqaruv tizimi va o‘quv platformasi', stack: ['React', 'NestJS', 'Prisma', 'PostgreSQL'], points: [
              'O‘quv jarayonini boshqarish tizimini full-stack ishlab chiqdim: guruhlar, davomat, to‘lovlar va o‘quvchilar monitoringi.',
              '6 rol uchun (Direktor, Manager, Admin, Teacher, Student, Developer) granular RBAC arxitekturasini loyihaladim. Tizimni keyinchalik multi-tenant CRM/LMS platformasiga aylantirdim: har bir o‘quv markaz ma‘lumotlari izolyatsiya qilingan holda bitta tizimda ishlaydi.',
              'Natija: hozirda 3 ta o‘quv markaz va 1200+ faol foydalanuvchi platformadan kundalik foydalanmoqda.',
            ] },
          ],
        },
      ],
      education: [
        { institution: "O‘zbekiston Milliy Pedagogika Universiteti", degree: 'Matematika va Informatika', period: '2021 — 2025', type: 'Bakalavr' },
      ],
      languages: [
        { name: "O‘zbek", level: 'Ona tili', value: 100 },
        { name: 'Ingliz', level: 'B2 — Upper Intermediate', value: 75 },
      ],
    },
    projects: {
      label: '// projects',
      title: 'Loyihalar',
      subtitle: "Qurgan eng yaxshi ishlarimdan ba'zilari",
      more: "GitHub'da ko‘proq",
      items: [
        { title: "EduNex — O‘quv Markaz Tizimi", desc: "O‘quv markazini to‘liq tizimlashtirish uchun multi-tenant CRM/LMS platforma. Director, Manager, Admin, Teacher va Studentlar uchun alohida Telegram bot va web panel. Hozirda 3 ta o‘quv markaz va 1200+ faol foydalanuvchi ishlatmoqda." },
        { title: 'Intizom — Productivity App', desc: "Odatlar, vazifalar, maqsadlar va moliyani kuzatuvchi to‘liq platforma. Obuna tizimi, admin panel va analytics bilan. O‘zini rivojlantirmoqchi bo‘lgan foydalanuvchilar uchun yaratilgan." },
        { title: 'Ustoz Support — AI Yordamchi', desc: "O‘qituvchilar uchun AI asosida taqdimot, test, o‘yin va amaliyotlar yaratuvchi zamonaviy platforma. Google autentifikatsiya va obuna tizimi bilan." },
        { title: 'Mstore — Savdo Nazorati Platformasi', desc: "Chakana do‘konlar uchun real-time savdo monitoringi, mahsulot va inventar boshqaruvi. Kassir anomaliyalarini aniqlash tizimi: shubhali tranzaksiyalar va chegirma suiiste‘molini avtomatik aniqlaydi. Toshkentdagi do‘konda production‘da ishlamoqda." },
        { title: 'ShopUz — E-Commerce Platforma', desc: "To‘liq funksional onlayn do‘kon. Mahsulot katalogi, savat, buyurtmalar va admin panel. JWT autentifikatsiya, qidiruv va kategoriya filtri bilan." },
        { title: 'Luvi Uz', desc: "Websocket qismi Stomp orqali qilingan. Video va Audio call qismida esa Jitsi kutubxonasi o‘zimizni serverga qo‘yilgan va keyin mos interface berilgan." },
      ],
    },
    contact: {
      label: '// contact',
      title: "Bog‘lanish",
      subtitle: "Loyiha yoki hamkorlik bo‘yicha murojaat qiling",
      infoTitle: 'Kontakt',
      infoText: "Hozirda yangi loyihalarga ochiqman. Quyidagi manzillar orqali bog‘laning.",
      phone: 'Telefon',
      nameLabel: 'Ismingiz',
      messageLabel: 'Xabar',
      messagePlaceholder: 'Sizning loyihangiz haqida qisqacha...',
      send: 'Xabar yuborish',
      sending: 'Yuborilmoqda...',
      sent: '✓ Xabar yuborildi!',
    },
    footer: { role: 'Fullstack Dasturchi.' },
  },

  // ─────────────────────────────── ENGLISH ───────────────────────────────
  en: {
    nav: { home: 'Home', skills: 'Skills', projects: 'Projects', contact: 'Contact', hire: 'Hire Me' },
    hero: {
      badge: 'Available for work',
      greet: "Hi, I'm",
      name: 'Kamronbek',
      role: 'Fullstack Developer',
      desc: '<strong>Nest.js</strong> and <strong>Next.js</strong> are my main tools. I build everything from small projects to large systems. I code not for the sake of writing code, but to solve problems.',
      viewProjects: 'View Projects',
      contactMe: 'Contact Me',
    },
    skills: {
      label: '// skills',
      title: 'Technologies',
      subtitle: 'Core technologies and tools I work with',
    },
    experience: {
      label: '// experience',
      title: 'Experience',
      educationTitle: 'Education',
      languagesTitle: 'Languages',
      work: [
        {
          company: 'Tenzor SOFT', role: 'Frontend Developer', period: 'January 2026 — Present', current: true,
          projects: [
            { name: 'Luvi.uz', summary: 'Real-time communication module for a social platform', stack: ['Next.js', 'TypeScript', 'WebSocket', 'Jitsi'], points: [
              'Built a full real-time chat system based on WebSocket: message statuses, online presence indicators, and automatic reconnection on network interruptions.',
              'Integrated video/audio calling via the Jitsi SDK: media stream management and stable connection handling.',
            ] },
            { name: 'Security AI', summary: 'AI-powered security platform', stack: ['Next.js', 'TypeScript', 'Tailwind', 'SSE'], points: [
              'Developed a token-by-token streaming AI chat interface using SSE — significantly reducing perceived response latency and improving user experience.',
              'Independently designed and implemented conversation folder organization, authentication, and authorization modules.',
            ] },
            { name: 'Navoiy Azot', summary: 'Enterprise CMMS/EAM system (100+ pages)', stack: ['React', 'TanStack Query', 'TypeScript', 'Tailwind CSS'], points: [
              'Built a multi-role RBAC system with department-level scoping and a default-deny security model.',
              'Implemented multi-step approval workflows, real-time notifications, and an SLA escalation system.',
            ] },
          ],
        },
        {
          company: 'Mstore', role: 'Fullstack Developer', period: '2026 — Present', current: true,
          projects: [
            { name: 'Mstore', summary: 'Real-time sales monitoring platform for retail stores', stack: ['React', 'NestJS', 'Prisma', 'PostgreSQL', 'WebSocket'], points: [
              'Built real-time sales monitoring, product and inventory management.',
              'Developed a cashier anomaly detection system: a rules engine that automatically flags suspicious transactions, discount abuse, and shift-level inconsistencies.',
              'Result: the platform runs in production at a retail store in Tashkent with paying customers.',
            ] },
          ],
        },
        {
          company: 'London Education', role: 'Fullstack Developer & Mentor', period: 'March 2023 — December 2025', current: false,
          projects: [
            { name: 'EduNex', summary: 'Internal management system and learning platform for an education center', stack: ['React', 'NestJS', 'Prisma', 'PostgreSQL'], points: [
              'Developed a full-stack learning management system: groups, attendance, payments, and student progress monitoring.',
              'Designed a granular RBAC architecture for 6 roles (Director, Manager, Admin, Teacher, Student, Developer). Later evolved the system into a multi-tenant CRM/LMS platform where each education center operates with fully isolated data within a single system.',
              'Result: currently used daily by 3 education centers and 1,200+ active users.',
            ] },
          ],
        },
      ],
      education: [
        { institution: 'Uzbekistan National Pedagogical University', degree: 'Mathematics and Computer Science', period: '2021 — 2025', type: 'Bachelor' },
      ],
      languages: [
        { name: 'Uzbek', level: 'Native', value: 100 },
        { name: 'English', level: 'B2 — Upper Intermediate', value: 75 },
      ],
    },
    projects: {
      label: '// projects',
      title: 'Projects',
      subtitle: "Some of the best work I've built",
      more: 'More on GitHub',
      items: [
        { title: 'EduNex — Education Center System', desc: 'A multi-tenant CRM/LMS platform to fully digitize education centers. Separate Telegram bots and web panels for Director, Manager, Admin, Teacher and Students. Currently used by 3 education centers and 1,200+ active users.' },
        { title: 'Intizom — Productivity App', desc: 'A complete platform for tracking habits, tasks, goals and finances. With a subscription system, admin panel and analytics. Built for users who want to grow themselves.' },
        { title: 'Ustoz Support — AI Assistant', desc: 'A modern platform that creates AI-based presentations, tests, games and exercises for teachers. With Google authentication and a subscription system.' },
        { title: 'Mstore — Sales Monitoring Platform', desc: 'Real-time sales monitoring, product and inventory management for retail stores. A cashier anomaly detection system automatically flags suspicious transactions and discount abuse. Runs in production at a retail store in Tashkent.' },
        { title: 'ShopUz — E-Commerce Platform', desc: 'A fully functional online store. Product catalog, cart, orders and admin panel. With JWT authentication, search and category filtering.' },
        { title: 'Luvi Uz', desc: 'The WebSocket layer is built with STOMP. For video and audio calls, the Jitsi library is self-hosted on our own server with a custom interface.' },
      ],
    },
    contact: {
      label: '// contact',
      title: 'Contact',
      subtitle: 'Get in touch about a project or collaboration',
      infoTitle: 'Get in touch',
      infoText: "I'm currently open to new projects. Reach me through the channels below.",
      phone: 'Phone',
      nameLabel: 'Your name',
      messageLabel: 'Message',
      messagePlaceholder: 'A short note about your project...',
      send: 'Send message',
      sending: 'Sending...',
      sent: '✓ Message sent!',
    },
    footer: { role: 'Fullstack Developer.' },
  },

  // ─────────────────────────────── RUSSIAN ───────────────────────────────
  ru: {
    nav: { home: 'Главная', skills: 'Навыки', projects: 'Проекты', contact: 'Контакты', hire: 'Нанять' },
    hero: {
      badge: 'Открыт для работы',
      greet: 'Привет, я',
      name: 'Камронбек',
      role: 'Fullstack разработчик',
      desc: '<strong>Nest.js</strong> и <strong>Next.js</strong> — мои основные инструменты. Создаю всё: от небольших проектов до крупных систем. Программирую не ради кода, а чтобы решать задачи.',
      viewProjects: 'Смотреть проекты',
      contactMe: 'Связаться',
    },
    skills: {
      label: '// skills',
      title: 'Технологии',
      subtitle: 'Основные технологии и инструменты, с которыми я работаю',
    },
    experience: {
      label: '// experience',
      title: 'Опыт работы',
      educationTitle: 'Образование',
      languagesTitle: 'Языки',
      work: [
        {
          company: 'Tenzor SOFT', role: 'Frontend разработчик', period: 'Январь 2026 — Настоящее время', current: true,
          projects: [
            { name: 'Luvi.uz', summary: 'Модуль real-time общения для социальной платформы', stack: ['Next.js', 'TypeScript', 'WebSocket', 'Jitsi'], points: [
              'Построил полноценную систему real-time чата на WebSocket: статусы сообщений, индикатор онлайн-присутствия и автоматическое переподключение при обрывах сети.',
              'Интегрировал видео- и аудиозвонки через Jitsi SDK: управление медиапотоками и стабильность соединения.',
            ] },
            { name: 'Security AI', summary: 'Платформа безопасности на базе ИИ', stack: ['Next.js', 'TypeScript', 'Tailwind', 'SSE'], points: [
              'Разработал ИИ-чат с потоковой выдачей токен за токеном на SSE — заметно сократил ощущаемую задержку ответа и улучшил пользовательский опыт.',
              'Самостоятельно спроектировал и внедрил организацию диалогов по папкам, модули аутентификации и авторизации.',
            ] },
            { name: 'Navoiy Azot', summary: 'Корпоративная CMMS/EAM система (100+ страниц)', stack: ['React', 'TanStack Query', 'TypeScript', 'Tailwind CSS'], points: [
              'Построил многоролевую систему RBAC со scope на уровне отделов и моделью защиты default-deny.',
              'Реализовал многоэтапный workflow согласования, real-time уведомления и систему эскалации SLA.',
            ] },
          ],
        },
        {
          company: 'Mstore', role: 'Fullstack разработчик', period: '2026 — Настоящее время', current: true,
          projects: [
            { name: 'Mstore', summary: 'Платформа real-time мониторинга продаж для розничных магазинов', stack: ['React', 'NestJS', 'Prisma', 'PostgreSQL', 'WebSocket'], points: [
              'Реализовал real-time мониторинг продаж, управление товарами и складом.',
              'Разработал систему обнаружения аномалий кассиров: движок правил автоматически выявляет подозрительные транзакции, злоупотребление скидками и несоответствия по сменам.',
              'Результат: платформа работает в production в розничном магазине в Ташкенте с платящими клиентами.',
            ] },
          ],
        },
        {
          company: 'London Education', role: 'Fullstack разработчик и ментор', period: 'Март 2023 — Декабрь 2025', current: false,
          projects: [
            { name: 'EduNex', summary: 'Внутренняя система управления и учебная платформа для учебного центра', stack: ['React', 'NestJS', 'Prisma', 'PostgreSQL'], points: [
              'Разработал full-stack систему управления обучением: группы, посещаемость, платежи и мониторинг прогресса студентов.',
              'Спроектировал гранулярную RBAC-архитектуру для 6 ролей (Директор, Менеджер, Админ, Учитель, Студент, Разработчик). Позже развил систему в multi-tenant CRM/LMS платформу, где данные каждого учебного центра полностью изолированы в единой системе.',
              'Результат: сейчас платформой ежедневно пользуются 3 учебных центра и 1200+ активных пользователей.',
            ] },
          ],
        },
      ],
      education: [
        { institution: 'Национальный педагогический университет Узбекистана', degree: 'Математика и информатика', period: '2021 — 2025', type: 'Бакалавр' },
      ],
      languages: [
        { name: 'Узбекский', level: 'Родной язык', value: 100 },
        { name: 'Английский', level: 'B2 — Upper Intermediate', value: 75 },
      ],
    },
    projects: {
      label: '// projects',
      title: 'Проекты',
      subtitle: 'Некоторые из моих лучших работ',
      more: 'Больше на GitHub',
      items: [
        { title: 'EduNex — Система учебного центра', desc: 'Multi-tenant CRM/LMS платформа для полной цифровизации учебных центров. Отдельные Telegram-боты и веб-панели для Директора, Менеджера, Админа, Учителя и Студентов. Сейчас используется 3 учебными центрами и 1200+ активными пользователями.' },
        { title: 'Intizom — Приложение продуктивности', desc: 'Полноценная платформа для отслеживания привычек, задач, целей и финансов. С системой подписки, админ-панелью и аналитикой. Создано для тех, кто хочет развиваться.' },
        { title: 'Ustoz Support — ИИ-помощник', desc: 'Современная платформа, которая создаёт презентации, тесты, игры и упражнения для учителей на базе ИИ. С аутентификацией Google и системой подписки.' },
        { title: 'Mstore — Платформа мониторинга продаж', desc: 'Real-time мониторинг продаж, управление товарами и складом для розничных магазинов. Система обнаружения аномалий кассиров автоматически выявляет подозрительные транзакции и злоупотребление скидками. Работает в production в магазине в Ташкенте.' },
        { title: 'ShopUz — E-Commerce платформа', desc: 'Полнофункциональный интернет-магазин. Каталог товаров, корзина, заказы и админ-панель. С JWT-аутентификацией, поиском и фильтром по категориям.' },
        { title: 'Luvi Uz', desc: 'WebSocket-часть реализована через STOMP. Для видео- и аудиозвонков библиотека Jitsi развёрнута на собственном сервере с кастомным интерфейсом.' },
      ],
    },
    contact: {
      label: '// contact',
      title: 'Контакты',
      subtitle: 'Свяжитесь по проекту или сотрудничеству',
      infoTitle: 'Связаться',
      infoText: 'Сейчас я открыт для новых проектов. Свяжитесь со мной по каналам ниже.',
      phone: 'Телефон',
      nameLabel: 'Ваше имя',
      messageLabel: 'Сообщение',
      messagePlaceholder: 'Кратко о вашем проекте...',
      send: 'Отправить сообщение',
      sending: 'Отправка...',
      sent: '✓ Сообщение отправлено!',
    },
    footer: { role: 'Fullstack разработчик.' },
  },
}
