import { motion, useReducedMotion } from 'motion/react';
import { FadeIn, PopIn } from './FadeIn';
import homePage from '@/assets/screenshots/dfm_home_page.webp';
import detailView from '@/assets/screenshots/dfm_detailed_saved_item_view.webp';
import completedPage from '@/assets/screenshots/dfm_completed_item_page.webp';
import searchPage from '@/assets/screenshots/dfm_search_page.webp';
import tagsSheet from '@/assets/screenshots/dfm_manage_tags_bottomsheet.webp';

export function ProductExperience() {
  const reduce = useReducedMotion();

  return (
    <section className="py-20 sm:py-28 md:py-40 lg:py-48 px-5 sm:px-8 md:px-12">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-text-primary text-center">
            Finally, control over what you save.
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-text-secondary text-center max-w-[45ch] mx-auto">
            A calm space to revisit, complete, and rediscover.
          </p>
        </FadeIn>

        {/* Main 3 screens */}
        <div className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          <PopIn delay={0.1}>
            <PhoneScreen
              image={homePage}
              alt="DFM home feed with categorized saves"
              label="Home Feed"
            />
          </PopIn>
          <PopIn delay={0.2}>
            <PhoneScreen
              image={detailView}
              alt="Detailed view of a saved item"
              label="Item Details"
            />
          </PopIn>
          <PopIn delay={0.3}>
            <PhoneScreen
              image={completedPage}
              alt="Completed items you have finished"
              label="Completed"
            />
          </PopIn>
        </div>

        {/* Secondary screens */}
        <div className="mt-6 sm:mt-8 grid grid-cols-2 gap-4 sm:gap-5 md:gap-6">
          <PopIn delay={0.15}>
            <PhoneScreen
              image={searchPage}
              alt="Search through all your saved content"
              label="Search"
            />
          </PopIn>
          <PopIn delay={0.25}>
            <PhoneScreen
              image={tagsSheet}
              alt="Manage tags to organize your saves"
              label="Tags"
            />
          </PopIn>
        </div>

        {/* Floating feature text */}
        <motion.p
          initial={reduce ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-10 sm:mt-14 text-center text-sm text-text-muted"
        >
          Search, tag, revisit. Everything in one place.
        </motion.p>
      </div>
    </section>
  );
}

function PhoneScreen({
  image,
  alt,
  label,
}: {
  image: string;
  alt: string;
  label: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      className="rounded-xl sm:rounded-2xl bg-surface border border-border/50 overflow-hidden group"
    >
      <div className="overflow-hidden">
        <img
          src={image}
          alt={alt}
          className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>
      <div className="px-4 py-3 sm:px-5 sm:py-4 border-t border-border/30">
        <p className="text-[10px] sm:text-xs text-text-muted">{label}</p>
      </div>
    </motion.div>
  );
}
