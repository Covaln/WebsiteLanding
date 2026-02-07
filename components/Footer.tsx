
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-20 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-bold mb-6 text-white/40">Platform</h4>
            <ul className="space-y-4 text-[13px] text-white/60">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Deep Research (Early Access)</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">ChemFlow OS (Coming Soon)</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Docking Engine (Coming Soon)</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-bold mb-6 text-white/40">Company</h4>
            <ul className="space-y-4 text-[13px] text-white/60">
              <li><a href="#" className="hover:text-orange-500 transition-colors">About covaln</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Bio-Careers</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">Partnerships</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-bold mb-6 text-white/40">Documentation</h4>
            <ul className="space-y-4 text-[13px] text-white/60">
              <li><a href="#" className="hover:text-orange-500 transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">ML Benchmarks</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">SMILES Guide</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-bold mb-6 text-white/40">Social</h4>
            <ul className="space-y-4 text-[13px] text-white/60">
              <li><a href="#" className="hover:text-orange-500 transition-colors">Twitter / X</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">ResearchGate</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-8">
          <div className="flex items-center gap-4 text-[11px] uppercase tracking-widest text-white/40">
            <span>&copy; 2024 covaln Inc.</span>
            <span className="hidden md:block">|</span>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Ethics & AI</a>
          </div>
          <div className="text-[11px] uppercase tracking-[0.4em] font-bold text-white/20">
            Curing the Incurable
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
