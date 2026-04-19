import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-matte-black border-t border-dim-gray/10 overflow-hidden">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="racing-cell aspect-video overflow-hidden border-racing-orange/40"
            >
              <img 
                src="/assets/ai_images/lounge_premium.png" 
                alt="Premium Lounge" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute top-4 right-4 telemetry-data bg-matte-black/80 p-2 font-technical">
                ZONE: PREMIUM_LOUNGE // 05
              </div>
            </motion.div>
            
            {/* Speed Decoration */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-4 border-l-4 border-racing-orange -z-10" />
            
            {/* Telemetry Decoration Overlay */}
            <div className="absolute -top-10 -right-10 opacity-10 pointer-events-none">
              <span className="text-9xl font-black italic text-white tracking-widest uppercase">LOUNGE</span>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="accent-line" />
                <span className="telemetry-data font-technical">DATA_SET: ORIGIN_STORY // 02</span>
              </div>
              
              <h2 className="text-5xl md:text-7xl font-black italic mb-8 uppercase tracking-tighter">
                The <span className="text-racing-orange">Waters</span> <br />
                Of Soweto
              </h2>

              <div className="space-y-6 text-dim-gray font-body leading-relaxed text-sm md:text-base">
                <p>
                  <span className="text-white font-black italic tracking-tighter uppercase mr-2 text-lg">Manzini</span> 
                  (meaning "the waters" in Zulu) is a high-performance restoration center 
                  born in the heart of Mofolo Central. We've redefined "car care" into an engineered process.
                </p>
                <p className="font-technical text-xs leading-loose border-l border-racing-orange pl-6 my-8">
                  // OPERATING_SINCE: 2022 <br />
                  // PHILOSOPHY: PRECISION_OVER_PROFIT <br />
                  // STATUS: THE_BEST_MO_KASI
                </p>
                <p>
                  We ensure your vehicle receives the highest grade of technical care available. 
                  Experience the ultimate output with our specialized compounds and pit-crew precision.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 mt-12">
                <div className="border-t-2 border-racing-orange pt-4">
                  <span className="text-4xl font-black italic block text-white">05+</span>
                  <span className="telemetry-data font-technical">BRANCH_LOCATIONS</span>
                </div>
                <div className="border-t-2 border-racing-orange pt-4">
                  <span className="text-4xl font-black italic block text-white">10k+</span>
                  <span className="telemetry-data font-technical">DETAILED_CHASSIS</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
