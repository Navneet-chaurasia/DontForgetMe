import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';
import { FadeIn } from './FadeIn';
import detailView from '@/assets/screenshots/dfm_detailed_saved_item_view.webp';
import completedPage from '@/assets/screenshots/dfm_completed_item_page.webp';
import searchPage from '@/assets/screenshots/dfm_search_page.webp';
import tagsSheet from '@/assets/screenshots/dfm_manage_tags_bottomsheet.webp';
import settingsPage from '@/assets/screenshots/dfm_setting_page.webp';

const screens = [
  { image: detailView, label: 'Item Details' },
  { image: completedPage, label: 'Completed' },
  { image: searchPage, label: 'Search' },
  { image: tagsSheet, label: 'Tags' },
  { image: settingsPage, label: 'Settings' },
];

export function ProductExperience() {
  const [stack, setStack] = useState(screens.map((_, i) => i));
  const [swiping, setSwiping] = useState(false);
  const reduce = useReducedMotion();

  function dismissTop() {
    if (swiping) return;
    setSwiping(true);
    setTimeout(() => {
      setStack((prev) => {
        const [top, ...rest] = prev;
        return [...rest, top];
      });
      setSwiping(false);
    }, 300);
  }

  return (
    <section className="py-20 sm:py-28 md:py-40 lg:py-48 px-5 sm:px-8 md:px-12">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-tight text-text-primary text-center">
            Finally, control over what you save.
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-text-secondary text-center max-w-[45ch] mx-auto">
            Swipe through the experience.
          </p>
        </FadeIn>

        {/* Card stack */}
        <div className="mt-12 sm:mt-16 md:mt-20 flex justify-center">
          <div className="relative w-[280px] sm:w-[300px] md:w-[320px] aspect-[9/16]">
            <AnimatePresence>
              {stack.slice(0, 4).map((screenIndex, stackPos) => {
                const screen = screens[screenIndex];
                const isTop = stackPos === 0;

                return (
                  <motion.div
                    key={screenIndex}
                    className="absolute inset-0 rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl shadow-black/30 touch-pan-y"
                    style={{
                      zIndex: screens.length - stackPos,
                    }}
                    initial={reduce ? false : { scale: 0.9, opacity: 0 }}
                    animate={{
                      scale: 1 - stackPos * 0.05,
                      y: stackPos * 12,
                      rotate: stackPos === 0 ? 0 : stackPos % 2 === 0 ? stackPos * 1.5 : -stackPos * 1.5,
                      opacity: stackPos < 3 ? 1 : 0.5,
                    }}
                    exit={{
                      x: 300,
                      rotate: 15,
                      opacity: 0,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 200,
                      damping: 22,
                    }}
                    drag={isTop ? 'x' : false}
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={0.8}
                    onDragEnd={(_, info) => {
                      if (Math.abs(info.offset.x) > 80 || Math.abs(info.velocity.x) > 400) {
                        dismissTop();
                      }
                    }}
                  >
                    <img
                      src={screen.image}
                      alt={screen.label}
                      className="w-full h-full object-cover select-none pointer-events-none"
                      draggable={false}
                    />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* Label + tap hint */}
        <motion.div
          key={stack[0]}
          initial={reduce ? false : { opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-text-secondary">{screens[stack[0]].label}</p>
          <p className="mt-2 text-[10px] sm:text-xs text-text-muted">Swipe or tap to see more</p>
        </motion.div>

        {/* Tap to dismiss on mobile */}
        <div className="mt-4 flex justify-center">
          <button
            onClick={dismissTop}
            className="px-4 py-2 rounded-full border border-border/50 text-xs text-text-muted hover:text-text-primary hover:border-border transition-all duration-200 active:scale-95"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
