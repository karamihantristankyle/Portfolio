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
    <section id="home" className="px-4 pb-16 pt-36 sm:pt-40">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-end"
        >
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">
              Full Stack Developer and Game Developer based in Laguna
            </div>

            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-7xl">
              I build clean web products and interactive experiences that feel simple to use.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              I focus on full-stack apps, business tools, and game-driven interactions with an emphasis on clarity, usability, and solid implementation.
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
                <div className="mt-2 text-base font-medium text-slate-950">Web apps, tools, and interactive experiences</div>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="text-sm text-slate-500">Main focus</div>
                <div className="mt-2 text-base font-medium text-slate-950">Useful product design, clear systems, and reliable builds</div>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="text-sm text-slate-500">Open to</div>
                <div className="mt-2 text-base font-medium text-slate-950">Freelance work, collaborations, and product roles</div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="lg:justify-self-end"
          >
            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6">
                <div className="flex items-center gap-4">
                  <div className="h-20 w-20 overflow-hidden rounded-2xl bg-slate-100">
                    <img
                      src={`${import.meta.env.BASE_URL}profile.png`}
                      alt="Tristan Kyle Karamihan"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-slate-950">Tristan Kyle Karamihan</div>
                    <div className="text-sm text-slate-500">Building across web, workflow, and game-inspired interaction</div>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <div className="text-sm text-slate-500">Selected priorities</div>
                    <div className="mt-2 text-sm leading-6 text-slate-700">
                      Clean UI, straightforward UX, maintainable code, and products people can actually use.
                    </div>
                  </div>
                  <div className="rounded-2xl bg-slate-50 p-4">
                    <div className="text-sm text-slate-500">Current portfolio</div>
                    <div className="mt-2 text-sm leading-6 text-slate-700">
                      Business systems, interactive websites, and practical full-stack builds from my GitHub work.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
