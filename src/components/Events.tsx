import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const events = [
  {
    title: "IARthon 2025",
    type: "Hackathon",
    date: "April 15-16, 2025",
    location: "IAR Campus",
    description: "Open innovation hackathon inspired by Google Solution Challenge. Build solutions for the UN Sustainable Development Goals.",
    image: "https://picsum.photos/seed/hackathon/800/600",
    color: "border-google-blue"
  },
  {
    title: "Cloud Study Jam",
    type: "Workshop",
    date: "March 28, 2025",
    location: "Lab 4, IT Block",
    description: "Hands-on Google Cloud learning. Get started with Google Cloud Platform and earn badges.",
    image: "https://picsum.photos/seed/cloud/800/600",
    color: "border-google-red"
  },
  {
    title: "AI/ML Bootcamp",
    type: "Session",
    date: "March 20, 2025",
    location: "Auditorium",
    description: "Beginner to advanced AI/ML session covering TensorFlow, Keras, and modern LLMs.",
    image: "https://picsum.photos/seed/ai/800/600",
    color: "border-google-green"
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

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.3,
      duration: 0.8
    }
  }
};

export default function Events() {
  return (
    <section id="events" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="hidden md:block absolute bottom-0 right-0 text-[15rem] font-display font-bold text-black/[0.02] dark:text-white/[0.02] select-none pointer-events-none translate-y-1/2">
        HACK
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-14 md:mb-20 gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-display font-bold mb-6 dark:text-white leading-[0.96]">
              UPCOMING <br />
              <span className="text-google-red">EVENTS</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-black dark:text-gray-300 max-w-2xl font-medium leading-relaxed">
              Join our upcoming events to learn new skills, network with peers, and build amazing things.
            </p>
          </motion.div>
          <motion.a 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            href="#" 
            className="btn-brutal w-full sm:w-auto px-8 sm:px-10 py-4 text-base sm:text-lg font-bold uppercase tracking-widest"
          >
            View all events <ExternalLink size={20} />
          </motion.a>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10"
        >
          {events.map((event, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="brutal-card overflow-hidden group bg-white dark:bg-black"
            >
              <div className="aspect-[16/10] overflow-hidden border-b-4 border-black dark:border-white relative">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-4 py-2 rounded-xl border-2 border-black dark:border-white bg-white dark:bg-black text-[10px] font-bold uppercase tracking-widest text-black dark:text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}>
                    {event.type}
                  </span>
                </div>
              </div>
              
              <div className="p-6 sm:p-8 md:p-10">
                <div className="flex items-center gap-2 text-google-blue font-bold mb-4">
                  <Calendar size={18} />
                  <span className="text-sm uppercase tracking-widest">{event.date}</span>
                </div>

                <h3 className="text-3xl font-display font-bold mb-4 dark:text-white group-hover:text-google-red transition-colors">{event.title}</h3>
                <p className="text-lg text-black dark:text-gray-300 leading-relaxed mb-8 line-clamp-3 font-medium">
                  {event.description}
                </p>

                <div className="flex items-center gap-3 text-black dark:text-gray-400 text-sm mb-10 font-bold uppercase tracking-widest">
                  <MapPin size={18} className="text-google-red" />
                  <span>{event.location}</span>
                </div>

                <button className="btn-brutal-primary w-full py-4 text-xl font-display">
                  Register Now
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
