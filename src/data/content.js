// All portfolio content lives here. Source: APM_Ritu_Final.pdf.
// Leave a link as '' to hide it. Fill in PLACEHOLDER values before going live.

export const profile = {
  name: 'Ritu Jangid',
  location: 'Jaipur, Rajasthan',
  email: 'ritujangid8955@gmail.com',
  phone: '+91 8955706265',
  phoneHref: 'tel:+918955706265',
  resume: '/resume/Ritu_Jangid_Resume.pdf',
  // PLACEHOLDER: add your real URLs. Empty strings hide the link.
  linkedin: '',
  github: '',
}

export const nav = [
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Case studies' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export const about = {
  paragraphs: [
    'I have spent four years in graphic and product design, and I have seen how a product gets made from the inside: customer brief, concept, 3D model, prototype, machine-ready file, finished item.',
    'That background gives me a clear sense of what is feasible to build. I am now moving into product management, where I can focus on user problems, trade-offs and outcomes we can measure. I am especially keen to build AI-powered products with generative AI and prompt engineering.',
  ],
  strengths: [
    { title: 'Feasibility sense', body: 'I know what it takes to turn a design into something manufacturable, so I weigh aesthetics, cost, material and production early.' },
    { title: 'User-first thinking', body: 'Discovery, user research, competitor analysis and user stories shape the problem before any solution is chosen.' },
    { title: 'Measurable outcomes', body: 'I prioritise with RICE, MoSCoW and ICE, and define success with funnel, engagement and retention metrics.' },
  ],
}

export const caseStudies = [
  {
    id: 'whatsapp',
    title: 'WhatsApp: AI catch-up summaries for busy group chats',
    year: '2026',
    summary: 'Users with large unread group chats miss key updates.',
    approach:
      'Proposed an opt-in, privacy-first AI summary feature with a feedback prompt, scoped as an MVP using RICE.',
    metrics: ['25% adoption among eligible users', '80% helpful-rating', '20% reduction in unread backlog', '2% lift in 30-day retention'],
    link: '', // PLACEHOLDER: full case study URL
  },
  {
    id: 'zomato',
    title: 'Zomato: reducing cart drop-off and improving delivery ETA trust',
    year: '2026',
    summary: 'People leave between discovery and payment, and unclear delivery times erode trust.',
    approach:
      'Mapped the discovery-to-payment funnel, found the drop-off points, and proposed a transparent ETA, smart reorder and personalised recommendations. Planned an A/B test on the ETA display.',
    metrics: ['12% lower cart abandonment', '6% higher order conversion', '90% ETA accuracy within 5 minutes', '10% higher repeat-order rate'],
    link: '',
  },
  {
    id: 'uber',
    title: 'Uber: reducing rider cancellations and wait-time uncertainty',
    year: '2026',
    summary: 'Riders cancel after booking when they are unsure how long the wait will be.',
    approach:
      'Analysed post-booking cancellations and proposed live driver-arrival confidence, proactive delay updates and a pre-cancel nudge. Built the KPI tree and prioritised with ICE.',
    metrics: ['15% lower rider cancellation rate', '5% higher ride completion rate', '10% faster driver acceptance', 'CSAT of 4.5 or above'],
    link: '',
  },
]

export const experience = [
  {
    company: 'Marble Craze',
    role: 'Product Designer',
    period: '2026',
    points: [
      'Owned product development from concept to production, translating customer needs and design requirements into manufacturable, market-ready products.',
      'Led new product development (NPD): ideation, 3D modelling, prototyping and iteration, balancing aesthetics, cost, material and production feasibility.',
      'Coordinated with production teams and managed timelines so designs moved smoothly from approval to execution.',
    ],
  },
  {
    company: 'Confetti',
    role: 'Production Designer',
    period: '2025',
    points: [
      'Managed customised gift and lifestyle product requirements end to end, coordinating creative and production execution against customer specifications.',
      'Converted customer briefs into production-ready files and outputs, reducing back-and-forth between design and production teams.',
      'Worked closely with production to resolve design-to-manufacturing constraints and keep orders on track.',
    ],
  },
  {
    company: 'igp.com',
    role: 'Graphic Designer',
    period: '2023 to 2024',
    points: [
      'Designed customised and personalised products at scale based on customer requirements, with a focus on accuracy and visual quality.',
      'Contributed to new product development for gift articles, delivering production-ready design execution from brief to final output.',
      'Worked hands-on with UV printing, laser-cutting/engraving workflows and 3D machine operations, designing files specifically for machine output.',
    ],
  },
]

export const education = [
  { title: 'Product Management Program', place: 'CareerVeda', year: '2026' },
  { title: 'Graduation', place: 'Rajasthan University', year: '2024' },
]

export const skillGroups = [
  {
    title: 'Product management',
    items: ['Product discovery', 'Problem identification', 'Product strategy', 'Roadmap', 'PRD', 'User stories', 'Acceptance criteria', 'Backlog management', 'Prioritisation (RICE, MoSCoW)', 'User research', 'Competitor analysis', 'Agile and Scrum', 'Sprint planning'],
  },
  {
    title: 'Analytics and AI',
    items: ['KPI trees', 'Funnel analysis', 'Engagement and retention analysis', 'A/B testing fundamentals', 'Generative AI', 'Prompt engineering'],
  },
  {
    title: 'Design and technical',
    items: ['Visual design', 'Packaging design', 'UI and UX', '3D modelling and printing', 'Laser and UV machine file design', 'New product development'],
  },
]

export const tools = [
  'Jira', 'Confluence', 'Notion', 'Figma', 'Miro', 'Google Analytics', 'Git and GitHub', 'Excel', 'Google Sheets', 'ChatGPT',
  'Photoshop', 'Illustrator', 'CorelDRAW', 'Canva', 'Premiere Pro', 'Bambu Lab 3D printing',
]
