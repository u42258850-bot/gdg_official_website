import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "Do I need prior coding experience?",
    answer: "Not at all! GDGOC is open to everyone, from absolute beginners to advanced developers. We have resources and events tailored for all skill levels."
  },
  {
    question: "Is there any membership fee?",
    answer: "No, membership is completely free. All our workshops, events, and resources are provided at no cost to students."
  },
  {
    question: "What events do you organize?",
    answer: "We organize a variety of events including hands-on workshops, hackathons, speaker sessions, study jams, and networking events."
  },
  {
    question: "How can I join the core team?",
    answer: "We open core team applications once a year. Keep an eye on our social media channels and attend our events to learn more about the process."
  },
  {
    question: "Can non-developers join?",
    answer: "Yes! We have domains for UI/UX Design, Content Writing, and Management. If you're interested in tech, there's a place for you."
  },
  {
    question: "What technologies are covered?",
    answer: "We cover a wide range of Google technologies like Android, Firebase, Google Cloud, Flutter, TensorFlow, and more, as well as general web and mobile development."
  }
];

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps & { index: number }> = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="mb-5 md:mb-8"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between p-5 sm:p-6 md:p-8 brutal-card bg-white dark:bg-black text-left transition-all group ${isOpen ? 'translate-x-1 translate-y-1 shadow-none' : ''}`}
      >
        <span className="text-lg sm:text-xl md:text-2xl font-display font-bold dark:text-white uppercase tracking-tight leading-snug pr-3">{question}</span>
        <div className={`w-10 h-10 rounded-lg border-2 border-black dark:border-white flex items-center justify-center transition-all ${isOpen ? 'bg-google-blue text-white rotate-180' : 'bg-gray-100 dark:bg-white/10 text-black dark:text-white group-hover:bg-google-blue group-hover:text-white'}`}>
          <ChevronDown size={24} />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-6 sm:p-8 md:p-10 text-black dark:text-gray-300 leading-relaxed border-x-4 border-b-4 border-black dark:border-white rounded-b-2xl -mt-2 bg-white dark:bg-black font-medium text-base sm:text-lg md:text-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)]">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-32 bg-white dark:bg-dark-background/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="hidden md:block absolute top-0 right-0 text-[15rem] font-display font-bold text-black/[0.02] dark:text-white/[0.02] select-none pointer-events-none translate-x-1/4">
        FAQ
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14 md:mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-display font-bold mb-6 dark:text-white leading-[0.96]"
          >
            GOT <br />
            <span className="text-google-green">QUESTIONS?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg sm:text-xl md:text-2xl text-black dark:text-gray-300 font-medium leading-relaxed"
          >
            Everything you need to know about GDGOC IAR.
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} {...faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
