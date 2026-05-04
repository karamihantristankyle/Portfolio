import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    company: 'Freelance Developer',
    role: 'Full Stack Developer',
    period: '2023 - Present',
    location: 'Remote',
    description: 'Developing custom web solutions for various clients, focusing on e-commerce and business management systems.',
    achievements: ['Built 10+ custom websites', 'Optimized site performance by 40%', 'Implemented secure payment gateways'],
  },
  {
    company: 'Tech Solutions Inc.',
    role: 'Junior Web Developer',
    period: '2022 - 2023',
    location: 'Manila, Philippines',
    description: 'Assisted in building and maintaining enterprise-level web applications using React and Node.js.',
    achievements: ['Reduced bug reports by 25%', 'Collaborated with design teams', 'Maintained 99.9% uptime'],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-4 bg-white dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Work <span className="text-primary">Experience</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A journey through my professional career and the impact I've made at different companies.
          </p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l-2 border-slate-200 dark:border-slate-800 pb-8 last:pb-0"
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-white dark:border-slate-900" />
              
              <div className="bg-slate-50 dark:bg-slate-800/50 p-8 rounded-3xl border border-slate-200 dark:border-slate-800 hover:border-primary transition-colors group">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-primary font-medium mt-1">
                      <Briefcase size={16} />
                      {exp.company}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4 text-sm text-slate-500 dark:text-slate-400">
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={14} />
                      {exp.location}
                    </div>
                  </div>
                </div>
                
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  {exp.description}
                </p>
                
                <ul className="grid sm:grid-cols-2 gap-3">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
