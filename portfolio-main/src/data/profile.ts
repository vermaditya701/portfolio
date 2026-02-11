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
  name: 'Anjali Thakur',
  title: 'Full Stack Web Developer',
  bio: 'A passionate Full Stack Developer with expertise in modern web technologies. I craft elegant, scalable, and user-centered digital experiences. With a strong foundation in both frontend and backend development, I bridge the gap between beautiful design and powerful functionality. Currently pursuing B.Tech in Computer Science at Lovely Professional University.',
  email: 'thakurssanjali@gmail.com',
  phone: '+91-9149404876',
  linkedin: 'https://www.linkedin.com/in/thakurssanjali',
  github: 'https://github.com/thakurssanjali',
};

export const education: Education[] = [
  {
    id: 1,
    institution: 'Lovely Professional University',
    location: 'Phagwara, Punjab',
    degree: 'Bachelor of Technology - Computer Science and Engineering',
    grade: 'CGPA: 7.28',
    period: 'Aug 2023 – Present',
    description: 'Pursuing B.Tech in CSE with focus on Full Stack Development, Data Structures, and Cloud Computing.',
  },
  {
    id: 2,
    institution: 'S.P. Smart School',
    location: 'Jammu, Jammu & Kashmir',
    degree: 'Intermediate (12th)',
    grade: 'Percentage: 92%',
    period: 'Apr 2022 – Mar 2023',
  },
  {
    id: 3,
    institution: 'Raja New Light School',
    location: 'Sunderbani, Jammu & Kashmir',
    degree: 'Matriculation (10th)',
    grade: 'Percentage: 91%',
    period: 'Apr 2019 – Mar 2020',
  },
];

export const certificates: Certificate[] = [
  {
    id: 1,
    title: 'Cloud Computing',
    issuer: 'NPTEL - IIT Kharagpur',
    date: 'Jan - Apr 2025',
    description: 'Elite certification with 63% consolidated score. 12-week course covering cloud architectures, virtualization, and deployment models.',
    credentialUrl: 'https://drive.google.com/file/d/12vhlm11vNiZF4W-R72fv9n1m3FL0_Eg5/view?usp=drive_link',
  },
  {
    id: 2,
    title: 'Data Structure and Algorithm using Java',
    issuer: 'Cipher Schools',
    date: 'Jun - Jul 2025',
    description: '70 hours of intensive training covering Java fundamentals, OOP, arrays, linked lists, stacks, queues, and tree data structures.',
    credentialUrl: 'https://drive.google.com/file/d/1goy8OZJeoFfB8-T1sdNWrCLwFY-uXsyM/view?usp=sharing',
  },
  {
    id: 3,
    title: 'Computer Communications Specialization',
    issuer: 'Coursera - University of Colorado',
    date: 'Dec 2024',
    description: '4-course specialization in network architectures, protocol design, TCP/IP programming, and advanced networking concepts.',
    credentialUrl: 'https://drive.google.com/file/d/1Zk-ke3UuXYrHwh_BKldI-f1LGV4QqB-0/view?usp=sharing',
  },
  {
    id: 4,
    title: 'Build Generative AI Apps with No-Code Tools',
    issuer: 'Infosys Springboard',
    date: 'Aug 2025',
    description: 'Course completion certificate for building GenAI applications and solutions using no-code tools.',
    credentialUrl: 'https://drive.google.com/file/d/1f0Gp94dRt5t7U-FYJvgJPdy-de8f8Skv/view?usp=sharing',
  },
];
