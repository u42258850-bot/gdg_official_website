import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: "Joining GDGOC IAR was the best decision of my college life. The community is incredibly supportive.",
    author: "Aryan Shah",
    role: "CSE'27",
    color: "bg-google-blue"
  },
  {
    text: "The community helped me deploy my first cloud app. The workshops are hands-on and very practical.",
    author: "Priya Mehta",
    role: "IT'26",
    color: "bg-google-red"
  },
  {
    text: "GDGOC connects you with people who push you to build and grow. It's more than just a club.",
    author: "Dev Patel",
    role: "ECE'27",
    color: "bg-google-green"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
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

export default function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-white dark:bg-dark-background/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="hidden md:block absolute top-1/2 left-0 text-[15rem] font-display font-bold text-black/[0.02] dark:text-white/[0.02] select-none pointer-events-none -translate-y-1/2 -rotate-90">
        VOICES
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-display font-bold mb-6 dark:text-white leading-[0.96]"
          >
            MEMBER <br />
            <span className="text-google-red">VOICES</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg sm:text-xl md:text-2xl text-black dark:text-gray-300 max-w-3xl mx-auto font-medium leading-relaxed"
          >
            Hear from the students who are part of our growing community.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-6 sm:gap-8 md:gap-12"
        >
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="brutal-card p-6 sm:p-8 md:p-10 relative bg-white dark:bg-black group hover:rotate-1 transition-transform"
            >
              <Quote className="absolute top-8 right-10 text-black/5 dark:text-white/5 group-hover:text-google-red/10 transition-colors" size={80} />
              
              <p className="text-xl md:text-2xl text-black dark:text-gray-300 leading-relaxed mb-12 relative z-10 font-medium italic">
                "{t.text}"
              </p>

              <div className="flex items-center gap-6">
                <div className={`w-16 h-16 border-4 border-black dark:border-white rounded-full flex items-center justify-center text-white text-2xl font-bold ${t.color} shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]`}>
                  {t.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-display font-bold text-2xl dark:text-white leading-none mb-1">{t.author}</h4>
                  <p className="text-xs font-bold text-black/50 dark:text-white/50 uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
