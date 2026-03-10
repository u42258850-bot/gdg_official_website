import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code } from 'lucide-react';

const projects = [
  {
    name: "IAR Campus Connect",
    description: "A centralized platform for students to share notes, event updates, and campus news.",
    tech: ["React", "Firebase", "Tailwind"],
    github: "https://github.com",
    demo: "https://google.com"
  },
  {
    name: "EcoTrack AI",
    description: "AI-powered waste classification system built for the Google Solution Challenge.",
    tech: ["Python", "TensorFlow", "Flutter"],
    github: "https://github.com",
    demo: "https://google.com"
  },
  {
    name: "Dev Portfolio Builder",
    description: "A tool for students to generate professional portfolios from their GitHub profiles.",
    tech: ["Next.js", "GitHub API", "Framer Motion"],
    github: "https://github.com",
    demo: "https://google.com"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const projectVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 0.8
    }
  }
};

const techColors = [
  "border-google-blue text-google-blue",
  "border-google-red text-google-red",
  "border-google-yellow text-google-yellow",
  "border-google-green text-google-green"
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-white dark:bg-dark-background/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="hidden md:block absolute top-1/2 -right-20 text-[20rem] font-display font-bold text-black/[0.02] dark:text-white/[0.02] select-none pointer-events-none -translate-y-1/2 rotate-90">
        CODE
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-display font-bold mb-6 dark:text-white leading-[0.96]"
          >
            FEATURED <br />
            <span className="text-google-green">PROJECTS</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg sm:text-xl md:text-2xl text-black dark:text-gray-300 max-w-3xl mx-auto font-medium leading-relaxed"
          >
            Check out some of the amazing projects built by our community members.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={projectVariants}
              className="brutal-card p-6 sm:p-8 md:p-10 group bg-white dark:bg-black hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all duration-300"
            >
              <div className="w-16 h-16 bg-google-blue/10 text-google-blue border-4 border-black dark:border-white rounded-2xl flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform duration-500">
                <Code size={32} />
              </div>
              
              <h3 className="text-3xl font-display font-bold mb-4 dark:text-white group-hover:text-google-green transition-colors">
                {project.name}
              </h3>
              <p className="text-lg text-black dark:text-gray-300 leading-relaxed mb-8 font-medium">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                {project.tech.map((t, i) => (
                  <span key={i} className={`px-4 py-1.5 border-2 bg-white dark:bg-black rounded-xl text-xs font-bold uppercase tracking-widest shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_rgba(255,255,255,0.2)] ${techColors[i % techColors.length]}`}>
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-6">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl border-2 border-black dark:border-white bg-white dark:bg-black text-black dark:text-white hover:bg-google-blue dark:hover:bg-google-blue hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:translate-x-[-2px] hover:translate-y-[-2px]"
                >
                  <Github size={24} />
                </a>
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl border-2 border-black dark:border-white bg-white dark:bg-black text-black dark:text-white hover:bg-google-green dark:hover:bg-google-green hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:translate-x-[-2px] hover:translate-y-[-2px]"
                >
                  <ExternalLink size={24} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
