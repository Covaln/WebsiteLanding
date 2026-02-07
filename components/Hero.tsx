
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-32 overflow-hidden bg-black">
      {/* Background Grid Accent */}
      <div className="absolute inset-0 z-0 opacity-[0.03]"
        style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto mb-20">
        <div className="inline-flex items-center gap-3 px-5 py-2 mb-10 border border-orange-500/30 rounded-full bg-orange-500/[0.03] backdrop-blur-md animate-fade-in group cursor-pointer hover:bg-orange-500/[0.08] transition-all">
          <div className="relative flex h-2 w-2">
            <div className="absolute inset-0 rounded-full bg-orange-500 animate-ping opacity-75"></div>
            <div className="relative h-2 w-2 rounded-full bg-orange-600"></div>
          </div>
          <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-bold text-white/80">
            Deep Research Early Access <span className="mx-2 text-white/20">//</span> <span className="text-orange-500 uppercase">Live Now</span>
            <span className="mx-2 text-white/20">//</span> <span className="text-white/50 uppercase">ChemFlow OS Coming Soon</span>
          </span>
        </div>

        <h1 className="text-6xl md:text-9xl lg:text-[11rem] font-bold tracking-tighter mb-10 leading-[0.85] opacity-0 animate-slide-up">
          BIOMARKER RESEARCH<br /><span className="text-white/30">UNIFIED.</span>
        </h1>

        <p className="text-xl md:text-2xl text-white/60 max-w-5xl mx-auto font-light leading-relaxed mb-16 opacity-0 animate-slide-up-delayed">
        <p>
  <span className="text-white font-medium">DEEP RESEARCH</span> enables evidence-backed biomarker hypotheses, powered by{" "}
  <span className="text-white font-medium">OpenTargets-integrated, multi-agent research.</span>
  <span className="block mt-2">
    ChemFlow OS — the autonomous discovery platform — is coming next.
  </span>
</p>
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center opacity-0 animate-slide-up-further">
          <button className="w-full sm:w-auto px-10 py-5 bg-white text-black text-xs font-black uppercase tracking-widest hover:bg-neutral-200 transition-all rounded-none">
            REQUEST EARRLY ACCESS
          </button>
          <button className="w-full sm:w-auto px-10 py-5 border border-white/20 text-white text-xs font-black uppercase tracking-widest hover:bg-white/5 transition-all rounded-none">
            OS Preview (Coming Soon)
          </button>
        </div>
      </div>



      <style>{`
        .perspective-1000 { perspective: 2000px; }
        .rotate-x-2 { transform: rotateX(8deg) translateY(20px); }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(60px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fadeIn 2s ease-out forwards; }
        .animate-fade-in-delayed { animation: fadeIn 2s ease-out 0.8s forwards; }
        .animate-slide-up { animation: slideUp 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-slide-up-delayed { animation: slideUp 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards; }
        .animate-slide-up-further { animation: slideUp 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.5s forwards; }
      `}</style>
    </section>
  );
};

export default Hero;
