
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DeepResearchIntro from './components/DeepResearchIntro';
import DeepResearchHowItWorks from './components/DeepResearchHowItWorks';
// import Features from './components/Features'; // Platform stats + feature grid; hidden for Deep Research soft launch
// import GeminiArchitect from './components/GeminiArchitect'; // Hidden for Deep Research soft launch
// import ProductSlider from './components/ProductSlider'; // Intentionally hidden for Deep Research soft launch
import ToolsGrid from './components/ToolsGrid';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-black text-white selection:bg-orange-500/30 font-sans">
      <Navbar scrolled={scrolled} />
      
      <main className="flex-grow">
        <Hero />

        <DeepResearchIntro />

        <DeepResearchHowItWorks />

        {/* Product Slider - See It In Action: intentionally hidden for Deep Research soft launch; re-enable import + JSX to restore */}
        {/* <ProductSlider /> */}

        {/* Discovery Deep Dive - Platform OS Is Coming Next */}
        <div id="vision" className="max-w-7xl mx-auto px-6 py-40 border-t border-white/5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <div>
              <div className="text-[10px] font-mono text-white/30 uppercase tracking-[0.4em] mb-8 flex items-center gap-2">
                <span className="w-4 h-[1px] bg-orange-500/50"></span>
                ChemFlow OS (Coming Soon)
              </div>
              <h2 className="text-5xl font-bold tracking-tight mb-10 uppercase leading-[1.1]">
                The platform OS<br/>
                <span className="text-white/20">is coming next.</span>
              </h2>
              <p className="text-xl text-white/40 leading-relaxed mb-10 font-light">
                Deep Research is live now - Next, ChemFlow OS will unify research, knowledge, and execution into a single operating system for discovery.
              </p>
              <div className="space-y-4 mb-10 text-white/60">
                <div className="flex items-center gap-4 text-sm font-mono">
                  <div className="w-1.5 h-1.5 bg-orange-500"></div>
                  <span>Agentic Tool Selection & Execution (Coming Soon)</span>
                </div>
                <div className="flex items-center gap-4 text-sm font-mono">
                  <div className="w-1.5 h-1.5 bg-orange-500"></div>
                  <span>Integrated Systems Biology Grounding (Coming Soon)</span>
                </div>
                <div className="flex items-center gap-4 text-sm font-mono">
                  <div className="w-1.5 h-1.5 bg-orange-500"></div>
                  <span>Real-time 3D Pose Visualization (Coming Soon)</span>
                </div>
              </div>
              <button className="border border-white/20 hover:border-orange-500/50 text-[10px] font-black uppercase tracking-[0.2em] px-8 py-4 hover:bg-white hover:text-black transition-all">
                OS Preview (Coming Soon)
              </button>
            </div>
            
            <div className="relative group">
              <div className="relative bg-[#ffffff] rounded-sm shadow-2xl overflow-hidden border border-white/10">
                {/* Specific representation of Knowledge Graph grounding */}
                <img 
                  src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=1200" 
                  alt="Knowledge Graph Interface" 
                  className="w-full h-auto opacity-100"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-orange-500/5 pointer-events-none"></div>
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent">
                  <div className="font-mono text-[10px] text-white/60 uppercase tracking-widest mb-2">Systems Biology Grounding (Preview)</div>
                  <div className="h-[2px] w-full bg-white/10">
                    <div className="h-full bg-orange-500 w-[75%] animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Platform stats + feature grid: intentionally hidden for Deep Research soft launch; re-enable import + JSX to restore */}
        {/* <Features /> */}

        <ToolsGrid />

        {/* Architect section: intentionally hidden for Deep Research soft launch; re-enable import + JSX to restore */}
        {/* <div id="architect" className="bg-black border-y border-white/5"><GeminiArchitect /></div> */}
      </main>

      <Footer />
    </div>
  );
};

export default App;
