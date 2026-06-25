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
            I build things for a living — mostly web apps and tools for businesses, schools, and side projects. I handle the frontend, backend, and whatever else the job needs.
          </p>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            I don&apos;t stick to one lane. Some projects are serious systems. Others are experiments. What they share is that they work, they&apos;re easy to use, and they ship.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
