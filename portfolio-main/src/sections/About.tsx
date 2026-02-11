import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, MapPin, User } from 'lucide-react';
import { about } from '../data/profile';

export const About = () => {
  const contactLinks = [
    { icon: Mail, href: `mailto:${about.email}`, label: about.email },
    { icon: Phone, href: `tel:${about.phone}`, label: about.phone },
    { icon: Linkedin, href: about.linkedin, label: 'LinkedIn' },
    { icon: Github, href: about.github, label: 'GitHub' },
  ];

  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 text-sm font-medium mb-4">
            <User size={16} />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Get to Know Me
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            A brief introduction about who I am and what I do
          </p>
        </motion.div>

        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Card */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="p-8 rounded-3xl bg-white/60 dark:bg-zinc-800/60 backdrop-blur-xl border border-white/20 dark:border-zinc-700/20 shadow-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                  {about.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">
                    {about.name}
                  </h3>
                  <p className="text-violet-600 dark:text-violet-400 font-medium">
                    {about.title}
                  </p>
                </div>
              </div>

              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg">
                {about.bio}
              </p>

              {/* Location */}
              <div className="flex items-center gap-2 mt-6 text-zinc-500 dark:text-zinc-500">
                <MapPin size={18} />
                <span>Jammu & Kashmir, India</span>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-violet-400/20 to-purple-500/20 rounded-full blur-2xl" />
          </motion.div>

          {/* Contact Links */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-xl font-semibold text-zinc-900 dark:text-white mb-6">
              Let's Connect
            </h4>

            {contactLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={index}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl border border-zinc-200/50 dark:border-zinc-800/50 hover:border-violet-300/70 dark:hover:border-violet-700/70 transition-all group"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 group-hover:scale-105 transition-transform">
                    <Icon size={22} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-zinc-500 dark:text-zinc-500">
                      {link.icon === Mail ? 'Email' : link.icon === Phone ? 'Phone' : link.label}
                    </p>
                    <p className="font-semibold text-zinc-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                      {link.label}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
