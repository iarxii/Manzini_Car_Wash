import React from 'react';
import { motion } from 'framer-motion';
import { Send, Zap, ChevronRight } from 'lucide-react';

const Booking = () => {
  return (
    <section id="booking" className="py-24 bg-matte-black border-t border-dim-gray/10">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Info Side */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <div className="accent-line" />
              <span className="telemetry-data font-technical">MODULE: BOOKING_SYSTEM // 04</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black italic mb-8 uppercase tracking-tighter">
              Schedule <br />
              A <span className="text-racing-orange">Pit Stop</span>
            </h2>

            <p className="text-dim-gray mb-10 max-w-sm uppercase text-xs font-technical leading-relaxed">
              // Precision scheduling <br />
              // Instant confirmation protocol <br />
              // High-priority handling
            </p>

            <div className="space-y-4">
              <div className="bg-carbon-gray p-4 flex items-center gap-4 group hover:border-racing-orange border border-transparent transition-all">
                <div className="text-racing-orange"><Zap size={24} /></div>
                <div className="telemetry-data">Fast_Track_System: ENABLED</div>
              </div>
              <div className="bg-carbon-gray p-4 flex items-center gap-4 group hover:border-racing-orange border border-transparent transition-all">
                <div className="text-racing-orange"><Zap size={24} /></div>
                <div className="telemetry-data">Priority_Queue: AVAILABLE</div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-carbon-gray p-8 md:p-12 border border-dim-gray/20 relative"
            >
              {/* Border accents */}
              <div className="absolute top-0 right-0 w-20 h-[1px] bg-racing-orange" />
              <div className="absolute top-0 right-0 w-[1px] h-20 bg-racing-orange" />

              <form className="grid grid-cols-1 md:grid-cols-2 gap-8" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="telemetry-data text-racing-orange ml-1">FIELD: OPERATOR_NAME</label>
                  <input 
                    type="text" 
                    placeholder="ENTER NAME..."
                    className="w-full bg-matte-black border border-dim-gray/40 p-4 font-technical text-white focus:outline-none focus:border-racing-orange transition-all placeholder:opacity-20 italic"
                  />
                </div>

                <div className="space-y-2">
                  <label className="telemetry-data text-racing-orange ml-1">FIELD: CONTACT_COMMS</label>
                  <input 
                    type="tel" 
                    placeholder="ENTER TELEPHONE..."
                    className="w-full bg-matte-black border border-dim-gray/40 p-4 font-technical text-white focus:outline-none focus:border-racing-orange transition-all placeholder:opacity-20 italic"
                  />
                </div>

                <div className="space-y-2">
                  <label className="telemetry-data text-racing-orange ml-1">FIELD: CHASSIS_MODEL</label>
                  <input 
                    type="text" 
                    placeholder="VEHICLE TYPE..."
                    className="w-full bg-matte-black border border-dim-gray/40 p-4 font-technical text-white focus:outline-none focus:border-racing-orange transition-all placeholder:opacity-20 italic"
                  />
                </div>

                <div className="space-y-2">
                  <label className="telemetry-data text-racing-orange ml-1">FIELD: SERVICE_TYPE</label>
                  <select className="w-full bg-matte-black border border-dim-gray/40 p-4 font-technical text-white focus:outline-none focus:border-racing-orange transition-all italic appearance-none">
                    <option>SELECT TIER</option>
                    <option>FULL_VALET // R848</option>
                    <option>DULUX_UPGRADE // R431</option>
                    <option>INTERIOR_ONLY // R361</option>
                    <option>EXTERIOR_ONLY // R167</option>
                    <option>MINI_WASH // R86</option>
                  </select>
                </div>

                <div className="md:col-span-2 space-y-2">
                  <label className="telemetry-data text-racing-orange ml-1">FIELD: SPECIAL_MODS</label>
                  <textarea 
                    rows="3"
                    placeholder="ADDITIONAL TECHNICAL SPECS..."
                    className="w-full bg-matte-black border border-dim-gray/40 p-4 font-technical text-white focus:outline-none focus:border-racing-orange transition-all placeholder:opacity-20 italic"
                  />
                </div>

                <div className="md:col-span-2">
                  <button className="w-full btn-racing btn-primary py-5 group flex justify-center items-center gap-4">
                    INITIATE_BOOKING_SEQUENCE
                    <ChevronRight className="group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;
