import { useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';
import { useMediaQuery } from '@/hooks/use-media-query';

export function CustomCursor() {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const cursorSize = 30;

  // Single motion value for cursor position
  const cursorX = useSpring(0, {
    damping: 20,
    stiffness: 250,
    mass: 0.5
  });
  const cursorY = useSpring(0, {
    damping: 20,
    stiffness: 250,
    mass: 0.5
  });

  useEffect(() => {
    if (!isDesktop) return;

    const updateMousePosition = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener('mousemove', updateMousePosition);
    
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, [cursorX, cursorY, isDesktop]);

  if (!isDesktop) return null;

  const cursorStyles = {
    x: cursorX,
    y: cursorY,
    translateX: "-50%",
    translateY: "-50%"
  };

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[200] mix-blend-difference will-change-transform"
      >
        <motion.div
          className="rounded-full bg-white"
          style={{
            ...cursorStyles,
            width: cursorSize,
            height: cursorSize,
          }}
        />
      </motion.div>

      {/* Dot cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[200] mix-blend-difference will-change-transform"
      >
        <motion.div
          className="w-2 h-2 rounded-full bg-white"
          style={cursorStyles}
        />
      </motion.div>

      {/* Glow effect */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[199] will-change-transform"
      >
        <motion.div
          className="rounded-full bg-white blur-[20px] opacity-15"
          style={{
            ...cursorStyles,
            width: cursorSize * 2.5,
            height: cursorSize * 2.5
          }}
        />
      </motion.div>
    </>
  );
} 