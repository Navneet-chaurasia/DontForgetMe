import { motion, useReducedMotion } from 'motion/react';
import { FadeIn, PopIn } from './FadeIn';
import dfmLogo from '@/assets/logos/dfm_logo.gif';

export function Problem() {
  const reduce = useReducedMotion();

  return (
    <section className="py-20 sm:py-28 md:py-40 lg:py-48 px-5 sm:px-8 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <FadeIn spring>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-[1.2] text-text-primary">
            We save hundreds of things.
            <br />
            <span className="text-text-secondary">We finish almost none.</span>
          </h2>
        </FadeIn>

        <div className="mt-10 sm:mt-14 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {[
            { label: 'Saved Reels', detail: '147 unwatched' },
            { label: 'Bookmarks', detail: '300+ articles' },
            { label: 'Watch Later', detail: 'Hundreds of videos' },
            { label: 'Screenshots', detail: 'Lost in camera roll' },
          ].map((card, i) => (
            <motion.div
              key={card.label}
              initial={reduce ? false : { opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                type: 'spring',
                stiffness: 120,
                damping: 18,
                delay: 0.1 + i * 0.08,
              }}
              whileHover={{ scale: 1.03, y: -2 }}
              className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-surface border border-border/50 text-left cursor-default"
            >
              <p className="text-xs sm:text-sm text-text-primary font-medium">{card.label}</p>
              <p className="mt-1 text-[10px] sm:text-xs text-text-muted">{card.detail}</p>
            </motion.div>
          ))}
        </div>

        <FadeIn delay={0.3} spring>
          <p className="mt-10 sm:mt-14 md:mt-16 text-base sm:text-lg md:text-xl text-text-secondary font-light max-w-[45ch] mx-auto leading-relaxed">
            The internet remembers everything.
            <br />
            But you don't.
          </p>
        </FadeIn>

        <PopIn delay={0.4} className="mt-10 sm:mt-14 flex justify-center">
          <img
            src={dfmLogo}
            alt="DFM animated logo"
            className="h-auto rounded-2xl max-w-full"
          />
        </PopIn>
      </div>
    </section>
  );
}
