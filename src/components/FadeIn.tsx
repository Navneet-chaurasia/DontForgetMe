import { motion, useReducedMotion } from 'motion/react';
import { type ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  spring?: boolean;
}

export function FadeIn({
  children,
  delay = 0,
  className = '',
  direction = 'up',
  spring = false,
}: FadeInProps) {
  const reduce = useReducedMotion();

  const directionMap = {
    up: { y: 32 },
    down: { y: -32 },
    left: { x: 32 },
    right: { x: -32 },
    none: {},
  };

  const transition = spring
    ? { type: 'spring' as const, stiffness: 100, damping: 20, delay }
    : { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const };

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, ...directionMap[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function PopIn({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        type: 'spring',
        stiffness: 150,
        damping: 18,
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
