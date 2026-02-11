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
    title: 'Portfolio Website',
    description: 'A fully responsive personal portfolio built with React, TypeScript, Tailwind, and Framer Motion.',
    longDescription:
      'A modern developer portfolio showcasing projects, skills, and experience. Built with React, TypeScript, Tailwind CSS, and Framer Motion, featuring smooth animations, dark/light theme support, reusable components, and an elegant UI with strong attention to detail.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    github: 'https://github.com/thakurssanjali/portfolio',
    live: 'https://thakurssanjali.vercel.app',
    tags: ['Frontend', 'UI/UX', 'Portfolio'],
  },
  {
    id: 1,
    title: 'Bike Rental Management System',
    description: 'Full-stack bike rental platform with online bookings, payments, and an admin dashboard.',
    longDescription:
      'A complete bike rental management system built using React, Node.js, Express, and MongoDB. The platform allows users to browse bikes, make reservations, and complete secure payments via Card, UPI, and COD. It includes dual-role authentication (User/Admin), a damage reporting module, and real-time maintenance tracking. The admin dashboard enables efficient management of bikes, users, and repair workflows. Enhanced with dark/light themes and SSL-based security for safe encrypted communication.',
    technologies: [
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Tailwind CSS',
      'JWT Auth'
    ],
    github: 'https://github.com/thakurssanjali/velo-rapido',
    live: 'https://github.com/thakurssanjali/velo-rapido',
    tags: ['Full Stack', 'React', 'Node', 'Dashboard'],
  },
  {
    id: 2,
    title: 'Dice Game Simulator (Java Edition)',
    description: 'Interactive Java-based multiplayer dice game with a graphical user interface.',
    longDescription:
      'A desktop-based dice game developed using Java Swing, supporting multiple players with engaging, round-based gameplay. Implements core game mechanics including real-time tie detection, win tracking, randomized dice roll logic, and multi-round support. The project features a clean and intuitive GUI for a smooth user experience and is packaged as a runnable .jar file for seamless cross-platform execution without additional setup.',
    technologies: ['Java', 'Swing', 'OOP', 'JAR Packaging'],
    github: 'https://github.com/thakurssanjali/DiceGameSimulator',
    live: 'https://github.com/thakurssanjali/DiceGameSimulator',
    tags: ['Java', 'Game Development', 'Desktop App'],
  },
];
