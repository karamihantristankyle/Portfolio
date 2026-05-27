import { motion } from 'framer-motion';

type ProfileSummaryCardProps = {
  className?: string;
};

const ProfileSummaryCard = ({ className = '' }: ProfileSummaryCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15, duration: 0.5 }}
      className={className}
    >
      <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6 shadow-sm">
        <div className="rounded-[1.5rem] border border-slate-200 bg-white p-6">
          <div className="flex items-center gap-4">
            <div className="h-20 w-20 overflow-hidden rounded-2xl bg-slate-100">
              <img
                src={`${import.meta.env.BASE_URL}profile.png`}
                alt="Tristan profile photo"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <div className="text-lg font-semibold text-slate-950">Tristan</div>
              <div className="text-sm text-slate-500">Building across web, workflow, and game-inspired interaction</div>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <div className="rounded-2xl bg-slate-50 p-4">
              <div className="text-sm text-slate-500">Selected priorities</div>
              <div className="mt-2 text-sm leading-6 text-slate-700">
                Clean UI, straightforward UX, maintainable code, and products people can actually use.
              </div>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <div className="text-sm text-slate-500">Current portfolio</div>
              <div className="mt-2 text-sm leading-6 text-slate-700">
                Business systems, interactive websites, and practical full-stack builds from my GitHub work.
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileSummaryCard;
