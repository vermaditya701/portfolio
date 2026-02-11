export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  github?: string;
  live?: string;
  image?: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: 0,
    title: 'Cyber Threat Intelligence Dashboard',
    description:
      'Real-time SOC-style dashboard for network monitoring and threat detection with URL scanning integration.',
    longDescription:
      'Built a full-featured Cyber Threat Intelligence Dashboard inspired by real-world Security Operations Center (SOC) environments. The system enables real-time threat log monitoring, attack type distribution analysis, blocked vs allowed traffic insights, and interactive system log filtering. Integrated VirusTotal API for URL malware scanning and implemented CSV export functionality for log analysis. Designed using a dark, security-focused UI to simulate professional cybersecurity monitoring tools.',
    technologies: [
      'Next.js',
      'React',
      'Tailwind CSS',
      'JavaScript',
      'Data Visualization',
      'VirusTotal API'
    ],
    github: 'https://github.com/vermaditya701/CyberThreat-Intelligence-Dashboard',
    tags: ['Cybersecurity', 'Threat Intelligence', 'Dashboard'],
  },
  {
    id: 1,
    title: 'Global Space Exploration Analytics Dashboard',
    description:
      'Interactive Power BI dashboard analyzing 25 years of global space mission data (2000–2025).',
    longDescription:
      'Designed and developed an advanced Power BI dashboard to analyze global space missions from 2000 to 2025. The dashboard provides insights into mission frequency, country-wise performance, budget trends, mission duration, technology classification, and success rates. Implemented interactive filters, KPI cards, scatter plots, and country-level drilldowns to enhance user-driven exploration. Focused on data storytelling and clean UI design to present complex analytics in an intuitive format.',
    technologies: [
      'Power BI',
      'DAX',
      'Data Modeling',
      'Data Visualization',
      'Dashboard Design'
    ],
    github: 'https://github.com/vermaditya701/Space-Analytics-Dashboard',
    tags: ['Data Visualization', 'Dashboard', 'Analytics'],
  },
  {
    id: 2,
    title: 'India Educational Statistics Analysis (Python)',
    description:
      'Statistical data analysis project exploring literacy trends and educational disparities across Indian states.',
    longDescription:
      'Performed comprehensive data analysis on Indian educational statistics using Python. Applied descriptive statistics, hypothesis testing (independent t-test), and Chi-Square tests to examine literacy rates, gender differences, and urban-rural disparities. Built correlation matrices and regression models to uncover relationships between educational variables. Created multiple visualizations using Seaborn and Matplotlib to effectively communicate key insights.',
    technologies: [
      'Python',
      'Pandas',
      'Seaborn',
      'Matplotlib',
      'SciPy',
      'Statistical Analysis'
    ],
    github: 'https://github.com/vermaditya701/India-Educational-Statistics-python',
    tags: ['Data Analysis', 'Statistics', 'Python'],
  }
];
