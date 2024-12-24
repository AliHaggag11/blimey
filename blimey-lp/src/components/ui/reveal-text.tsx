import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface RevealTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export function RevealText({ text, className, delay = 0 }: RevealTextProps) {
  return (
    <div className="overflow-hidden">
      <motion.p
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          ease: [0.25, 1, 0.5, 1],
          delay
        }}
        className={cn("", className)}
      >
        {text}
      </motion.p>
    </div>
  );
} 