import React from 'react';
import { Phone, Mail, MapPin, Globe, Users, MessageSquare, ChevronRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-matte-black pt-24 pb-12 border-t-2 border-racing-orange/20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          {/* Brand Info */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-racing-orange p-2">
                <ChevronRight className="text-white" size={24} />
              </div>
              <span className="font-brand text-3xl tracking-tighter text-white">Manzini</span>
            </div>
            <p className="text-dim-gray font-technical text-xs leading-loose uppercase mb-10 max-w-sm">
              // HIGH_PERFORMANCE_CAR_CARE <br />
              // ESTABLISHED_MO_KASI <br />
              // PRECISION_RESTORATION_PROTOCOL
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-3 bg-carbon-gray border border-dim-gray/30 text-racing-orange hover:bg-racing-orange hover:text-white transition-all"><Globe size={20} /></a>
              <a href="#" className="p-3 bg-carbon-gray border border-dim-gray/30 text-racing-orange hover:bg-racing-orange hover:text-white transition-all"><Users size={20} /></a>
              <a href="#" className="p-3 bg-carbon-gray border border-dim-gray/30 text-racing-orange hover:bg-racing-orange hover:text-white transition-all"><MessageSquare size={20} /></a>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-2">
            <h4 className="telemetry-data text-white mb-8 block">INDEX // NAV</h4>
            <ul className="space-y-4">
              {['Home', 'Services', 'About', 'Booking'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-dim-gray hover:text-racing-orange font-heading uppercase italic font-bold text-xs tracking-widest transition-colors flex items-center gap-2">
                    <ChevronRight size={10} className="text-racing-orange" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div className="md:col-span-3">
             <h4 className="telemetry-data text-white mb-8 block">GRID // BRANCHES</h4>
             <ul className="space-y-4 text-xs font-technical uppercase text-dim-gray italic">
               <li className="flex items-center gap-2 text-white"><MapPin size={12} className="text-racing-orange" /> Mofolo Central HQ</li>
               <li>Diepkloof Hub</li>
               <li>Whitecity Precinct</li>
               <li>Ennerdale Station</li>
               <li>Emmarentia Detailing</li>
             </ul>
          </div>

          {/* Comms */}
          <div className="md:col-span-3">
            <h4 className="telemetry-data text-white mb-8 block">COMMS // CHANNEL</h4>
            <div className="space-y-6">
              <a href="tel:0818118095" className="block group">
                <span className="telemetry-data group-hover:text-racing-orange">PRIMARY_VOICE:</span>
                <span className="block text-xl font-black italic text-white group-hover:text-racing-orange transition-colors">081 811 8095</span>
              </a>
              <a href="mailto:admin@manzinicarwash.co.za" className="block group">
                <span className="telemetry-data group-hover:text-racing-orange">SECURE_MAIL:</span>
                <span className="block text-sm font-technical text-white group-hover:text-racing-orange transition-colors">admin@manzinicarwash.co.za</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-dim-gray/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="telemetry-data">
            COPYRIGHT © 2026 MANZINI_SYSTEMS // ALL_RIGHTS_RESERVED
          </div>
          <div className="flex items-center gap-4">
            <div className="telemetry-data">POWERED_BY:</div>
            <span className="text-white font-black italic tracking-tighter uppercase text-lg">AdaptivConcept <span className="text-racing-orange">FL</span></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
