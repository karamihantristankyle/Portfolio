import { motion } from 'framer-motion';
import { ArrowRight, Github, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.querySelector('#projects');
    if (!projectsSection) return;

    const top = projectsSection.getBoundingClientRect().top + window.scrollY - 88;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <section id="home" className="px-4 pb-16 pt-28 sm:pt-32">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-end"
        >
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">
              Developer · Laguna, Philippines
            </div>

            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-7xl">
              I build software that solves real problems.
            </h1>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
              Websites, internal tools, storefronts — whatever the project needs. I pick up the work, figure out what matters, and ship something that holds up.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <motion.button
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={scrollToProjects}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white hover:bg-slate-800 transition-colors"
              >
                See selected work
                <ArrowRight size={16} />
              </motion.button>
              <motion.a
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
                href="mailto:karamihan.tristankyle@gmail.com"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-700 hover:border-slate-300 hover:text-slate-950 transition-colors"
              >
                Send an email
                <Mail size={16} />
              </motion.a>
              <motion.a
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.98 }}
                href="https://github.com/karamihantristankyle"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-700 hover:border-slate-300 hover:text-slate-950 transition-colors"
              >
                GitHub
                <Github size={16} />
              </motion.a>
            </div>

            <div className="mt-12 grid gap-4 lg:grid-cols-3">
              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="text-sm text-slate-500">What I build</div>
                <div className="mt-2 text-base font-medium text-slate-950">Web apps, business tools, and whatever else the job calls for</div>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="text-sm text-slate-500">How I work</div>
                <div className="mt-2 text-base font-medium text-slate-950">Understand the problem first, then build something that actually gets used</div>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="text-sm text-slate-500">Open to</div>
                <div className="mt-2 text-base font-medium text-slate-950">Freelance, contracts, collabs, and new projects</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
