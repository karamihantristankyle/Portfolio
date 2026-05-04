import { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Globe, Zap } from 'lucide-react';

const stats = [
  { label: 'Years Experience', value: '3+' },
  { label: 'Projects Completed', value: '20+' },
  { label: 'Happy Clients', value: '15+' },
  { label: 'Cups of Coffee', value: '∞' },
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
              Passionate about building the <br />
              <span className="text-primary">future of the web.</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              I specialize in creating interactive experiences that are not only visually stunning but also highly functional. With a background in both design and development, I bridge the gap between aesthetics and performance.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              My approach is user-centric, ensuring every line of code serves a purpose and enhances the overall journey. Whether it's a complex web app or a simple landing page, I bring the same level of dedication and detail.
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
              title="Development"
              desc="Clean, scalable code using modern technologies."
              delay={0.2}
            />
            <FeatureCard
              icon={<Globe className="text-secondary" />}
              title="Performance"
              desc="Lightning fast load times and optimization."
              delay={0.3}
            />
            <FeatureCard
              icon={<Palette className="text-accent" />}
              title="Design"
              desc="Intuitive UI/UX that delights users."
              delay={0.4}
            />
            <FeatureCard
              icon={<Zap className="text-yellow-500" />}
              title="SEO"
              desc="Ensuring your project is discoverable."
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
