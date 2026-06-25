import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Vite'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'REST APIs', 'SQLite', 'PostgreSQL', 'Authentication'],
  },
  {
    title: 'Workflow',
    skills: ['GitHub', 'Deployment', 'UI Systems', 'Interaction Design', 'Testing', 'Prototyping'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="border-t border-slate-200 px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14 max-w-2xl">
          <div className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
            Stack
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Tools I use.
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Depends on the project. These are the ones I reach for most often.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm"
            >
              <h3 className="text-lg font-semibold text-slate-950">
                {category.title}
              </h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-slate-100 px-3 py-1.5 text-sm font-medium text-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
