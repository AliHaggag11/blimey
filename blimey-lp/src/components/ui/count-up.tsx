import { useEffect, useState } from 'react';
import { motion, useInView, useSpring, animate } from 'framer-motion';
import { useRef } from 'react';

interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
}

export function CountUp({ end, duration = 3, suffix = '' }: CountUpProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const springValue = useSpring(0, {
    stiffness: 50,
    damping: 30,
    duration: duration * 1000,
  });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, end, {
        duration: duration,
        ease: [0.32, 0.72, 0, 1], // Custom easing function
        onUpdate(value) {
          springValue.set(value);
          setCount(Math.floor(value));
        }
      });

      return () => controls.stop();
    }
  }, [end, duration, isInView, springValue]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ 
        duration: 0.8,
        ease: [0.32, 0.72, 0, 1]
      }}
      className="text-5xl font-serif mb-2 relative group"
    >
      <motion.span
        initial={{ scale: 1 }}
        animate={{ scale: 1 }}
        whileInView={{ scale: 1.1 }}
        transition={{ 
          duration: 0.3,
          ease: "easeOut",
          delay: duration
        }}
      >
        {count.toLocaleString()}
        <span className="inline-block ml-1">{suffix}</span>
      </motion.span>
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
} 