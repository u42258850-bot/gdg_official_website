import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Routes, Route } from 'react-router-dom';
import SmoothScroll from './components/SmoothScroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Domains from './components/Domains';
import Events from './components/Events';
import Projects from './components/Projects';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';
import JoinCTA from './components/JoinCTA';
import Footer from './components/Footer';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <SmoothScroll>
      <div className="min-h-screen selection:bg-google-blue/30 selection:text-google-blue bg-white dark:bg-dark-background">
        {/* Scroll Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 gdg-gradient-bar z-[100] origin-left"
          style={{ scaleX }}
        />
        
        <Navbar />
        <main>
          <Routes>
            <Route
              path="/"
              element={(
                <>
                  <Hero />
                  <Stats />
                  <Testimonials />
                  <JoinCTA />
                </>
              )}
            />
            <Route
              path="/about"
              element={(
                <>
                  <About />
                  <Domains />
                </>
              )}
            />
            <Route path="/events" element={<Events />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/team" element={<Team />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<JoinCTA />} />
            <Route path="*" element={<Hero />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}
