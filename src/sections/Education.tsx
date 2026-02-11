import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { education } from '../data/profile';

export const Education = () => {
  return (
    <section id="education" className="py-20 lg:py-32">
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
            <GraduationCap size={16} />
            <span>Education</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Academic Journey
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            My educational background and academic achievements
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 lg:left-1/2 lg:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-500 via-purple-500 to-violet-500 opacity-30" />

          {/* Education Items */}
          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                className={`relative flex flex-col lg:flex-row gap-8 ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                  }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 lg:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-violet-500 to-purple-600 shadow-lg shadow-violet-500/30 z-10" />

                {/* Content */}
                <motion.div
                  className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'} ml-16 lg:ml-0`}
                  whileHover={{ y: -2 }}
                >
                  <div className="p-6 rounded-2xl bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl border border-zinc-200/50 dark:border-zinc-800/50 hover:border-violet-300/70 dark:hover:border-violet-700/70 shadow-xl transition-all group">
                    {/* Period Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 text-sm font-medium mb-4">
                      <Calendar size={14} />
                      <span>{edu.period}</span>
                    </div>

                    {/* Institution */}
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                      {edu.institution}
                    </h3>

                    {/* Location */}
                    <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-500 text-sm mb-3">
                      <MapPin size={14} />
                      <span>{edu.location}</span>
                    </div>

                    {/* Degree */}
                    <p className="text-zinc-700 dark:text-zinc-300 font-medium mb-2">
                      {edu.degree}
                    </p>

                    {/* Grade */}
                    <div className="inline-block px-3 py-1 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-sm font-semibold">
                      {edu.grade}
                    </div>

                    {/* Description */}
                    {edu.description && (
                      <p className="mt-4 text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                        {edu.description}
                      </p>
                    )}
                  </div>
                </motion.div>

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block lg:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
