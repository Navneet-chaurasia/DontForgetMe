import { motion, useReducedMotion } from 'motion/react';
import { FadeIn } from './FadeIn';
import { PhoneMockup } from './PhoneMockup';

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="min-h-[100dvh] flex items-center pt-16">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left: Copy */}
        <div className="max-w-xl">
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] text-text-primary"
          >
            Don't let your saved links disappear.
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 text-lg text-text-secondary leading-relaxed max-w-[50ch]"
          >
            DFM brings back the things you wanted to see, read, watch, and explore - before they get forgotten.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap gap-4 items-center"
          >
            <a
              href="#download"
              className="inline-flex items-center gap-2 px-6 py-3 bg-text-primary text-bg text-sm font-medium rounded-full hover:bg-white/90 transition-colors duration-200 active:scale-[0.98]"
            >
              <AppleIcon />
              Download on the App Store
            </a>
            <a
              href="#how-it-works"
              className="text-sm text-text-secondary hover:text-text-primary transition-colors duration-200"
            >
              See how it works
            </a>
          </motion.div>
        </div>

        {/* Right: Phone Mockup */}
        <FadeIn delay={0.3} direction="left" className="flex justify-center lg:justify-end">
          <PhoneMockup />
        </FadeIn>
      </div>
    </section>
  );
}

function AppleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <path d="M11.182 0c.15 1.083-.315 2.15-1.017 2.917-.717.767-1.833 1.35-2.95 1.267-.167-1.05.35-2.15 1.017-2.833C8.948.583 10.132.033 11.182 0zm2.95 5.517c-.167.1-1.95 1.133-1.933 3.383.017 2.683 2.35 3.567 2.383 3.583-.017.067-.367 1.283-1.233 2.517-.75 1.083-1.533 2.15-2.767 2.167-1.2.017-1.6-.717-2.983-.717-1.383 0-1.817.7-2.967.733-1.183.033-2.083-1.167-2.85-2.25C.217 12.767-.85 9.35.817 7.017c.817-1.15 2.283-1.883 3.867-1.9 1.167-.017 2.25.783 2.967.783.7 0 2.033-.967 3.417-.833.583.033 2.2.233 3.233 1.783-.083.05-.017-.033-.15.067z" />
    </svg>
  );
}
