import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="border-t border-slate-200 px-4 py-20">
      <div className="max-w-6xl mx-auto">
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
        </motion.div>
      </div>
    </section>
  );
};

export default About;
