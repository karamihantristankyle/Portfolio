import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Mail } from 'lucide-react';
import { cn } from '../lib/utils';

const navLinks = [
  { name: 'Work', href: '#projects' },
  { name: 'About', href: '#about' },
  { name: 'Stack', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const scrollToSection = (href: string) => {
    const target = document.querySelector(href);
    if (!target) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const navbarOffset = 88;
    const targetPosition = target.getBoundingClientRect().top + window.scrollY - navbarOffset;

    if (prefersReducedMotion) {
      window.scrollTo(0, targetPosition);
      window.history.replaceState(null, '', href);
      return;
    }

    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 700;
    let startTime: number | null = null;

    const easeInOutCubic = (progress: number) =>
      progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

    const animateScroll = (currentTime: number) => {
      if (startTime === null) {
        startTime = currentTime;
      }

      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeInOutCubic(progress);

      window.scrollTo(0, startPosition + distance * easedProgress);

      if (progress < 1) {
        window.requestAnimationFrame(animateScroll);
        return;
      }

      window.history.replaceState(null, '', href);
    };

    window.requestAnimationFrame(animateScroll);

  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        scrolled
          ? 'bg-white/92 backdrop-blur-md border-b border-slate-200/80 py-4'
          : 'bg-white/80 backdrop-blur-sm border-b border-transparent py-5'
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <motion.button
            type="button"
            onClick={() => scrollToSection('#home')}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-left"
          >
            <div className="text-base sm:text-lg font-semibold tracking-tight text-slate-950">
              Tristan Karamihan
            </div>
            <div className="text-sm text-slate-500">
              Full Stack Developer & Game Developer
            </div>
          </motion.button>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                type="button"
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-medium text-slate-600 hover:text-slate-950 transition-colors"
              >
                {link.name}
              </button>
            ))}

            <div className="flex items-center gap-3 pl-2">
              <a
                href="https://github.com/karamihantristankyle"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-950 transition-colors"
              >
                <Github size={16} />
                GitHub
              </a>
              <a
                href="mailto:karamihan.tristankyle@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 transition-colors"
              >
                <Mail size={16} />
                Email Me
              </a>
            </div>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-700 hover:text-slate-950"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
              initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            className="lg:hidden border-b border-slate-200 bg-white"
          >
            <div className="max-w-6xl mx-auto px-4 pb-6 pt-2 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  type="button"
                  onClick={() => {
                    scrollToSection(link.href);
                    setIsOpen(false);
                  }}
                  className="block w-full rounded-2xl px-4 py-3 text-left text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-slate-950 transition-colors"
                >
                  {link.name}
                </button>
              ))}
              <div className="grid grid-cols-2 gap-3 pt-4">
                <a
                  href="https://github.com/karamihantristankyle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700"
                >
                  <Github size={16} />
                  GitHub
                </a>
                <a
                  href="mailto:karamihan.tristankyle@gmail.com"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-4 py-3 text-sm font-medium text-white"
                >
                  <Mail size={16} />
                  Email
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
