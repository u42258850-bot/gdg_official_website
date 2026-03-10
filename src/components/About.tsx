import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  const visions = [
    "Empower students with real-world tech skills",
    "Bridge academia and industry",
    "Build an inclusive developer community"
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-bold text-google-blue uppercase tracking-widest mb-6">
              About GDGOC IAR
            </h2>
            <h3 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-8 md:mb-10 leading-[0.96] dark:text-white">
              ONE VISION. <br />
              ONE MISSION. <br />
              <span className="text-google-red">ONE COMMUNITY.</span>
            </h3>
            
            <div className="space-y-6 md:space-y-8 text-lg sm:text-xl md:text-2xl text-black dark:text-gray-300 leading-relaxed font-medium">
              <p>
                Google Developer Groups on Campus (GDGOC) are community groups for college and university students interested in Google developer technologies.
              </p>
              <p>
                At IAR Gandhinagar, our mission is to provide a platform where students can learn, share, and grow together. We focus on hands-on learning through workshops, hackathons, and collaborative projects.
              </p>
            </div>

            <div className="mt-10 md:mt-12 space-y-5 md:space-y-6">
              {visions.map((vision, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-8 h-8 rounded-lg bg-google-green/10 flex items-center justify-center border-2 border-google-green">
                    <CheckCircle2 className="text-google-green" size={18} />
                  </div>
                  <span className="text-lg md:text-xl text-gray-700 dark:text-gray-300 font-bold uppercase tracking-tight">{vision}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, type: "spring" }}
            className="relative"
          >
            <div className="brutal-card p-6 sm:p-8 md:p-16 bg-white dark:bg-black relative z-10">
              <div className="w-24 h-24 bg-google-blue/10 border-4 border-black dark:border-white rounded-3xl flex items-center justify-center mb-10 mx-auto group hover:rotate-12 transition-transform duration-500">
                <img 
                  src="/apple-touch-icon.png" 
                  alt="GDGOC Logo" 
                  className="w-16 h-16 object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://firebasestorage.googleapis.com/v0/b/antigravity-build.appspot.com/o/users%2Fpatelchidatma%40gmail.com%2Fassets%2Flogo.png?alt=media&token=2609044b-4860-466d-99d7-8490a612711d";
                  }}
                />
              </div>
              <h4 className="text-4xl font-display font-bold mb-6 dark:text-white text-center">Our Mission</h4>
              <p className="text-xl text-black dark:text-gray-300 leading-relaxed mb-10 font-medium text-center">
                To help students bridge the gap between theory and practice. We aim to create a space where innovation thrives and every student has the opportunity to become a world-class developer.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-8">
                <div className="p-6 md:p-8 rounded-2xl bg-google-blue/5 border-2 border-black dark:border-white shadow-[6px_6px_0px_0px_rgba(66,133,244,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
                  <div className="text-google-blue font-display text-3xl mb-1">Learn</div>
                  <div className="text-xs font-bold text-black dark:text-white uppercase tracking-widest">New Tech</div>
                </div>
                <div className="p-6 md:p-8 rounded-2xl bg-google-red/5 border-2 border-black dark:border-white shadow-[6px_6px_0px_0px_rgba(234,67,53,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all">
                  <div className="text-google-red font-display text-3xl mb-1">Build</div>
                  <div className="text-xs font-bold text-black dark:text-white uppercase tracking-widest">Real Projects</div>
                </div>
              </div>
            </div>
            
            {/* Background Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 md:w-64 md:h-64 bg-google-yellow/10 rounded-full blur-3xl -z-10 animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 md:w-64 md:h-64 bg-google-blue/10 rounded-full blur-3xl -z-10 animate-pulse" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
