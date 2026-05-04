import { motion } from 'framer-motion';
import { Layout, Server, Smartphone, Monitor } from 'lucide-react';

const services = [
  {
    title: 'Frontend Development',
    icon: <Layout className="text-primary" />,
    description: 'Building responsive, high-performance user interfaces using React, Next.js, and modern CSS frameworks.',
    features: ['Responsive Design', 'Interactive UI', 'State Management'],
  },
  {
    title: 'Backend Solutions',
    icon: <Server className="text-secondary" />,
    description: 'Developing secure, scalable server-side applications and APIs with Node.js, Express, and databases.',
    features: ['RESTful APIs', 'Database Design', 'Auth Systems'],
  },
  {
    title: 'Mobile Optimization',
    icon: <Smartphone className="text-accent" />,
    description: 'Ensuring your web application works perfectly across all mobile devices and screen sizes.',
    features: ['PWA Ready', 'Fast Loading', 'Touch Friendly'],
  },
  {
    title: 'UI/UX Design',
    icon: <Monitor className="text-yellow-500" />,
    description: 'Crafting intuitive and engaging digital experiences that put the user first.',
    features: ['Wireframing', 'Prototyping', 'User Flows'],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 px-4 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            My <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            I offer a wide range of digital services to help businesses grow and succeed in the modern web.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:shadow-2xl transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-800 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                {service.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-500">
                    <div className="w-1 h-1 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
