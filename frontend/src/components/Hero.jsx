import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Droplets } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen overflow-hidden bg-matte-black flex items-center">
      {/* Background Graphic Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-racing-orange/10 -skew-x-12 transform translate-x-20 z-0" />
      
      <div className="container relative z-10 flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-3/5">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="accent-line" />
              <span className="telemetry-data">SYSTEM_STATUS: READY // 01</span>
            </div>
            
            <h1 className="text-7xl md:text-[9rem] leading-[0.85] font-black mb-8 italic">
              Restore <br />
              <span className="text-racing-orange">Performance</span>
            </h1>

            <p className="max-w-md text-dim-gray mb-10 text-lg leading-relaxed font-technical uppercase">
              // Precision automotive detailing. 
              // Engineered for the street. 
              // Optimized for the soul.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#services" className="btn-racing btn-primary">
                View Services
              </a>
              <a href="#booking" className="btn-racing btn-outline">
                Book Pit Stop
              </a>
            </div>
          </motion.div>
        </div>

        <div className="w-full md:w-2/5 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="racing-cell aspect-[4/5] overflow-hidden"
          >
            <img 
              src="/assets/ai_images/hero_car_wash.png" 
              alt="Performance Wash" 
              className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 hover:brightness-100 transition-all duration-700 hover:scale-110"
            />
            <div className="absolute bottom-6 left-6 telemetry-data text-white">
              VISUAL_ID: H_01 <br />
              LOCATION: MOFOLO_HQ
            </div>
          </motion.div>
          
          {/* Decorative Speed Lines */}
          <div className="absolute -top-10 -right-10 w-40 h-40 border-t-2 border-r-2 border-racing-orange/30 pointer-events-none" />
        </div>
      </div>

      {/* Background Large Text */}
      <div className="absolute -bottom-10 -left-20 opacity-5 pointer-events-none select-none">
        <span className="text-[25rem] font-black italic tracking-tighter text-white">RACING</span>
      </div>
    </section>
  );
};

export default Hero;
