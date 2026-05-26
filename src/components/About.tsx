import { motion } from 'framer-motion';

const focusAreas = [
  'Full-stack web applications',
  'Business systems and internal tools',
  'Interactive websites and polished frontends',
  'Game-focused concepts and feedback-driven experiences',
];

const About = () => {
  return (
    <section id="about" className="border-t border-slate-200 px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl"
          >
            <div className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
              About Me
            </div>
            <p className="text-lg leading-8 text-slate-600">
              I&apos;m a developer who likes building products that feel clear, fast, and useful. Most of my work sits in full-stack development, where I handle UI, logic, and product flow end to end.
            </p>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              I&apos;m also drawn to game development because it sharpens how I think about interaction, pacing, and feedback. Whether it&apos;s a business system or an interactive concept, I care about making the experience feel deliberate instead of noisy.
            </p>
            <div className="mt-8 rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6">
              <div className="text-sm text-slate-500">What matters in my work</div>
              <div className="mt-3 text-base leading-7 text-slate-700">
                Clear UI, maintainable code, practical features, and a finished result that doesn&apos;t feel overdesigned.
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm"
          >
            <div className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
              Focus Areas
            </div>
            <div className="mt-6 space-y-4">
              {focusAreas.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 text-base font-medium text-slate-800"
                >
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 p-5">
                <div className="text-sm text-slate-500">Location</div>
                <div className="mt-2 text-base font-medium text-slate-950">Biñan, Laguna</div>
              </div>
              <div className="rounded-2xl border border-slate-200 p-5">
                <div className="text-sm text-slate-500">Open to</div>
                <div className="mt-2 text-base font-medium text-slate-950">Freelance, collaboration, and product work</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
