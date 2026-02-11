export interface Skill {
  category: string;
  items: string[];
}

export const skills: Skill[] = [
  {
    category: 'Data Science & Analytics',
    items: [
      'Data Analysis',
      'Statistical Analysis',
      'Hypothesis Testing',
      'Exploratory Data Analysis (EDA)',
      'Data Cleaning & Preprocessing',
      'Predictive Modeling'
    ],
  },
  {
    category: 'Programming & Libraries',
    items: [
      'Python',
      'Pandas',
      'NumPy',
      'Matplotlib',
      'Seaborn',
      'SciPy',
      'SQL'
    ],
  },
  {
    category: 'Data Visualization & BI Tools',
    items: [
      'Power BI',
      'DAX',
      'Dashboard Design',
      'Microsoft Excel',
      'Power Pivot'
    ],
  },
  {
    category: 'Web & Dashboard Technologies',
    items: [
      'React',
      'Next.js',
      'JavaScript',
      'Tailwind CSS',
      'Data Visualization in Web Apps'
    ],
  },
  {
    category: 'Security & Systems',
    items: [
      'Cyber Threat Intelligence Concepts',
      'Network Monitoring Basics',
      'API Integration (VirusTotal)',
      'Git & GitHub'
    ],
  },
];
