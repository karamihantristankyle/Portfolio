import { type ReactNode } from 'react';
import { Github, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white px-4 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-base font-semibold text-slate-950">Tristan Karamihan</div>
            <div className="mt-1 text-sm text-slate-500">Full Stack Developer and Game Developer</div>
          </div>

          <div className="flex gap-3">
            <SocialLink href="https://github.com/karamihantristankyle" icon={<Github size={20} />} external />
            <SocialLink href="mailto:karamihan.tristankyle@gmail.com" icon={<Mail size={20} />} />
          </div>

          <div className="text-sm text-slate-500">
            © {new Date().getFullYear()} Tristan&apos;s Portfolio
          </div>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon, external = false }: { href: string; icon: ReactNode; external?: boolean }) => (
  <a
    href={href}
    target={external ? '_blank' : undefined}
    rel={external ? 'noopener noreferrer' : undefined}
    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-colors hover:border-slate-300 hover:text-slate-950"
  >
    {icon}
  </a>
);

export default Footer;
