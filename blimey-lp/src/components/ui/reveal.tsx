import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  blur?: boolean;
  once?: boolean;
  distance?: number;
}

export function Reveal({ 
  children, 
  delay = 0, 
  duration = 0.8,
  direction = 'up',
  blur = true,
  once = true,
  distance = 100
}: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once,
    margin: '-100px',
  });

  const directionOffset = {
    up: distance,
    down: -distance,
    left: distance,
    right: -distance,
    none: 0
  };

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' || direction === 'down' ? directionOffset[direction] : 0,
      x: direction === 'left' || direction === 'right' ? directionOffset[direction] : 0,
      filter: blur ? 'blur(20px)' : 'blur(0px)',
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      filter: 'blur(0px)',
      scale: 1,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.1, 0, 1],
        opacity: { duration: duration * 1.5 },
        filter: { duration: duration * 1.2 },
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="will-change-transform will-change-opacity"
    >
      {children}
    </motion.div>
  );
} 