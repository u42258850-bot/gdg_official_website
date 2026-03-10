import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface StatProps {
  label: string;
  value: number;
  suffix?: string;
}

const StatItem: React.FC<StatProps> = ({ label, value, suffix = "+" }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [inView, value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold font-display mb-2 dark:text-white">
        {count}{suffix}
      </div>
      <div className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
        {label}
      </div>
    </div>
  );
};

export default function Stats() {
  const stats = [
    { label: "Members", value: 500 },
    { label: "Events Hosted", value: 25 },
    { label: "Workshops", value: 15 },
    { label: "Projects Built", value: 10 },
  ];

  return (
    <section className="py-14 md:py-20 bg-white dark:bg-dark-card/30 border-y border-gray-100 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-4">
          {stats.map((stat, index) => (
            <StatItem key={index} label={stat.label} value={stat.value} />
          ))}
        </div>
      </div>
    </section>
  );
}
