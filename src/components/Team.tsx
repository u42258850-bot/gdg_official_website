import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Twitter } from 'lucide-react';

const team = [
  {
    name: "Dr. Rajesh Kumar",
    role: "Faculty Coordinator",
    image: "https://i.pravatar.cc/150?u=rajesh",
    category: "Organizer",
    linkedin: "#",
    github: "#"
  },
  {
    name: "Aryan Shah",
    role: "GDGOC Lead",
    image: "https://i.pravatar.cc/150?u=aryan",
    category: "Core Team",
    linkedin: "#",
    github: "#"
  },
  {
    name: "Priya Mehta",
    role: "Tech Lead",
    image: "https://i.pravatar.cc/150?u=priya",
    category: "Tech Team",
    linkedin: "#",
    github: "#"
  },
  {
    name: "Dev Patel",
    role: "Design Lead",
    image: "https://i.pravatar.cc/150?u=dev",
    category: "Design Team",
    linkedin: "#",
    github: "#"
  },
  {
    name: "Sneha Gupta",
    role: "Events Lead",
    image: "https://i.pravatar.cc/150?u=sneha",
    category: "Core Team",
    linkedin: "#",
    github: "#"
  },
  {
    name: "Karan Sharma",
    role: "Android Lead",
    image: "https://i.pravatar.cc/150?u=karan",
    category: "Tech Team",
    linkedin: "#",
    github: "#"
  }
];

const categories = ["Organizer", "Core Team", "Tech Team", "Design Team"];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const memberVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const categoryColors = [
  "bg-google-blue",
  "bg-google-red",
  "bg-google-yellow",
  "bg-google-green"
];

export default function Team() {
  return (
    <section id="team" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="hidden md:block absolute top-0 right-0 text-[20rem] font-display font-bold text-black/[0.02] dark:text-white/[0.02] select-none pointer-events-none -translate-y-1/2">
        TEAM
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-display font-bold mb-6 dark:text-white leading-[0.96]"
          >
            MEET THE <br />
            <span className="text-google-yellow">TEAM</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg sm:text-xl md:text-2xl text-black dark:text-gray-300 max-w-3xl mx-auto font-medium leading-relaxed"
          >
            The passionate individuals behind GDGOC IAR who make everything possible.
          </motion.p>
        </div>

        {categories.map((category, catIdx) => (
          <div key={catIdx} className="mb-16 md:mb-24 last:mb-0">
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl font-display font-bold mb-8 md:mb-10 flex items-center gap-4 sm:gap-6 dark:text-white"
            >
              <span className={`w-16 h-3 ${categoryColors[catIdx % categoryColors.length]} rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`} />
              {category}
            </motion.h3>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10"
            >
              {team.filter(m => m.category === category).map((member, index) => (
                <motion.div
                  key={index}
                  variants={memberVariants}
                  className="group"
                >
                  <div className="brutal-card relative mb-6 aspect-square overflow-hidden bg-white dark:bg-black group-hover:translate-x-[-4px] group-hover:translate-y-[-4px] transition-all duration-300">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                      <div className="flex gap-4">
                        <a href={member.linkedin} className="p-4 rounded-xl border-2 border-white bg-white text-black hover:bg-google-blue hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]">
                          <Linkedin size={24} />
                        </a>
                        <a href={member.github} className="p-4 rounded-xl border-2 border-white bg-white text-black hover:bg-google-blue hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]">
                          <Github size={24} />
                        </a>
                      </div>
                    </div>
                  </div>
                  
                  <h4 className="text-2xl font-display font-bold dark:text-white mb-2 group-hover:text-google-yellow transition-colors">{member.name}</h4>
                  <p className="text-sm font-bold uppercase tracking-widest text-black/60 dark:text-white/60">{member.role}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
