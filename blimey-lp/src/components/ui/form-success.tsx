import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export function FormSuccess() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="absolute inset-0 bg-primary flex flex-col items-center justify-center
        rounded-xl border border-white/20"
      exit={{ opacity: 0, y: 10 }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent)]" />
      <div className="absolute inset-0 bg-[linear-gradient(60deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />

      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ 
          delay: 0.2, 
          type: "spring",
          bounce: 0.5 
        }}
        className="w-20 h-20 rounded-full bg-white/10 border border-white/20 flex items-center 
          justify-center mb-6 relative z-10 group"
      >
        <div className="absolute inset-0 rounded-full bg-white/5 blur-xl opacity-0 
          group-hover:opacity-100 transition-opacity duration-500" />
        <Check className="w-10 h-10 text-white group-hover:scale-110 transition-transform duration-500" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-center relative z-10"
      >
        <h3 className="text-3xl font-serif mb-3 text-white">Message Sent!</h3>
        <p className="text-white/80 text-lg">
          We'll get back to you within 24 hours
        </p>
        <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/30 to-transparent 
          mx-auto mt-6" />
      </motion.div>
    </motion.div>
  );
} 