import { motion, useReducedMotion } from 'motion/react';
import { FadeIn, PopIn } from './FadeIn';
import appOnHomeScreen from '@/assets/screenshots/dfm_app_icon_iphone_home_screen.webp';

export function FinalCta() {
  const reduce = useReducedMotion();

  return (
    <section id="download" className="py-20 sm:py-28 md:py-40 lg:py-48 px-5 sm:px-8 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <FadeIn spring>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-tight leading-[1.15] text-text-primary">
            Your next favorite thing shouldn't stay forgotten.
          </h2>
        </FadeIn>

        <FadeIn delay={0.15} spring>
          <div className="mt-8 sm:mt-10">
            <motion.a
              href="#"
              whileHover={reduce ? {} : { scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="inline-flex items-center gap-2 px-7 sm:px-8 py-3.5 sm:py-4 bg-text-primary text-bg text-sm font-medium rounded-full"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                <path d="M11.182 0c.15 1.083-.315 2.15-1.017 2.917-.717.767-1.833 1.35-2.95 1.267-.167-1.05.35-2.15 1.017-2.833C8.948.583 10.132.033 11.182 0zm2.95 5.517c-.167.1-1.95 1.133-1.933 3.383.017 2.683 2.35 3.567 2.383 3.583-.017.067-.367 1.283-1.233 2.517-.75 1.083-1.533 2.15-2.767 2.167-1.2.017-1.6-.717-2.983-.717-1.383 0-1.817.7-2.967.733-1.183.033-2.083-1.167-2.85-2.25C.217 12.767-.85 9.35.817 7.017c.817-1.15 2.283-1.883 3.867-1.9 1.167-.017 2.25.783 2.967.783.7 0 2.033-.967 3.417-.833.583.033 2.2.233 3.233 1.783-.083.05-.017-.033-.15.067z" />
              </svg>
              Download DFM
            </motion.a>
          </div>
        </FadeIn>

        {/* App on home screen showcase */}
        <PopIn delay={0.3} className="mt-12 sm:mt-16 flex justify-center">
          <div className="relative w-[240px] sm:w-[280px] md:w-[320px]">
            <img
              src={appOnHomeScreen}
              alt="DFM app icon on iPhone home screen"
              className="w-full h-auto block rounded-2xl sm:rounded-3xl shadow-2xl shadow-black/50"
            />
            <div className="absolute -inset-8 sm:-inset-12 -z-10 bg-accent/5 rounded-full blur-3xl" />
          </div>
        </PopIn>

        <FadeIn delay={0.4}>
          <p className="mt-8 sm:mt-10 text-[10px] sm:text-xs text-text-muted">
            Available on iOS. Android coming soon.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
