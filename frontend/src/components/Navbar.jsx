import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail, Droplets } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Booking', href: '#booking' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      <div className={`border-b transition-colors duration-300 ${scrolled ? 'bg-matte-black border-racing-orange/50' : 'bg-transparent border-dim-gray/20'}`}>
        <div className="container flex justify-between items-center h-20">
          <div className="flex items-center gap-4">
            <div className="bg-racing-orange p-2">
              <Droplets className="text-white" size={24} />
            </div>
            <span className="font-brand text-2xl tracking-tighter text-white">Manzini</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-12">
            {navLinks.map((link, idx) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-dim-gray hover:text-racing-orange text-xs font-heading uppercase italic font-bold tracking-widest transition-colors flex flex-col items-start group"
              >
                <span className="text-[8px] font-technical opacity-40 group-hover:opacity-100 mb-1">0{idx + 1}</span>
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white bg-carbon-gray p-2">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed inset-0 bg-matte-black z-[60] flex flex-col justify-center items-center gap-8 md:hidden"
          >
            <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-racing-orange">
              <X size={40} />
            </button>
            {navLinks.map((link, idx) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-5xl font-heading uppercase italic font-black text-telemetry-white hover:text-racing-orange transition-colors"
              >
                <span className="text-xl font-technical block text-racing-orange">0{idx + 1} //</span>
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
