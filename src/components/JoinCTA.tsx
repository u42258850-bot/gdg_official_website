import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';

export default function JoinCTA() {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Floating background shapes */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-10 left-10 w-20 h-20 md:w-32 md:h-32 bg-google-blue/5 border-2 border-google-blue/20 rounded-3xl -z-10"
      />
      <motion.div 
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -10, 0]
        }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute bottom-10 right-10 w-28 h-28 md:w-48 md:h-48 bg-google-red/5 border-2 border-google-red/20 rounded-full -z-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
          className="brutal-card p-8 sm:p-10 md:p-24 text-center relative overflow-hidden bg-white dark:bg-black"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-google-blue via-google-red to-google-yellow to-google-green" />
          
          <div className="relative z-10">
            <div className="flex justify-center mb-8">
              <img 
                src="/apple-touch-icon.png" 
                alt="GDGOC Logo" 
                className="w-16 h-16 object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://firebasestorage.googleapis.com/v0/b/antigravity-build.appspot.com/o/users%2Fpatelchidatma%40gmail.com%2Fassets%2Flogo.png?alt=media&token=2609044b-4860-466d-99d7-8490a612711d";
                }}
              />
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-display font-bold mb-6 md:mb-8 dark:text-white leading-[0.94]">
              READY TO BUILD <br />
              <span className="text-google-blue">SOMETHING GREAT?</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-3xl text-black dark:text-gray-300 max-w-3xl mx-auto mb-10 md:mb-16 font-medium leading-relaxed">
              Be part of IAR's fastest growing developer community. Join us to learn, share, and innovate together.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-8">
              <a
                href="https://gdsc.community.dev/institute-of-advanced-research-gandhinagar/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-brutal-primary w-full sm:w-auto px-10 md:px-16 py-5 md:py-6 text-xl md:text-2xl font-display"
              >
                Join Community <ArrowRight size={28} />
              </a>
              <a
                href="/contact"
                className="btn-brutal w-full sm:w-auto px-10 md:px-16 py-5 md:py-6 text-xl md:text-2xl font-display bg-white dark:bg-black"
              >
                Contact Us <Mail size={28} />
              </a>
            </div>
          </div>

          {/* Background decoration */}
          <div className="hidden md:block absolute -bottom-10 -left-10 text-[10rem] font-display font-bold text-black/[0.03] dark:text-white/[0.03] select-none pointer-events-none">
            JOIN
          </div>
        </motion.div>
      </div>
    </section>
  );
}
