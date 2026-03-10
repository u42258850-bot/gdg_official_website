import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.2]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="relative min-h-screen flex items-start justify-center overflow-hidden pt-14 md:pt-20"
    >
      {/* Background Elements */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 grid-pattern opacity-50" 
      />
      
      {/* Animated Shapes with Parallax */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          style={{ y: y1, rotate }}
          animate={{ 
            x: [0, 20, 0],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] left-[5%] w-32 h-32 bg-google-blue/10 border-4 border-google-blue/20 rounded-3xl"
        />
        <motion.div 
          style={{ y: y2, rotate: -rotate }}
          animate={{ 
            x: [0, -20, 0],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[15%] right-[10%] w-48 h-48 bg-google-red/10 border-4 border-google-red/20 rounded-full"
        />
        <motion.div 
          style={{ scale }}
          animate={{ 
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[35%] right-[15%] w-40 h-40 bg-google-yellow/10 border-4 border-google-yellow/20 rounded-full"
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute bottom-[10%] left-[15%] w-24 h-24 bg-google-green/10 border-4 border-google-green/20 rounded-xl rotate-12"
        />
      </div>

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center -mt-2 md:-mt-6"
      >
        <motion.div style={{ y: contentY }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, type: "spring", bounce: 0.4 }}
            className="mb-8 md:mb-10 flex justify-center relative"
          >
            <div className="absolute -inset-4 bg-google-blue/20 rounded-full blur-2xl animate-pulse" />
            <img 
              src="/apple-touch-icon.png" 
              alt="GDGOC Logo" 
              className="w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 object-contain animate-float relative z-10"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://firebasestorage.googleapis.com/v0/b/antigravity-build.appspot.com/o/users%2Fpatelchidatma%40gmail.com%2Fassets%2Flogo.png?alt=media&token=2609044b-4860-466d-99d7-8490a612711d";
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full border-2 border-black dark:border-white bg-white dark:bg-black mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]"
          >
            <span className="w-3 h-3 rounded-full bg-google-green animate-pulse" />
            <span className="text-sm font-bold uppercase tracking-widest text-black dark:text-white">
              Google Developer Groups on Campus
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tight mb-6 leading-[0.98]"
          >
            FOR DEVS AT <br />
            <span className="text-google-green">IAR GANDHINAGAR</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl md:text-2xl text-black dark:text-gray-300 max-w-3xl mx-auto mb-5 md:mb-8 font-medium leading-relaxed"
          >
            Join us in building innovative solutions, learning cutting-edge technologies, and connecting with fellow developers.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <a
            href="/events"
            className="btn-brutal-primary w-full sm:w-auto px-12"
          >
            View Events
          </a>
          <a
            href="https://gdsc.community.dev/institute-of-advanced-research-gandhinagar/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-brutal w-full sm:w-auto px-12"
          >
            Join Community <ArrowRight size={20} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
