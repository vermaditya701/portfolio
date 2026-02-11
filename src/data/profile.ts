// Profile data for About, Education, and Certifications sections

export interface About {
  name: string;
  title: string;
  bio: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
}

export interface Education {
  id: number;
  institution: string;
  location: string;
  degree: string;
  grade: string;
  period: string;
  description?: string;
}

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  description?: string;
}

export const about: About = {
  name: 'Aditya Verma',
  title: 'Data Science Student',
  bio: 'Passionate about Data Science and Analytics, with hands-on experience in Python, Pandas, statistical analysis, and data visualization tools such as Power BI and Excel. Interested in transforming raw data into actionable insights.. Currently pursuing B.Tech in Computer Science at Lovely Professional University.',
  email: 'vermaditya701@gmail.com',
  phone: '+91-9711602535',
  linkedin: 'https://www.linkedin.com/in/aditya-verma-400196292/',
  github: 'https://github.com/vermaditya701',
};

export const education: Education[] = [
  {
    id: 1,
    institution: 'Lovely Professional University',
    location: 'Phagwara, Punjab',
    degree: 'Bachelor of Technology - Computer Science and Engineering',
    grade: 'CGPA: 7.8',
    period: 'Aug 2023 – Present',
    description: 'Pursuing B.Tech in CSE with focus on Data Science, Data Structures, and Machine Learning.',
  },
  {
    id: 2,
    institution: 'Hope Hall Foundation School',
    location: 'Delhi',
    degree: 'Intermediate (12th)',
    grade: 'Percentage: 81.2%',
    period: '2022',
  },
  {
    id: 3,
    institution: 'Hope Hall Foundation School',
    location: 'Delhi',
    degree: 'Matriculation (10th)',
    grade: 'Percentage: 82.6%',
    period: '2020',
  },
];

export const certificates: Certificate[] = [
  {
    id: 1,
    title: 'Cloud Computing',
    issuer: 'NPTEL - IIT Kharagpur',
    date: 'Jan - Apr 2025',
    description: 'Elite certification with 53% consolidated score. 12-week course covering cloud architectures, virtualization, and deployment models.',
    credentialUrl: 'https://drive.google.com/file/d/1qdLTWcla9xhgK5KjFSy6boZY2qOmF2Cr/view?usp=sharing',
  },
  {
    id: 2,
    title: 'Responsive Web Design',
    issuer: 'FreeCodeCamp',
    date: '  Nov 2023',
    description: 'Completed the Responsive Web Design certification by freeCodeCamp, covering HTML5, CSS3, Flexbox, Grid, accessibility, and mobile-first design principles through hands-on projects.'
    ,
    credentialUrl: 'https://drive.google.com/file/d/1zI1tZx8-YgjukDR_XLdKJpRD32GScbYv/view?usp=sharing',
  },
  {
    id: 3,
    title: 'Computer Communications Specialization',
    issuer: 'Coursera - University of Colorado',
    date: 'Dec 2024',
    description: '4-course specialization in network architectures, protocol design, TCP/IP programming, and advanced networking concepts.',
    credentialUrl: 'https://drive.google.com/file/d/1vlh7lO3ZbPbS4HptZfxAHQBBUHFVM3io/view?usp=sharing',
  },
  {
    id: 4,
    title: 'Build Generative AI Apps with No-Code Tools',
    issuer: 'Infosys Springboard',
    date: 'Aug 2025',
    description: 'Course completion certificate for building GenAI applications and solutions using no-code tools.',
    credentialUrl: 'https://drive.google.com/file/d/1s_G9B4CgLSsIxj8z5V2A3eJaNYkxGG67/view?usp=sharing',
  },
];
