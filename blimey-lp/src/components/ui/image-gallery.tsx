import { useEffect, useRef, useState } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import { PlaceholderImage } from './placeholder-image';

const galleryItems = [
  {
    id: '1',
    category: 'Luxury Wedding Reception',
    description: 'Elegant table settings and decorations'
  },
  {
    id: '2',
    category: 'Corporate Gala Event',
    description: 'Professional catering setup'
  },
  {
    id: '3',
    category: 'Private Dining Experience',
    description: 'Intimate dining arrangements'
  },
  {
    id: '4',
    category: 'Outdoor Catering',
    description: 'Garden party setup'
  },
  {
    id: '5',
    category: 'Buffet Display',
    description: 'Luxurious food presentation'
  },
  {
    id: '6',
    category: 'Chef\'s Table',
    description: 'Interactive dining experience'
  },
  {
    id: '7',
    category: 'Cocktail Reception',
    description: 'Elegant drink service'
  },
  {
    id: '8',
    category: 'Desert Station',
    description: 'Sweet treats display'
  }
];

export function ImageGallery() {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();
  const [isDragging, setIsDragging] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const animationRef = useRef<Animation>();

  // Triple the items for smoother looping
  const duplicatedItems = [...galleryItems, ...galleryItems, ...galleryItems];

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
      
      // Start from a negative position
      controls.set({ x: -width / 3 });
      startAutoScroll();
    }

    return () => {
      if (animationRef.current) {
        animationRef.current.cancel();
      }
      controls.stop();
    };
  }, [width]);

  const startAutoScroll = () => {
    const animation = carousel.current?.animate(
      [
        { transform: `translateX(${-width / 3}px)` },
        { transform: `translateX(${-width * 2/3}px)` }
      ],
      {
        duration: 40000,
        easing: 'linear',
        iterations: Infinity
      }
    );

    if (animation) {
      animationRef.current = animation;
    }
  };

  const handleDragStart = () => {
    setIsDragging(true);
    if (animationRef.current) {
      animationRef.current.pause();
    }
  };

  const handleDragEnd = () => {
    setIsDragging(false);
    if (!isHovering && animationRef.current) {
      const currentTime = animationRef.current.currentTime || 0;
      animationRef.current.play();
      animationRef.current.currentTime = currentTime;
    }
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
    if (animationRef.current) {
      animationRef.current.pause();
    }
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    if (!isDragging && animationRef.current) {
      const currentTime = animationRef.current.currentTime || 0;
      animationRef.current.play();
      animationRef.current.currentTime = currentTime;
    }
  };

  return (
    <div 
      className='w-full overflow-hidden py-12'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        ref={carousel}
        drag='x'
        dragConstraints={{ right: width / 3, left: -width * 2/3 }}
        dragElastic={0.2}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        className='flex will-change-transform cursor-grab active:cursor-grabbing'
      >
        {duplicatedItems.map((item, index) => (
          <motion.div 
            key={`${item.id}-${index}`}
            className='min-w-[20rem] min-h-[25rem] p-2 group relative overflow-hidden'
            whileHover={{ scale: isDragging ? 1 : 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className='w-full h-full rounded-xl overflow-hidden'>
              <PlaceholderImage 
                category={item.category}
                width={400}
                height={400}
                className='w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6 flex flex-col justify-end rounded-xl'>
                <h3 className='text-white text-xl font-serif mb-2'>{item.category}</h3>
                <p className='text-white/80 text-sm'>{item.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
} 