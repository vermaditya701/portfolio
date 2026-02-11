import { motion, AnimatePresence } from 'framer-motion';
import { Home, User, GraduationCap, Code2, Award, FolderGit2, Mail, Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

const navItems = [
  { id: 'hero', icon: Home, label: 'Home' },
  { id: 'about', icon: User, label: 'About' },
  { id: 'education', icon: GraduationCap, label: 'Education' },
  { id: 'skills', icon: Code2, label: 'Skills' },
  { id: 'certifications', icon: Award, label: 'Certifications' },
  { id: 'projects', icon: FolderGit2, label: 'Projects' },
  { id: 'contact', icon: Mail, label: 'Contact' },
];

export const NavigationDock = () => {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('hero');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      // If at very top of page, always set to hero
      if (window.scrollY < 50) {
        setActiveSection('hero');
        return;
      }

      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200; // Account for navbar height

      // Find which section we're currently in
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section) {
          const sectionTop = section.offsetTop;

          if (scrollPosition >= sectionTop) {
            setActiveSection(navItems[i].id);
            break;
          }
        }
      }
    };

    // Set initial state to hero
    setActiveSection('hero');
    handleScroll(); // Run once on mount

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (id === 'hero') {
      // Scroll to top for home
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      {/* Desktop Navbar - Floating Pill Style with Strong Frosted Glass */}
      <motion.nav
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden lg:block"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="flex items-center gap-4 px-5 py-3.5 rounded-2xl bg-white/40 dark:bg-zinc-900/40 backdrop-blur-2xl border border-white/30 dark:border-zinc-700/30 shadow-lg shadow-black/5 dark:shadow-black/20">
          {/* Logo with Favicon */}
          <motion.a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('hero');
            }}
            className="flex items-center gap-2.5 pr-4 border-r border-zinc-300/30 dark:border-zinc-600/30"
            whileHover={{ scale: 1.02 }}
          >
            <img
              src="/kitty.png"
              alt="Logo"
              className="w-8 h-8 rounded-lg object-cover"
            />
            <span className="text-xl font-bold text-zinc-900 dark:text-white">
              Anjali<span className="text-violet-600 dark:text-violet-400">.</span>
            </span>
          </motion.a>

          {/* Navigation Links */}
          <div className="flex items-center gap-1 ml-2">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                onMouseEnter={() => setHoveredItem(item.id)}
                onMouseLeave={() => setHoveredItem(null)}
                className="relative px-5 py-2.5 text-sm font-medium rounded-xl transition-colors"
                whileTap={{ scale: 0.98 }}
              >
                {/* Active/Hover Background */}
                <AnimatePresence>
                  {(activeSection === item.id || hoveredItem === item.id) && (
                    <motion.div
                      className={`absolute inset-0 rounded-xl backdrop-blur-sm ${activeSection === item.id
                        ? 'bg-white/60 dark:bg-zinc-700/60 shadow-sm'
                        : 'bg-zinc-200/40 dark:bg-zinc-700/40'
                        }`}
                      layoutId="navPill"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </AnimatePresence>
                <span
                  className={`relative z-10 ${activeSection === item.id
                    ? 'text-violet-600 dark:text-violet-400'
                    : 'text-zinc-600 dark:text-zinc-400'
                    }`}
                >
                  {item.label}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Theme Toggle */}
          <div className="pl-4 border-l border-zinc-300/30 dark:border-zinc-600/30">
            <motion.button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl text-zinc-600 dark:text-zinc-400 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-white/40 dark:hover:bg-zinc-700/40 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {theme === 'dark' ? <Moon size={20} /> : <Sun size={20} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navbar - Bottom Dock with Strong Frosted Glass */}
      <motion.nav
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 lg:hidden"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <div className="flex items-center gap-2 px-5 py-4 rounded-2xl bg-white/40 dark:bg-zinc-900/40 backdrop-blur-2xl border border-white/30 dark:border-zinc-700/30 shadow-lg shadow-black/5 dark:shadow-black/20">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;

            return (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative p-3.5 rounded-xl transition-colors ${isActive
                  ? 'text-violet-600 dark:text-violet-400'
                  : 'text-zinc-500 dark:text-zinc-500'
                  }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {isActive && (
                  <motion.div
                    className="absolute inset-0 bg-violet-100/50 dark:bg-violet-900/30 rounded-xl backdrop-blur-sm"
                    layoutId="mobileNavPill"
                    transition={{ duration: 0.2 }}
                  />
                )}
                <Icon size={22} className="relative z-10" />
                {isActive && (
                  <motion.div
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-violet-600 dark:bg-violet-400"
                    layoutId="mobileActiveIndicator"
                  />
                )}
              </motion.button>
            );
          })}

          {/* Theme Toggle */}
          <div className="w-px h-7 bg-zinc-300/30 dark:bg-zinc-600/30 mx-1" />
          <motion.button
            onClick={toggleTheme}
            className="p-3.5 rounded-xl text-zinc-500 dark:text-zinc-500 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {theme === 'dark' ? <Moon size={22} /> : <Sun size={22} />}
          </motion.button>
        </div>
      </motion.nav>
    </>
  );
};
