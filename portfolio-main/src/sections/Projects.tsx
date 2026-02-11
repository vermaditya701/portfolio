import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowRight, Sparkles, Code2, X, Palette, Settings, Coffee, Gamepad2, LayoutDashboard, Briefcase, Rocket } from 'lucide-react';
import { projects } from '../data/projects';
import { useState } from 'react';

// Map project types to icons
const getProjectIcon = (tags: string[]): React.ElementType => {
  const iconMap: Record<string, React.ElementType> = {
    'Frontend': Palette,
    'Full Stack': Settings,
    'Java': Coffee,
    'Game Development': Gamepad2,
    'Dashboard': LayoutDashboard,
    'UI/UX': Sparkles,
    'Portfolio': Briefcase,
  };

  for (const tag of tags) {
    if (iconMap[tag]) return iconMap[tag];
  }
  return Rocket;
};

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const projectCardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section
      id="projects"
      className="relative z-10 w-full min-h-screen px-4 py-24 overflow-hidden sm:px-6 lg:px-8"
    >
      {/* Subtle gradient accents */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-violet-500/5 dark:bg-violet-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-violet-500/5 dark:bg-violet-500/10 rounded-full blur-3xl -z-10"></div>

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 mb-4 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <Sparkles size={16} className="text-violet-600 dark:text-violet-400" />
            <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">Showcase</span>
          </motion.div>

          <motion.h2
            className="mb-4 text-4xl font-bold sm:text-5xl lg:text-6xl text-zinc-900 dark:text-white"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Featured <span className="gradient-text">Projects</span>
          </motion.h2>

          <motion.p
            className="max-w-2xl mx-auto mt-4 text-lg text-zinc-600 dark:text-zinc-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Showcasing my latest work and technical expertise across diverse technologies
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {projects.map((project) => {
            const IconComponent = getProjectIcon(project.tags);

            return (
              <motion.div
                key={project.id}
                variants={projectCardVariants}
                onClick={() => setSelectedProject(project.id)}
                className="cursor-pointer group"
              >
                {/* Card */}
                <motion.div
                  className="relative flex flex-col h-full p-6 rounded-2xl bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl border border-zinc-200/50 dark:border-zinc-800/50 transition-all duration-200 hover:border-violet-300/70 dark:hover:border-violet-700/70 hover:shadow-lg dark:hover:shadow-zinc-900/50"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Header */}
                  <div className="mb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-violet-100 dark:bg-violet-900/30">
                        <IconComponent size={22} className="text-violet-600 dark:text-violet-400" />
                      </div>
                      <h3 className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors line-clamp-1">
                        {project.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-semibold rounded-full bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Code2 size={14} className="text-zinc-400" />
                      <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">Tech Stack</p>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs font-medium rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 text-xs font-medium text-zinc-500">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Links - Push to bottom */}
                  <div className="flex gap-2 mt-auto pt-4 border-t border-zinc-100 dark:border-zinc-800">
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center justify-center flex-1 gap-2 px-4 py-2.5 text-sm font-medium rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 hover:border-violet-300 dark:hover:border-violet-600 transition-all"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Github size={16} />
                        Code
                      </motion.a>
                    )}
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center justify-center flex-1 gap-2 px-4 py-2.5 text-sm font-medium rounded-xl bg-gradient-to-r from-violet-600 to-violet-500 dark:from-violet-500 dark:to-violet-400 text-white shadow-sm hover:shadow-md transition-all"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <ExternalLink size={16} />
                        Live
                      </motion.a>
                    )}
                    {!project.live && project.github && (
                      <motion.button
                        onClick={() => setSelectedProject(project.id)}
                        className="flex items-center justify-center flex-1 gap-2 px-4 py-2.5 text-sm font-medium rounded-xl bg-gradient-to-r from-violet-600 to-violet-500 dark:from-violet-500 dark:to-violet-400 text-white shadow-sm hover:shadow-md transition-all"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <ArrowRight size={16} />
                        Details
                      </motion.button>
                    )}
                  </div>

                  {/* Hover accent line */}
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

        {/* Project Detail Modal */}
        {selectedProject !== null && (
          <motion.div
            className="fixed inset-0 bg-black/50 dark:bg-black/70 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-2xl rounded-2xl max-w-2xl w-full p-8 max-h-[85vh] overflow-y-auto border border-zinc-200/50 dark:border-zinc-800/50 shadow-xl"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            >
              {projects.map((project) => {
                if (project.id === selectedProject) {
                  const IconComponent = getProjectIcon(project.tags);

                  return (
                    <div key={project.id}>
                      {/* Modal Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-violet-100 dark:bg-violet-900/30">
                            <IconComponent size={28} className="text-violet-600 dark:text-violet-400" />
                          </div>
                          <div>
                            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-1">{project.title}</h2>
                            <div className="flex flex-wrap gap-2">
                              {project.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="px-2.5 py-1 text-xs font-semibold rounded-full bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                        <button
                          onClick={() => setSelectedProject(null)}
                          className="p-2 rounded-lg text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                        >
                          <X size={20} />
                        </button>
                      </div>

                      {/* Modal Content */}
                      <div className="space-y-6 pt-6 border-t border-zinc-200 dark:border-zinc-800">
                        {/* Description */}
                        <div>
                          <h3 className="text-sm font-semibold text-zinc-500 dark:text-zinc-500 uppercase tracking-wider mb-2">About</h3>
                          <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                            {project.longDescription || project.description}
                          </p>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h3 className="text-sm font-semibold text-zinc-500 dark:text-zinc-500 uppercase tracking-wider mb-3">Technologies Used</h3>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1.5 text-sm font-medium rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Links */}
                        <div className="flex gap-3 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                          {project.github && (
                            <motion.a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center flex-1 gap-2 px-4 py-3 text-sm font-semibold rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 hover:border-violet-300 dark:hover:border-violet-600 transition-all"
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <Github size={18} />
                              View Code
                            </motion.a>
                          )}
                          {project.live && (
                            <motion.a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center flex-1 gap-2 px-4 py-3 text-sm font-semibold rounded-xl bg-gradient-to-r from-violet-600 to-violet-500 dark:from-violet-500 dark:to-violet-400 text-white shadow-md hover:shadow-lg transition-all"
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <ExternalLink size={18} />
                              Visit Live
                            </motion.a>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                }
                return null;
              })}
            </motion.div>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          className="pt-12 mt-16 text-center border-t border-zinc-200 dark:border-zinc-800"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="mb-6 text-zinc-600 dark:text-zinc-400">
            Interested in seeing more of my work?
          </p>
          <motion.a
            href="https://github.com/thakurssanjali"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-100 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Explore on GitHub
            <ArrowRight size={16} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
