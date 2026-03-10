import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Shrink effect
      setIsScrolled(currentScrollY > 20);
      
      // Hide/Reveal effect
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Check system preference or local storage
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setIsDark(true);
    }
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Events', href: '/events' },
    { name: 'Projects', href: '/projects' },
    { name: 'Team', href: '/team' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={cn(
        "glass-nav",
        isScrolled ? "py-2 shadow-xl" : "py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <img 
                src="/apple-touch-icon.png" 
                alt="GDGOC Logo" 
                className="w-8 h-8 sm:w-9 sm:h-9 object-contain group-hover:scale-110 transition-transform duration-500"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://firebasestorage.googleapis.com/v0/b/antigravity-build.appspot.com/o/users%2Fpatelchidatma%40gmail.com%2Fassets%2Flogo.png?alt=media&token=2609044b-4860-466d-99d7-8490a612711d";
                }}
              />
              <div className="absolute -inset-1 bg-google-blue/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <span className="text-base sm:text-lg md:text-xl font-display font-semibold flex items-center tracking-wide">
              <span className="dark:text-white text-black">GDGOC&nbsp;&nbsp;IAR</span>
            </span>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className={({ isActive }) =>
                  cn(
                    "relative text-sm font-bold uppercase tracking-wider text-black dark:text-white group",
                    isActive && "text-google-blue dark:text-google-blue"
                  )
                }
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-google-blue transition-all duration-300 group-hover:w-full" />
              </NavLink>
            ))}
            
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border-2 border-black dark:border-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <a
              href="https://gdsc.community.dev/institute-of-advanced-research-gandhinagar/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-full font-display text-lg border-2 border-black dark:border-white bg-black dark:bg-white text-white dark:text-black hover:bg-google-blue dark:hover:bg-google-blue hover:text-white dark:hover:text-white transition-all hover:scale-105 active:scale-95"
            >
              Join Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-300"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-dark-background border-b border-gray-200 dark:border-gray-800 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "block px-3 py-4 text-base font-medium text-gray-600 dark:text-gray-300 hover:text-google-blue dark:hover:text-google-blue hover:bg-gray-50 dark:hover:bg-gray-900 rounded-xl transition-all",
                      isActive && "text-google-blue dark:text-google-blue"
                    )
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <div className="pt-4">
                <a
                  href="https://gdsc.community.dev/institute-of-advanced-research-gandhinagar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary bg-google-blue text-white w-full"
                >
                  Join Us
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
