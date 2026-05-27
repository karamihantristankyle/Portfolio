import { useEffect, useState, type FocusEvent, type TouchEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const githubProfile = 'https://github.com/karamihantristankyle';
const githubRepos = `${githubProfile}?tab=repositories`;
const assetBase = import.meta.env.BASE_URL;

const projects = [
  {
    title: 'MotoTrack',
    category: 'Featured / Full Stack',
    previews: [
      `${assetBase}mototrack-1.png`,
      `${assetBase}mototrack-2.png`,
      `${assetBase}mototrack-3.png`,
      `${assetBase}mototrack-4.png`,
    ],
    previewAlt: 'MotoTrack live app preview',
    intro: 'A motorcycle-focused tracking product with an emphasis on account flow, visibility, and clear everyday use.',
    description: 'MotoTrack is built around rider access, monitoring views, and a straightforward interface that keeps the product easy to understand from the first screen onward.',
    tech: ['React', 'Tracking UI', 'Authentication', 'Product Design'],
    link: 'https://mototrackph.vercel.app',
    github: githubProfile,
    highlights: ['Rider auth', 'Trip visibility', 'Clean flow'],
  },
  {
    title: 'StressBuster',
    category: 'Featured / Game Dev',
    previews: [
      `${assetBase}stressbuster-1.png`,
      `${assetBase}stressbuster-2.png`,
      `${assetBase}stressbuster-3.png`,
      `${assetBase}stressbuster-4.png`,
    ],
    previewAlt: 'StressBuster live app preview',
    intro: 'A game-inspired wellness concept that uses calm visuals, simple interaction, and a lighter emotional tone.',
    description: 'StressBuster explores how a soft interface, focused flow, and approachable UI can make a simple self-care idea feel more engaging without overcomplicating it.',
    tech: ['Interactive UI', 'HTML', 'Tailwind CSS', 'Game Feel'],
    link: 'https://stressbuster.vercel.app',
    github: githubProfile,
    highlights: ['Calming UI', 'Playful flow', 'Soft feedback'],
  },
  {
    title: 'AttendanceScheduleManager',
    category: 'Featured / Productivity',
    previews: [
      `${assetBase}attendance-1.png`,
      `${assetBase}attendance-2.png`,
      `${assetBase}attendance-3.png`,
      `${assetBase}attendance-4.png`,
    ],
    previewAlt: 'Attendance Schedule Manager live app preview',
    intro: 'A school-focused workflow tool for handling attendance, schedules, and day-to-day admin access in one place.',
    description: 'This project is structured to support practical school operations, with a clean login flow and a layout designed around fast daily use instead of cluttered controls.',
    tech: ['React', 'TypeScript', 'Express', 'Vite'],
    link: 'https://the-attendance.vercel.app',
    github: 'https://github.com/karamihantristankyle/Schedule-Attendance-Manager',
    highlights: ['Teacher login', 'Attendance flow', 'School admin'],
  },
  {
    title: 'MotoPeek',
    category: 'More Work / Product UI',
    previews: [
      `${assetBase}motopeek-1.png`,
      `${assetBase}motopeek-2.png`,
      `${assetBase}motopeek-3.png`,
      `${assetBase}motopeek-4.png`,
    ],
    previewAlt: 'MotoPeek live app preview',
    intro: 'A motorcycle customizer built to make browsing variants and visual choices feel more interactive.',
    description: 'MotoPeek focuses on product presentation, option browsing, and a smoother way to compare motorcycle styles without turning the interface into noise.',
    tech: ['JavaScript', 'Customizer', 'Interactive UI', 'Product Experience'],
    link: 'https://motopeek.vercel.app',
    github: 'https://github.com/karamihantristankyle/MotoPeek',
  },
  {
    title: 'Capstoned',
    category: 'More Work / E-Commerce',
    previews: [
      `${assetBase}capstoned-1.png`,
      `${assetBase}capstoned-2.png`,
      `${assetBase}capstoned-3.png`,
      `${assetBase}capstoned-4.png`,
    ],
    previewAlt: 'Capstoned live storefront preview',
    intro: 'An e-commerce storefront built to feel polished, premium, and easy to browse.',
    description: 'Capstoned brings together product presentation, smoother motion, and a cleaner shopping flow to make the storefront feel more deliberate than a generic shop template.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    link: 'https://capstoned.vercel.app',
    github: 'https://github.com/karamihantristankyle/Capstoned',
  },
  {
    title: 'Cafe-Inventory-POS',
    category: 'More Work / Business System',
    previews: [
      `${assetBase}cafestone-1.png`,
      `${assetBase}cafestone-2.png`,
      `${assetBase}cafestone-3.png`,
      `${assetBase}cafestone-4.png`,
    ],
    previewAlt: 'Cafe Inventory POS live system preview',
    intro: 'A cafe operations system that combines inventory visibility and point-of-sale workflows.',
    description: 'This build is centered on practical store operations, giving the business a clearer way to track stock, process sales, and reduce friction in daily use.',
    link: 'https://cafe-inventory-pos.vercel.app',
    github: 'https://github.com/karamihantristankyle/Cafe-Inventory-POS',
    tech: ['JavaScript', 'POS', 'Inventory', 'Business Tools'],
  },
];

const featuredProjects = projects.slice(0, 3);
const otherProjects = projects.slice(3);

const PreviewCarousel = ({
  images,
  alt,
  compact = false,
}: {
  images: string[];
  alt: string;
  compact?: boolean;
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener('change', updatePreference);

    return () => mediaQuery.removeEventListener('change', updatePreference);
  }, []);

  useEffect(() => {
    if (images.length <= 1 || isPaused || prefersReducedMotion) return undefined;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, 3600);

    return () => window.clearInterval(interval);
  }, [images, isPaused, prefersReducedMotion]);

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + images.length) % images.length);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % images.length);
  };

  const showImage = (index: number) => {
    setActiveIndex(index);
  };

  const handleFocusLeave = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setIsPaused(false);
    }
  };

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    setIsPaused(true);
    setTouchStartX(event.touches[0]?.clientX ?? null);
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStartX === null) {
      setIsPaused(false);
      return;
    }

    const touchEndX = event.changedTouches[0]?.clientX ?? touchStartX;
    const travel = touchStartX - touchEndX;

    if (Math.abs(travel) > 40) {
      if (travel > 0) {
        showNext();
      } else {
        showPrevious();
      }
    }

    setTouchStartX(null);
    setIsPaused(false);
  };

  return (
    <div
      className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_18px_45px_-32px_rgba(15,23,42,0.45)]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={handleFocusLeave}
    >
      <div
        className={`relative w-full overflow-hidden bg-slate-100 ${
          compact ? 'aspect-[16/11] sm:aspect-[16/10]' : 'aspect-[16/11] md:aspect-[16/10]'
        }`}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onTouchCancel={() => {
          setTouchStartX(null);
          setIsPaused(false);
        }}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={images[activeIndex]}
            src={images[activeIndex]}
            alt={alt}
            className="absolute inset-0 h-full w-full object-cover object-top"
            loading="lazy"
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 1.025 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.985 }}
            transition={
              prefersReducedMotion
                ? { duration: 0.15 }
                : { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
            }
          />
        </AnimatePresence>

        {images.length > 1 && (
          <>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-950/15 to-transparent" />
            <div className="absolute left-4 top-4 inline-flex items-center rounded-full border border-white/60 bg-white/85 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm backdrop-blur">
              {String(activeIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
            </div>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="flex flex-col gap-3 border-t border-slate-200 bg-white px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={showPrevious}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition-all hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-950"
                aria-label="Show previous project screenshot"
              >
                <ChevronLeft size={17} />
              </button>
              <button
                type="button"
                onClick={showNext}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition-all hover:-translate-y-0.5 hover:border-slate-300 hover:text-slate-950"
                aria-label="Show next project screenshot"
              >
                <ChevronRight size={17} />
              </button>
            </div>

            <div className="text-xs font-medium uppercase tracking-[0.16em] text-slate-400">
              {isPaused ? 'Paused' : 'Auto view'}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {images.map((image, index) => (
              <button
                key={image}
                type="button"
                onClick={() => showImage(index)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full"
                aria-label={`Show screenshot ${index + 1}`}
                aria-pressed={index === activeIndex}
              >
                <span
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === activeIndex ? 'w-7 bg-slate-950' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="border-t border-slate-200 px-4 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
              Selected Work
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Projects worth opening.
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
              A mix of product builds, business systems, and interactive experiments, now shown with actual previews instead of filler summaries.
            </p>
          </div>
          <a
            href={githubRepos}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium text-slate-700 hover:text-slate-950 transition-colors"
          >
            View All On GitHub
            <ArrowRight size={16} />
          </a>
        </div>

        <div className="space-y-6">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
                <div className="border-b border-slate-200 bg-slate-50 p-4 lg:border-b-0 lg:border-r">
                  <PreviewCarousel images={project.previews} alt={project.previewAlt} />
                </div>
                <div className="p-8">
                  <div className="text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
                    {project.category}
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-lg leading-8 text-slate-700">
                    {project.intro}
                  </p>
                  <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
                    {project.description}
                  </p>

                  <div className="mt-6 grid gap-3 sm:grid-cols-3">
                    {project.highlights?.map((highlight) => (
                      <div
                        key={highlight}
                        className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700"
                      >
                        {highlight}
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-slate-200 px-3 py-1 text-sm text-slate-600"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-medium text-white hover:bg-slate-800 transition-colors"
                    >
                      Live Demo
                      <ExternalLink size={16} />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-5 py-3 text-sm font-medium text-slate-700 hover:border-slate-300 hover:text-slate-950 transition-colors"
                    >
                      GitHub
                      <Github size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <div className="mb-8 text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
            More Projects
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.06 }}
                viewport={{ once: true }}
                className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm"
              >
                <div className="border-b border-slate-200 bg-slate-50 p-4">
                  <PreviewCarousel images={project.previews} alt={project.previewAlt} compact />
                </div>
                <div className="p-6">
                  <div className="text-sm font-medium text-slate-500">{project.category}</div>
                  <h3 className="mt-3 text-xl font-semibold text-slate-950">{project.title}</h3>
                  <p className="mt-3 text-base leading-7 text-slate-700">{project.intro}</p>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600"
                    >
                      {t}
                    </span>
                  ))}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-slate-950 hover:text-slate-700"
                    >
                      Live Demo
                      <ExternalLink size={15} />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-950"
                    >
                      GitHub
                      <Github size={15} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
