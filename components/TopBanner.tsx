
import React from 'react';

const TopBanner: React.FC = () => {
  return (
    <div className="relative z-[60] bg-orange-600 py-2.5 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-center">
        <p className="text-[11px] sm:text-xs font-black uppercase tracking-[0.2em] text-black">
          Early bird registration of open science version is now live
        </p>
        <div className="flex items-center gap-4">
          <span className="hidden sm:block w-[1px] h-3 bg-black/20"></span>
          <a 
            href="#register" 
            className="text-[10px] font-bold uppercase tracking-widest bg-black text-white px-3 py-1 hover:bg-white hover:text-black transition-all"
          >
            Register Now
          </a>
        </div>
      </div>
      {/* Decorative pulse line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/20 overflow-hidden">
        <div className="h-full w-1/4 bg-white animate-[slide_3s_infinite_linear]"></div>
      </div>
      <style>{`
        @keyframes slide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(400%); }
        }
      `}</style>
    </div>
  );
};

export default TopBanner;
