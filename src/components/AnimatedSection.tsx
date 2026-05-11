import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import { useReducedMotionPreference } from '../hooks/useReducedMotionPreference';

type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function AnimatedSection({ children, className = '', delay = 0 }: AnimatedSectionProps) {
  const reduceMotion = useReducedMotionPreference();

  return (
    <motion.section
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, ease: 'easeOut', delay }}
    >
      {children}
    </motion.section>
  );
}
