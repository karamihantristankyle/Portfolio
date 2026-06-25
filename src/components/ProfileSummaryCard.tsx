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
              <div className="text-sm text-slate-500">Developer · Laguna</div>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <div className="rounded-2xl bg-slate-50 p-4">
              <div className="text-sm text-slate-500">What I care about</div>
              <div className="mt-2 text-sm leading-6 text-slate-700">
                Ship working software. Keep interfaces readable. Don&apos;t overbuild.
              </div>
            </div>
            <div className="rounded-2xl bg-slate-50 p-4">
              <div className="text-sm text-slate-500">Recent work</div>
              <div className="mt-2 text-sm leading-6 text-slate-700">
                Storefronts, school tools, POS systems, and side projects — all live and linked below.
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileSummaryCard;
