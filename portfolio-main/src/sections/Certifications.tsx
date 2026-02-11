import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar, CheckCircle2 } from 'lucide-react';
import { certificates } from '../data/profile';

export const Certifications = () => {
  return (
    <section id="certifications" className="py-20 lg:py-32">
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
            <Award size={16} />
            <span>Certifications</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Professional Credentials
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Courses and certifications that validate my skills
          </p>
        </motion.div>

        {/* Certificate Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -2 }}
            >
              <div className="h-full p-6 rounded-3xl bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl border border-zinc-200/50 dark:border-zinc-800/50 hover:border-violet-300/70 dark:hover:border-violet-700/70 shadow-xl transition-all">
                {/* Certificate Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white mb-6 shadow-lg group-hover:shadow-violet-500/25 transition-shadow">
                  <Award size={32} />
                </div>

                {/* Certificate Info */}
                <div>
                  {/* Date Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 text-sm font-medium mb-3">
                    <Calendar size={14} />
                    <span>{cert.date}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                    {cert.title}
                  </h3>

                  {/* Issuer */}
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle2 size={16} className="text-emerald-500" />
                    <p className="text-violet-600 dark:text-violet-400 font-medium">
                      {cert.issuer}
                    </p>
                  </div>

                  {/* Description */}
                  {cert.description && (
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-4">
                      {cert.description}
                    </p>
                  )}

                  {/* Verify Link */}
                  {cert.credentialUrl && (
                    <motion.a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-violet-600 dark:text-violet-400 text-sm font-medium hover:gap-3 transition-all"
                      whileHover={{ y: -2 }}
                    >
                      <ExternalLink size={14} />
                      Verify Certificate
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Decorative gradient */}
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-500/10 to-purple-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
