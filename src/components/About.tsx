import { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Globe, Zap } from 'lucide-react';

const stats = [
  { label: 'Public Repos', value: '5' },
  { label: 'Featured Projects', value: '3' },
  { label: 'Core Stack', value: 'TS/JS' },
  { label: 'Focus', value: 'Web + Games' },
];

const About = () => {
  return (
    <section id="about" className="py-24 px-4 bg-white dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
              Building products across <br />
              <span className="text-primary">web apps and game experiences.</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              I work across the full stack, from polished frontends to backend logic and data-driven workflows. I enjoy building products that feel intuitive, fast, and reliable for the people who use them every day.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              I also bring that same systems mindset into game development, where interaction, feedback, and flow matter just as much as architecture. Whether I am shipping a business tool or an experimental game concept, I aim for clarity, responsiveness, and strong UX.
            </p>

            <div className="grid grid-cols-2 gap-8 pt-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-500 dark:text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <FeatureCard
              icon={<Code2 className="text-primary" />}
              title="Full Stack"
              desc="End-to-end product development with frontend, backend, and data workflows."
              delay={0.2}
            />
            <FeatureCard
              icon={<Globe className="text-secondary" />}
              title="Systems"
              desc="Thoughtful architecture for dashboards, internal tools, and real-world apps."
              delay={0.3}
            />
            <FeatureCard
              icon={<Palette className="text-accent" />}
              title="Interactive UX"
              desc="Interfaces that feel deliberate, responsive, and satisfying to use."
              delay={0.4}
            />
            <FeatureCard
              icon={<Zap className="text-yellow-500" />}
              title="Game Dev"
              desc="Gameplay-focused thinking applied to pacing, feedback, and engagement."
              delay={0.5}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, desc, delay }: { icon: ReactNode; title: string; desc: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    viewport={{ once: true }}
    className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-shadow"
  >
    <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-900 flex items-center justify-center shadow-sm mb-4">
      {icon}
    </div>
    <h3 className="font-semibold text-slate-900 dark:text-white mb-2">{title}</h3>
    <p className="text-sm text-slate-600 dark:text-slate-400">{desc}</p>
  </motion.div>
);

export default About;
