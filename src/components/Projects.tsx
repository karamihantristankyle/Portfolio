import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const projects = [
  {
    title: 'CAPstoned',
    category: 'E-Commerce',
    image: 'CAPstoned.png',
    description: 'A premium, high-end headwear e-commerce website built with Next.js, Tailwind CSS, and Framer Motion.',
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'],
    link: '#',
    github: '#',
  },
  {
    title: 'Inventory & POS System',
    category: 'Full Stack / Business',
    image: 'Cafestone.png',
    description: 'A modern POS & Inventory System for Coffee Shops, featuring real-time tracking and automated checkout.',
    tech: ['React', 'Node.js', 'SQLite', 'Tailwind'],
    link: '#',
    github: '#',
  },
  {
    title: 'StressBuster',
    category: 'Web Experience',
    image: 'stressbuster.png',
    description: 'A sensory experience designed to melt away anxiety through soothing gameplay and ethereal soundscapes.',
    tech: ['HTML', 'Tailwind CSS', 'Lucide', 'AOS'],
    link: '#',
    github: '#',
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
              A selection of my recent work, showcasing my skills in full-stack development and design.
            </p>
          </div>
          <a
            href="#"
            className="flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            View All Projects
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
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto object-top transition-transform duration-[3000ms] ease-in-out group-hover:-translate-y-[calc(100%-256px)]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6 pointer-events-none">
                  <div className="flex gap-4 pointer-events-auto">
                    <a
                      href={project.link}
                      className="p-3 bg-white text-slate-900 rounded-full hover:bg-primary hover:text-white transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.github}
                      className="p-3 bg-white text-slate-900 rounded-full hover:bg-primary hover:text-white transition-colors"
                    >
                      <Github size={20} />
                    </a>
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
