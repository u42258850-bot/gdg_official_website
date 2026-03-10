import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Smartphone, BrainCircuit, Cloud, Layout, Terminal, ArrowRight } from 'lucide-react';

const domains = [
  {
    title: "Web Development",
    description: "Building modern, responsive, and high-performance web applications using the latest frameworks.",
    icon: <Code2 size={32} />,
    color: "text-google-blue",
    bg: "bg-google-blue/10",
    border: "hover:border-google-blue/50"
  },
  {
    title: "Android Development",
    description: "Creating seamless mobile experiences for the world's most popular mobile platform.",
    icon: <Smartphone size={32} />,
    color: "text-google-green",
    bg: "bg-google-green/10",
    border: "hover:border-google-green/50"
  },
  {
    title: "AI / Machine Learning",
    description: "Exploring the frontiers of intelligence, from neural networks to generative AI.",
    icon: <BrainCircuit size={32} />,
    color: "text-google-yellow",
    bg: "bg-google-yellow/10",
    border: "hover:border-google-yellow/50"
  },
  {
    title: "Cloud & DevOps",
    description: "Mastering infrastructure, deployment pipelines, and scalable cloud solutions.",
    icon: <Cloud size={32} />,
    color: "text-google-blue",
    bg: "bg-google-blue/10",
    border: "hover:border-google-blue/50"
  },
  {
    title: "UI/UX Design",
    description: "Crafting beautiful, intuitive, and user-centric interfaces that delight users.",
    icon: <Layout size={32} />,
    color: "text-google-red",
    bg: "bg-google-red/10",
    border: "hover:border-google-red/50"
  },
  {
    title: "Open Source",
    description: "Contributing to global projects and building a transparent, collaborative future.",
    icon: <Terminal size={32} />,
    color: "text-google-green",
    bg: "bg-google-green/10",
    border: "hover:border-google-green/50"
  }
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

export default function Domains() {
  return (
    <section id="domains" className="py-20 md:py-32 bg-white dark:bg-dark-background/50 relative overflow-hidden">
      {/* Decorative background text */}
      <div className="hidden md:block absolute top-10 -left-20 text-[20rem] font-display font-bold text-black/[0.02] dark:text-white/[0.02] select-none pointer-events-none">
        DOMAINS
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-display font-bold mb-6 dark:text-white leading-[0.96]"
          >
            WHAT WE <br />
            <span className="text-google-blue">WORK ON</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg sm:text-xl md:text-2xl text-black dark:text-gray-300 max-w-3xl mx-auto font-medium leading-relaxed"
          >
            Our community covers a wide range of technologies and domains, ensuring there's something for every developer.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10"
        >
          {domains.map((domain, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="brutal-card p-6 sm:p-8 md:p-10 group bg-white dark:bg-black hover:translate-x-[-4px] hover:translate-y-[-4px] transition-all duration-300"
            >
              <div className={`w-20 h-20 ${domain.bg} ${domain.color} border-4 border-black dark:border-white rounded-3xl flex items-center justify-center mb-8 group-hover:rotate-12 transition-transform duration-500`}>
                {domain.icon}
              </div>
              <h3 className="text-3xl font-display font-bold mb-4 dark:text-white group-hover:text-google-blue transition-colors">{domain.title}</h3>
              <p className="text-lg text-black dark:text-gray-300 leading-relaxed font-medium mb-8">
                {domain.description}
              </p>
              
              <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest group-hover:gap-5 transition-all">
                <span className={domain.color}>Explore Domain</span>
                <ArrowRight size={18} className={domain.color} />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
