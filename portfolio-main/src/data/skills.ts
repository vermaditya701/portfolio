export interface Skill {
  category: string;
  items: string[];
}

export const skills: Skill[] = [
  {
    category: 'Frontend',
    items: [
      'HTML',
      'CSS',
      'JavaScript',
      'TypeScript',
      'React.js',
      'Next.js',
      'Tailwind CSS',
      
      
    ],
  },
  {
    category: 'Backend',
    items: [
      'Node.js',
      'Express.js',
      'Python',
      'REST APIs',
    
      'Firebase Functions'
    ],
  },
  {
    category: 'Databases',
    items: [
      'MongoDB',
      'MySQL',
      'PostgreSQL',
      'Firebase Firestore',
      'SQLite',
      'Redis'
    ],
  },
  {
    category: 'Tools & DevOps',
    items: [
      'Git & GitHub',
      'Docker',
      'CI/CD Pipelines',
      'Vercel',
      'Netlify',
      'VS Code',
      'npm / pnpm'
    ],
  },
  {
    category: 'Programming Languages',
    items: [
       'Python',
      'C++',
      'JavaScript',
      'Java',
      'TypeScript',
      'SQL'
    ],
  },
];
