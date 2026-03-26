import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  image: string;
  title?: string;
}

export default function Lightbox({ isOpen, onClose, image, title }: LightboxProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-10"
          onClick={onClose}
        >
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors p-2 bg-white/10 rounded-full backdrop-blur-md"
            onClick={onClose}
          >
            <X size={24} />
          </motion.button>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={image}
              alt={title || 'Full screen preview'}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              referrerPolicy="no-referrer"
            />
            {title && (
              <motion.h3 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 text-white text-2xl md:text-4xl font-display uppercase tracking-tighter text-center"
              >
                {title}
              </motion.h3>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
