import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Github, Twitter, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="pt-20 md:pt-32 pb-12 md:pb-16 bg-white dark:bg-dark-background border-t-4 border-black dark:border-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="hidden md:block absolute bottom-0 left-0 text-[10rem] font-display font-bold text-black/[0.02] dark:text-white/[0.02] select-none pointer-events-none translate-y-1/2">
        IAR
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 lg:gap-16 mb-16 md:mb-24">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-4 mb-8 group">
              <div className="w-10 h-10 bg-google-blue/10 border-2 border-black dark:border-white rounded-xl flex items-center justify-center group-hover:rotate-12 transition-transform">
                <img 
                  src="/apple-touch-icon.png" 
                  alt="GDGOC Logo" 
                  className="w-6 h-6 object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://firebasestorage.googleapis.com/v0/b/antigravity-build.appspot.com/o/users%2Fpatelchidatma%40gmail.com%2Fassets%2Flogo.png?alt=media&token=2609044b-4860-466d-99d7-8490a612711d";
                  }}
                />
              </div>
              <span className="text-lg sm:text-xl md:text-2xl font-display font-semibold flex items-center tracking-tight">
                <span className="dark:text-white text-black">GDGOC IAR</span>
              </span>
            </Link>
            <p className="text-base md:text-lg text-black dark:text-gray-300 leading-relaxed mb-8 md:mb-10 font-medium">
              Build. Learn. Innovate with Google Technologies. The official developer community at Institute of Advanced Research, Gandhinagar.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <Linkedin size={24} />, href: "#", color: "hover:bg-google-blue" },
                { icon: <Instagram size={24} />, href: "#", color: "hover:bg-google-red" },
                { icon: <Github size={24} />, href: "#", color: "hover:bg-google-green" },
                { icon: <Twitter size={24} />, href: "#", color: "hover:bg-google-blue" },
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  className={`w-14 h-14 rounded-xl border-2 border-black dark:border-white bg-white dark:bg-black flex items-center justify-center text-black dark:text-white ${social.color} hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:translate-x-[-2px] hover:translate-y-[-2px]`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold mb-8 dark:text-white uppercase tracking-widest text-xl border-b-4 border-google-blue inline-block">Quick Links</h4>
            <ul className="space-y-5">
              {[
                { name: 'About', to: '/about' },
                { name: 'Events', to: '/events' },
                { name: 'Team', to: '/team' },
                { name: 'Gallery', to: '/gallery' },
                { name: 'FAQ', to: '/faq' },
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.to} className="text-black dark:text-gray-300 hover:text-google-blue transition-colors text-base md:text-lg font-bold uppercase tracking-wider block hover:translate-x-2 transition-transform">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-display font-bold mb-8 dark:text-white uppercase tracking-widest text-xl border-b-4 border-google-red inline-block">Community</h4>
            <ul className="space-y-5">
              {['Join Us', 'Sponsors', 'Privacy Policy', 'Terms of Service'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-black dark:text-gray-300 hover:text-google-red transition-colors text-base md:text-lg font-bold uppercase tracking-wider block hover:translate-x-2 transition-transform">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold mb-8 dark:text-white uppercase tracking-widest text-xl border-b-4 border-google-green inline-block">Contact Us</h4>
            <ul className="space-y-6 text-base md:text-lg font-medium">
              <li className="text-black dark:text-gray-300">
                <span className="block text-xs font-bold uppercase tracking-widest text-google-green mb-1">Email</span>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=gdgoc.iar@gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-google-green font-bold break-all">gdgoc.iar@gmail.com</a>
              </li>
              <li className="text-black dark:text-gray-300">
                <span className="block text-xs font-bold uppercase tracking-widest text-google-green mb-1">Location</span>
                IAR Campus, Koba-Gandhinagar Highway, Gandhinagar, Gujarat 382426
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 md:pt-12 border-t-4 border-black dark:border-white flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8 text-center md:text-left">
          <p className="text-black dark:text-white text-xs sm:text-sm font-bold uppercase tracking-widest">
            © {currentYear} Google Developer Groups on Campus – IAR Gandhinagar.
          </p>
          <p className="text-black dark:text-white text-xs sm:text-sm font-bold uppercase tracking-widest flex items-center gap-2">
            Made with <Heart size={16} className="text-google-red fill-google-red animate-pulse" /> by GDGOC IAR Team.
          </p>
        </div>
      </div>
    </footer>
  );
}
