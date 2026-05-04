import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-28 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          {/* Profile Picture Section */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative mb-8"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full p-1 bg-gradient-to-tr from-primary via-accent to-secondary animate-gradient-xy">
              <div className="w-full h-full rounded-full border-4 border-white dark:border-slate-950 overflow-hidden bg-slate-200">
                <img
                  src={`${import.meta.env.BASE_URL}profile.png`}
                  alt="Tristan Kyle Karamihan"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5] 
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
              className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 border-4 border-white dark:border-slate-950 rounded-full"
            />
          </motion.div>

          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Available for new opportunities
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-8 leading-[1.1] md:leading-[1.15]">
            Hi, I'm <span className="text-primary block md:inline">Tristan Kyle Karamihan.</span>
            <span className="block mt-2 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              A Creative Developer.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 text-balance">
            I'm a Full Stack Developer passionate about crafting beautiful, high-performance web applications that solve real-world problems.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="px-8 py-4 bg-primary text-white rounded-full font-semibold flex items-center gap-2 hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25 w-full sm:w-auto justify-center"
            >
              View My Work
              <ArrowRight size={20} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/resume.pdf"
              className="px-8 py-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 rounded-full font-semibold flex items-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors w-full sm:w-auto justify-center"
            >
              Download CV
              <Download size={20} />
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-20 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-50 dark:to-slate-950 z-10" />
          <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl mx-auto max-w-5xl">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"
              alt="Developer Workspace"
              className="w-full h-auto object-cover max-h-[500px]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
