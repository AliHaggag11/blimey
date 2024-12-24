import { useRef } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  useAnimationFrame,
  useMotionValue,
} from 'framer-motion';
import { wrap } from '@motionone/utils';
import { cn } from '@/lib/utils';

interface ScrollTextProps {
  children: string;
  baseVelocity?: number;
  clasname?: string;
}

export function ScrollText({
  children,
  baseVelocity = -2,
  clasname,
}: ScrollTextProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 300,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);
  const directionFactor = useRef<number>(1);

  useAnimationFrame((_, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden whitespace-nowrap flex flex-nowrap py-8 bg-primary text-primary-foreground">
      <motion.div
        className="flex whitespace-nowrap gap-20 flex-nowrap"
        style={{ x }}
      >
        <span className={cn(`block text-6xl md:text-7xl font-serif text-primary-foreground/90`, clasname)}>
          {children} • {children} • {children} • {children}
        </span>
      </motion.div>
    </div>
  );
} 