import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <section id="services" className="py-24 bg-matte-black border-t border-dim-gray/10">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="accent-line" />
              <span className="telemetry-data font-technical">MODULE: SERVICES // 02</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black italic">Service <span className="text-racing-orange">Tiers</span></h2>
          </div>
          <p className="max-w-xs text-dim-gray font-technical text-[10px] uppercase text-right leading-relaxed tracking-wider">
            // Optimized maintenance cycles <br />
            // High-grade technical compounds <br />
            // Precision application
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Main Service - Span 2x2 */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-2 md:row-span-2 racing-cell p-8 flex flex-col justify-between min-h-[400px]"
          >
            <div className="relative z-10">
              <span className="text-6xl font-black italic text-white/5 absolute -top-4 -left-4">01</span>
              <h3 className="text-4xl font-bold mb-4 italic uppercase">Full Valet</h3>
              <p className="text-dim-gray max-w-sm mb-6 uppercase text-xs font-technical leading-relaxed">
                Engine-to-tailpipe restoration. Interior deep-clean and high-speed exterior buff. The ultimate pit stop for your vehicle.
              </p>
            </div>
            <div className="flex justify-between items-end relative z-10">
              <span className="text-3xl font-technical text-racing-orange">R848.00</span>
              <button className="btn-racing btn-primary py-2 px-6 text-sm">Select</button>
            </div>
            <img src="/assets/gallery/pexels-erik-mclean-4876654.jpg" className="absolute inset-0 w-full h-full object-cover opacity-20 -z-0 grayscale" alt="" />
          </motion.div>

          {/* Staggered Cells */}
          <div className="md:col-span-2 md:row-span-1 racing-cell p-6 flex justify-between items-center group">
             <div className="relative z-10">
               <span className="telemetry-data text-racing-orange mb-2 block font-technical">02 // INTERIOR_FOCUS</span>
               <h3 className="text-2xl font-bold italic uppercase">Dulux Upgrade</h3>
               <p className="text-[10px] text-dim-gray uppercase mt-1">Showroom finish machine polish.</p>
             </div>
             <span className="text-xl font-technical relative z-10">R431.00</span>
             <img src="/assets/ai_images/dulux_racing.png" className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-30 transition-all grayscale" alt="" />
          </div>

          <div className="md:col-span-1 md:row-span-1 racing-cell p-6 group flex flex-col justify-between">
             <div className="relative z-10">
               <span className="telemetry-data text-racing-orange mb-2 block font-technical">03 // INT</span>
               <h3 className="text-xl font-bold italic uppercase">Interior</h3>
             </div>
             <p className="text-2xl font-technical mt-4">R361</p>
          </div>

          <div className="md:col-span-1 md:row-span-1 racing-cell p-6 group flex flex-col justify-between">
             <div className="relative z-10">
               <span className="telemetry-data text-racing-orange mb-2 block font-technical">04 // EXT</span>
               <h3 className="text-xl font-bold italic uppercase">Exterior</h3>
             </div>
             <p className="text-2xl font-technical mt-4">R167</p>
          </div>

          {/* Bottom Row - More asymmetry */}
          <div className="md:col-span-1 md:row-span-1 racing-cell p-6 group bg-racing-orange/5 border-racing-orange/30 flex flex-col justify-between">
             <div className="relative z-10">
               <span className="telemetry-data text-racing-orange mb-2 block font-technical">05 // FAST</span>
               <h3 className="text-xl font-bold italic uppercase">Mini Valet</h3>
             </div>
             <p className="text-2xl font-technical mt-4">R86</p>
          </div>

          <div className="md:col-span-2 md:row-span-1 racing-cell p-6 flex items-center justify-between group overflow-hidden">
             <div className="z-10 text-white relative">
               <h3 className="text-2xl font-bold italic uppercase">Motorcycle Specialists</h3>
               <p className="telemetry-data mt-1 font-technical">TWO_WHEEL_MAINTENANCE</p>
             </div>
             <div className="text-right z-10 relative">
               <span className="text-xl font-technical block text-white">R167.00</span>
               <span className="text-[10px] text-racing-orange font-technical">ALL_MODELS</span>
             </div>
             <img src="/assets/ai_images/motorcycle_racing.png" className="absolute right-0 top-0 h-full w-full object-cover opacity-20 grayscale group-hover:opacity-40 transition-all" alt="" />
          </div>

          <div className="md:col-span-1 md:row-span-1 racing-cell p-6 group bg-carbon-gray flex flex-col justify-center text-center">
             <span className="telemetry-data mb-2 font-technical">07 // ECO</span>
             <h3 className="text-lg font-bold italic uppercase">Standard Wash</h3>
             <p className="text-xl font-technical mt-2 text-racing-orange">R50</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
