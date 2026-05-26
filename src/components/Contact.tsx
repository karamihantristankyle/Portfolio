import { motion } from 'framer-motion';
import { ArrowRight, Github, Mail, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="border-t border-slate-200 px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm sm:p-12"
        >
          <div className="max-w-3xl">
            <div className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
              Contact
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Got something in mind?
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              If you need a full-stack build, a polished frontend, or an interactive concept brought to life, feel free to reach out. A clear idea is enough to start the conversation.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:karamihan.tristankyle@gmail.com"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-medium text-white hover:bg-slate-800 transition-colors"
            >
              Email me
              <Mail size={16} />
            </a>
            <a
              href="https://github.com/karamihantristankyle"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-700 hover:border-slate-300 hover:text-slate-950 transition-colors"
            >
              GitHub profile
              <Github size={16} />
            </a>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4">
              <div className="text-sm text-slate-500">Email</div>
              <div className="mt-2 text-sm font-medium text-slate-900 break-all">karamihan.tristankyle@gmail.com</div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4">
              <div className="text-sm text-slate-500">Phone</div>
              <div className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-slate-900">
                <Phone size={14} />
                (+63) 994 260 6832
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4">
              <div className="text-sm text-slate-500">Location</div>
              <div className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-slate-900">
                Biñan, Laguna
                <ArrowRight size={14} className="text-slate-400" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
