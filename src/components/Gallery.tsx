import React from 'react';
import { motion } from 'framer-motion';

const images = [
  "https://picsum.photos/seed/event1/800/600",
  "https://picsum.photos/seed/event2/800/600",
  "https://picsum.photos/seed/event3/800/600",
  "https://picsum.photos/seed/event4/800/600",
  "https://picsum.photos/seed/event5/800/600",
  "https://picsum.photos/seed/event6/800/600",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="hidden md:block absolute top-1/2 left-0 text-[15rem] font-display font-bold text-black/[0.02] dark:text-white/[0.02] select-none pointer-events-none -translate-y-1/2 -rotate-90">
        MOMENTS
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-display font-bold mb-6 dark:text-white leading-[0.96]"
          >
            COMMUNITY <br />
            <span className="text-google-blue">MOMENTS</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg sm:text-xl md:text-2xl text-black dark:text-gray-300 max-w-3xl mx-auto font-medium leading-relaxed"
          >
            Capturing the energy, innovation, and collaboration of our community events.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-10"
        >
          {images.map((img, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="brutal-card aspect-square overflow-hidden cursor-pointer group bg-white dark:bg-black"
            >
              <img 
                src={img} 
                alt={`Gallery ${index}`} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110 group-hover:rotate-3"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
