import { motion } from 'framer-motion';
import {
  Github,  
  ArrowRight,
  Shield,
  BarChart3,
  Brain,
  X
} from 'lucide-react';
import { projects } from '../data/projects';
import { useState } from 'react';

// Map project tags to icons (Data Science + Security focused)
const getProjectIcon = (tags: string[]): React.ElementType => {
  const iconMap: Record<string, React.ElementType> = {
    'Cybersecurity': Shield,
    'Threat Intelligence': Shield,
    'Dashboard': BarChart3,
    'Data Visualization': BarChart3,
    'Analytics': BarChart3,
    'Data Analysis': Brain,
    'Statistics': Brain,
    'Python': Brain,
  };

  for (const tag of tags) {
    if (iconMap[tag]) return iconMap[tag];
  }

  return BarChart3;
};

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section
      id="projects"
      className="relative z-10 w-full min-h-screen px-4 py-24 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-4 text-4xl font-bold sm:text-5xl lg:text-6xl text-zinc-900 dark:text-white">
            Featured <span className="gradient-text">Projects</span>
          </h2>

          <p className="max-w-2xl mx-auto mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            Showcasing data-driven projects focused on analytics, visualization, and security intelligence.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const IconComponent = getProjectIcon(project.tags);

            return (
              <motion.div
                key={project.id}
                onClick={() => setSelectedProject(project.id)}
                className="cursor-pointer group"
                whileHover={{ y: -4 }}
              >
                <div className="relative flex flex-col h-full p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-violet-400 transition-all">

                  {/* Icon + Title */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-violet-100 dark:bg-violet-900/30">
                      <IconComponent size={22} className="text-violet-600 dark:text-violet-400" />
                    </div>

                    <h3 className="text-lg font-bold text-zinc-900 dark:text-white group-hover:text-violet-600 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-semibold rounded-full bg-violet-100 dark:bg-violet-900/40 text-violet-700 dark:text-violet-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="mt-auto pt-4 border-t border-zinc-200 dark:border-zinc-800">
                    <p className="text-xs font-semibold text-zinc-500 mb-2 uppercase">
                      Tech Stack
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center flex-1 gap-2 px-4 py-2 text-sm font-medium rounded-xl bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github size={16} />
                          Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Modal */}
        {selectedProject !== null && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-white dark:bg-zinc-900 rounded-2xl max-w-2xl w-full p-8 max-h-[85vh] overflow-y-auto"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              {projects.map((project) => {
                if (project.id === selectedProject) {
                  return (
                    <div key={project.id}>
                      <div className="flex justify-between items-start mb-6">
                        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                          {project.title}
                        </h2>

                        <button onClick={() => setSelectedProject(null)}>
                          <X size={20} />
                        </button>
                      </div>

                      <p className="text-zinc-700 dark:text-zinc-300 mb-6 leading-relaxed">
                        {project.longDescription}
                      </p>

                      <div className="flex gap-3">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-xl text-sm font-semibold"
                          >
                            <Github size={16} />
                            View Code
                          </a>
                        )}
                      </div>
                    </div>
                  );
                }
                return null;
              })}
            </motion.div>
          </motion.div>
        )}

        {/* GitHub CTA */}
        <motion.div
          className="pt-12 mt-16 text-center border-t border-zinc-200 dark:border-zinc-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <p className="mb-6 text-zinc-600 dark:text-zinc-400">
            Explore more of my data-driven and security-focused projects on GitHub.
          </p>

          <a
            href="https://github.com/vermaditya701"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:opacity-90 transition"
          >
            Visit My GitHub
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
