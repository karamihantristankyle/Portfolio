import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const githubProfile = 'https://github.com/karamihantristankyle';
const githubRepos = `${githubProfile}?tab=repositories`;

const projects = [
  {
    title: 'MotoTrack',
    category: 'Featured / Full Stack',
    description: 'A featured full-stack concept focused on tracking workflows, clean operational visibility, and product usability.',
    tech: ['Full Stack', 'Tracking UI', 'Dashboards', 'Workflow UX'],
    link: 'https://mototrackph.vercel.app',
    linkLabel: 'Live Demo',
    github: githubProfile,
    eyebrow: 'Tracking-focused build',
    summary: 'Built around visibility, flow, and management.',
    highlights: ['Operations', 'Monitoring', 'Clear UX'],
    gradient: 'from-sky-500 via-cyan-500 to-blue-700',
  },
  {
    title: 'StressBuster',
    category: 'Featured / Game Dev',
    description: 'A sensory web experience designed to ease tension through soothing interaction, playful feedback, and a focused mood.',
    tech: ['HTML', 'Tailwind CSS', 'Interactive Design', 'Game Feel'],
    link: 'https://stressbuster-website.vercel.app',
    linkLabel: 'Live Demo',
    github: githubProfile,
    eyebrow: 'Interactive experience',
    summary: 'Game-inspired design with atmosphere and feedback.',
    highlights: ['Mood', 'Play', 'Feedback'],
    gradient: 'from-violet-500 via-fuchsia-500 to-indigo-700',
  },
  {
    title: 'AttendanceScheduleManager',
    category: 'Featured / Productivity',
    description: 'A full-stack attendance and schedule manager built with React, TypeScript, Express, and Vite.',
    tech: ['React', 'TypeScript', 'Express', 'Vite'],
    link: 'https://uphsattendance.vercel.app',
    linkLabel: 'Live Demo',
    github: 'https://github.com/karamihantristankyle/Schedule-Attendance-Manager',
    eyebrow: 'Business workflow app',
    summary: 'Scheduling and attendance in one focused workflow.',
    highlights: ['Schedules', 'Attendance', 'Admin'],
    gradient: 'from-emerald-500 via-teal-500 to-cyan-700',
  },
  {
    title: 'Capstoned',
    category: 'More Work / E-Commerce',
    description: 'A premium headwear e-commerce experience built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    link: 'https://capstoned.vercel.app',
    linkLabel: 'Live Demo',
    github: 'https://github.com/karamihantristankyle/Capstoned',
    eyebrow: 'Premium storefront',
    summary: 'Luxury-focused shopping experience with polished motion.',
    highlights: ['Storefront', 'Motion', 'Orders'],
    gradient: 'from-amber-400 via-yellow-500 to-orange-700',
  },
  {
    title: 'Cafe-Inventory-POS',
    category: 'More Work / Business System',
    description: 'A café inventory and POS system focused on day-to-day operations, stock visibility, and checkout workflows.',
    tech: ['JavaScript', 'POS', 'Inventory', 'Business Tools'],
    link: 'https://cafe-inventory-pos.vercel.app',
    linkLabel: 'Live Demo',
    github: 'https://github.com/karamihantristankyle/Cafe-Inventory-POS',
    eyebrow: 'Operations platform',
    summary: 'Inventory control and point-of-sale in one system.',
    highlights: ['POS', 'Inventory', 'Operations'],
    gradient: 'from-rose-500 via-orange-500 to-amber-600',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Featured <span className="text-primary">Projects</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
              A curated set of work from my GitHub portfolio, with my top three projects front and center plus other shipped builds.
            </p>
          </div>
          <a
            href={githubRepos}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            View All On GitHub
            <ArrowRight size={20} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-2xl transition-all"
            >
              <div className={`relative h-64 overflow-hidden bg-gradient-to-br ${project.gradient}`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.25),_transparent_35%),linear-gradient(to_bottom,_rgba(255,255,255,0.08),_transparent)]" />
                <div className="relative h-full flex flex-col justify-between p-6 text-white">
                  <div className="flex items-start justify-between gap-4">
                    <span className="inline-flex px-3 py-1 rounded-full bg-white/15 border border-white/20 text-xs font-semibold uppercase tracking-[0.2em]">
                      {project.eyebrow}
                    </span>
                    <Github size={20} className="text-white/80" />
                  </div>
                  <div>
                    <div className="text-white/70 text-sm mb-2">{project.summary}</div>
                    <div className="text-3xl font-black leading-tight">{project.title}</div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-slate-950/20 border border-white/15"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-2">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-full text-xs font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3 mt-6">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors"
                  >
                    {project.linkLabel}
                    <ExternalLink size={16} />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-sm font-semibold hover:border-primary hover:text-primary transition-colors"
                  >
                    GitHub
                    <Github size={16} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
