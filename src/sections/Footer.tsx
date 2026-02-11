import { motion } from 'framer-motion';
import { Github, Linkedin, Code2 } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/vermaditya701', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/aditya-verma-400196292/', label: 'LinkedIn' },
    { icon: Code2, href: 'https://leetcode.com/u/adityafrisky701/', label: 'LeetCode' },
  ];

  return (
    <footer className="relative z-10 w-full px-4 py-12 border-t border-zinc-200 dark:border-zinc-800 sm:px-6 lg:px-8 bg-zinc-50 dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="flex flex-col items-center justify-between gap-8 md:flex-row"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          {/* Left - Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-1">
              Aditya<span className="text-violet-600 dark:text-violet-400">.</span>
            </h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-500">
             Turning data into meaningful insights
            </p>
          </div>

          {/* Center - Social Links */}
          <div className="flex gap-3">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700 hover:border-violet-300 dark:hover:border-violet-600 hover:text-violet-600 dark:hover:text-violet-400 transition-all"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                title={social.label}
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </div>

          {/* Right - Made with love */}
          <div className="text-center md:text-right">
            <p className="flex items-center justify-center gap-1.5 text-sm text-zinc-500 dark:text-zinc-500 md:justify-end">
              Designed & Developed by Aditya

            </p>
          </div>
        </motion.div>

        {/* Bottom - Copyright */}
        <motion.div
          className="flex justify-center pt-8 mt-8 border-t border-zinc-200 dark:border-zinc-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-zinc-400 dark:text-zinc-600">
            © {currentYear} All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
