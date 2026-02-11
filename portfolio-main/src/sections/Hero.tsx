import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Code2, ArrowRight } from 'lucide-react';

export const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  const socialIcons = [
    {
      icon: Github,
      href: 'https://github.com/thakurssanjali',
      label: 'GitHub',
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/thakurssanjali',
      label: 'LinkedIn',
    },
    {
      icon: Code2,
      href: 'https://leetcode.com/u/thakurssanjali/',
      label: 'LeetCode',
    },
  ];

  const handleViewResume = () => {
    window.open('/anshu-resume.pdf', '_blank');
  };

  const handleViewProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center w-full min-h-screen px-4 pt-28 pb-16 md:py-0 md:pt-24 overflow-hidden"
    >
      {/* Subtle radial gradient background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-full h-full pointer-events-none radial-gradient"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full mx-auto max-w-7xl">
        <motion.div
          className="grid items-center grid-cols-1 gap-12 md:grid-cols-2 md:gap-16 lg:gap-24"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Right Column - Profile Image & Social Icons */}
          <motion.div
            className="flex flex-col items-center justify-center order-first md:order-last"
            variants={imageVariants}
          >
            {/* Profile Image Container */}
            <motion.div
              className="relative mb-8 group"
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3, type: 'spring', stiffness: 200 }}
            >
              {/* Gradient ring */}
              <div className="absolute -inset-1 bg-gradient-to-br from-violet-500 to-violet-600 dark:from-violet-400 dark:to-violet-500 rounded-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>

              {/* Image container */}
              <div className="relative p-2 bg-white dark:bg-zinc-900 rounded-3xl shadow-large">
                <img
                  src="/anshu.png"
                  alt="Anjali Thakur"
                  className="object-cover w-72 h-80 md:w-80 md:h-96 rounded-2xl"
                />
              </div>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center gap-3"
            >
              {socialIcons.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.label}
                  className="flex items-center justify-center w-12 h-12 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700 hover:border-violet-500 dark:hover:border-violet-400 hover:text-violet-600 dark:hover:text-violet-400 transition-all duration-200"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>

            {/* Availability Badge - NEW DESIGN */}
            <motion.div
              variants={itemVariants}
              className="mt-8"
            >
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800">
                {/* Pulsing dot */}
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">
                  Open to Work
                </span>
                <span className="text-emerald-400 dark:text-emerald-600">•</span>
                <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
                  Full Stack Developer
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Left Column - Text Content */}
          <motion.div className="flex flex-col justify-center order-last md:order-first" variants={itemVariants}>
            {/* Small intro text */}
            <motion.p
              variants={itemVariants}
              className="text-sm font-semibold tracking-widest uppercase text-violet-600 dark:text-violet-400 mb-4"
            >
              Hello, I'm
            </motion.p>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-zinc-900 dark:text-white mb-6"
            >
              Anjali{' '}
              <span className="gradient-text">Thakur</span>
            </motion.h1>

            {/* Professional description */}
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl font-medium text-zinc-600 dark:text-zinc-400 mb-6"
            >
              Full Stack Web Developer crafting elegant, scalable, and user-centered digital experiences.
            </motion.p>

            {/* Extended tagline */}
            <motion.div
              variants={itemVariants}
              className="max-w-xl mb-10 text-base leading-relaxed text-zinc-500 dark:text-zinc-500"
            >
              <p>
                With expertise in modern web technologies, I craft elegant solutions that bridge the gap between
                beautiful design and powerful functionality. Let's build something extraordinary together.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col gap-3 sm:flex-row"
            >
              {/* Primary Button */}
              <motion.button
                onClick={handleViewResume}
                className="btn-primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Resume
                <ArrowRight size={18} />
              </motion.button>

              {/* Secondary Button */}
              <motion.button
                onClick={handleViewProjects}
                className="btn-secondary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View Projects
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute z-20 transform -translate-x-1/2 bottom-8 left-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronDown size={28} className="text-zinc-400 dark:text-zinc-600" />
      </motion.div>
    </section>
  );
};
