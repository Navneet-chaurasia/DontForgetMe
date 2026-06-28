import { motion, useReducedMotion } from 'motion/react';

export function Nav() {
  const reduce = useReducedMotion();

  return (
    <motion.nav
      initial={reduce ? false : { opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 sm:px-8 md:px-12 h-14 sm:h-16 bg-bg/80 backdrop-blur-xl border-b border-border/50"
    >
      <a href="#" className="text-text-primary font-medium tracking-tight text-base sm:text-lg">
        DFM
      </a>
      <a
        href="#download"
        className="text-xs sm:text-sm text-text-secondary hover:text-text-primary transition-colors duration-200"
      >
        Download
      </a>
    </motion.nav>
  );
}
