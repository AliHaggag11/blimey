import { useEffect, useId } from 'react';
import { AnimatePresence, motion, MotionConfig } from 'framer-motion';
import { X as XIcon } from 'lucide-react';

interface MenuModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const transition = {
  type: 'spring',
  duration: 0.4,
};

export function MenuModal({ children, isOpen, onClose }: MenuModalProps) {
  const uniqueId = useId();

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen, onClose]);

  return (
    <MotionConfig transition={transition}>
      <AnimatePresence initial={false} mode='wait'>
        {isOpen && (
          <>
            <motion.div
              key={`backdrop-${uniqueId}`}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
            />
            <motion.div
              className="fixed inset-0 flex items-center justify-center z-[100] p-4 sm:p-6 md:p-8"
            >
              <motion.div
                className="relative bg-background w-full max-w-[95vw] md:max-w-4xl lg:max-w-5xl 
                  h-[90vh] md:h-auto md:max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl"
                layoutId={`dialog-${uniqueId}`}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
              >
                <div className="h-full overflow-y-auto">
                  {children}
                </div>
                <button
                  onClick={onClose}
                  className="absolute right-4 top-4 md:right-6 md:top-6 p-2 rounded-full 
                    bg-background/80 hover:bg-background shadow-lg backdrop-blur-sm
                    border border-border hover:border-primary/20
                    transition-all duration-200 hover:scale-105"
                  type="button"
                  aria-label="Close menu"
                >
                  <XIcon className="w-5 h-5 md:w-6 md:h-6" />
                </button>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </MotionConfig>
  );
} 