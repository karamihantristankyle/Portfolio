import { type ReactNode } from 'react';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Tan's Portfolio
          </div>

          <div className="flex space-x-6">
            <SocialLink href="#" icon={<Github size={20} />} />
            <SocialLink href="#" icon={<Linkedin size={20} />} />
            <SocialLink href="#" icon={<Twitter size={20} />} />
            <SocialLink href="#" icon={<Instagram size={20} />} />
          </div>

          <div className="text-sm text-slate-500 dark:text-slate-500">
            © {new Date().getFullYear()} All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: ReactNode }) => (
  <a
    href={href}
    className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white transition-all"
  >
    {icon}
  </a>
);

export default Footer;
