import { motion } from 'framer-motion';
import { useState } from 'react';
import { skills } from '../data/skills';
import { ChevronRight, Zap, Layout, Server, Database, Wrench, Code } from 'lucide-react';

// Map category names to icons
const categoryIcons: Record<string, React.ElementType> = {
  'Frontend': Layout,
  'Backend': Server,
  'Databases': Database,
  'Tools & DevOps': Wrench,
  'Programming Languages': Code,
};

export const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
  };

  const expandVariants = {
    collapsed: {
      height: 0,
      opacity: 0,
      transition: { duration: 0.2 },
    },
    expanded: {
      height: 'auto',
      opacity: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section
      id="skills"
      className="relative z-10 w-full min-h-screen px-4 py-24 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Subtle gradient accents */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-violet-500/5 dark:bg-violet-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-violet-500/5 dark:bg-violet-500/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <Zap size={16} className="text-violet-600 dark:text-violet-400" />
            <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">Technical Arsenal</span>
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Skills & <span className="gradient-text">Expertise</span>
          </motion.h2>

          <motion.p
            className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl mx-auto mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A comprehensive toolkit of modern technologies and frameworks I use to build scalable solutions
          </motion.p>
        </motion.div>

        {/* Skills Container */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {skills.map((skillGroup, index) => {
            const IconComponent = categoryIcons[skillGroup.category] || Code;

            return (
              <motion.div
                key={index}
                variants={categoryVariants}
                className="group"
                onClick={() => setSelectedCategory(
                  selectedCategory === skillGroup.category ? null : skillGroup.category
                )}
              >
                {/* Card */}
                <motion.div
                  className="relative h-full p-6 rounded-2xl bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl border border-zinc-200/50 dark:border-zinc-800/50 cursor-pointer transition-all duration-200 hover:border-violet-300/70 dark:hover:border-violet-700/70 hover:shadow-lg dark:hover:shadow-zinc-900/50"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center">
                        <IconComponent size={22} className="text-violet-600 dark:text-violet-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                          {skillGroup.category}
                        </h3>
                        <p className="text-xs font-medium text-zinc-500 dark:text-zinc-500">
                          {skillGroup.items.length} technologies
                        </p>
                      </div>
                    </div>
                    <motion.div
                      animate={{
                        rotate: selectedCategory === skillGroup.category ? 90 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                      className="md:hidden"
                    >
                      <ChevronRight
                        size={20}
                        className="text-zinc-400 dark:text-zinc-600"
                      />
                    </motion.div>
                  </div>

                  {/* Skills Grid - Desktop */}
                  <motion.div className="hidden md:flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        variants={skillVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: skillIndex * 0.03 }}
                        className="px-3 py-1.5 rounded-lg text-sm font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 hover:border-violet-300 dark:hover:border-violet-600 hover:bg-violet-50 dark:hover:bg-violet-900/20 transition-all duration-200"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </motion.div>

                  {/* Mobile Expandable */}
                  <motion.div
                    className="md:hidden overflow-hidden"
                    variants={expandVariants}
                    initial="collapsed"
                    animate={selectedCategory === skillGroup.category ? 'expanded' : 'collapsed'}
                  >
                    <div className="flex flex-wrap gap-2 pt-4">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          variants={skillVariants}
                          initial="hidden"
                          animate="visible"
                          transition={{ delay: skillIndex * 0.03 }}
                          className="px-3 py-1.5 rounded-lg text-sm font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>

                  {/* Accent line on hover */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-violet-600 to-violet-400 rounded-b-2xl origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Summary Stats */}
        <motion.div
          className="mt-16 pt-12 border-t border-zinc-200 dark:border-zinc-800"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <div className="text-center">
              <p className="text-sm font-medium text-zinc-500 dark:text-zinc-500 mb-1">Total Technologies</p>
              <motion.p
                className="text-4xl font-bold gradient-text"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {skills.reduce((acc, skill) => acc + skill.items.length, 0)}+
              </motion.p>
            </div>

            <div className="hidden sm:block w-px h-12 bg-zinc-200 dark:bg-zinc-800"></div>

            <div className="text-center">
              <p className="text-sm font-medium text-zinc-500 dark:text-zinc-500 mb-1">Categories</p>
              <motion.p
                className="text-4xl font-bold gradient-text"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                viewport={{ once: true }}
              >
                {skills.length}
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
