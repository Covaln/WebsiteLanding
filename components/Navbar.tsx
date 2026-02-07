
import React from 'react';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  return (
    <nav className={`fixed left-0 w-full z-50 transition-all duration-500 top-0 ${scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 flex flex-col justify-center items-center gap-1">
             <div className="w-full h-[1px] bg-white group-hover:bg-orange-500 group-hover:w-4 transition-all"></div>
             <div className="w-6 h-[1px] bg-white group-hover:bg-orange-500 group-hover:w-full transition-all"></div>
             <div className="w-full h-[1px] bg-white group-hover:bg-orange-500 group-hover:w-6 transition-all"></div>
          </div>
          <span className="text-xl font-bold tracking-tighter uppercase transition-colors">covaln</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-[13px] font-medium tracking-wide uppercase text-white/60">
          <a href="#vision" className="hover:text-white transition-colors">Vision</a>
          <a href="#services" className="hover:text-white transition-colors">Services</a>
          <a href="#arsenal" className="hover:text-white transition-colors">Arsenal</a>
          <a href="#deep-research" className="hover:text-white transition-colors flex items-center gap-1.5">
            Deep Research
            <span className="w-1 h-1 rounded-full bg-orange-500"></span>
          </a>
        </div>

        <div className="flex items-center gap-4">
          <button className="text-[13px] font-medium uppercase text-white/60 hover:text-white transition-colors hidden sm:block">Log In</button>
          <button className="bg-white text-black px-5 py-2 text-[12px] font-bold uppercase hover:bg-orange-500 hover:text-white transition-all rounded-sm">
            Request Early Access
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
