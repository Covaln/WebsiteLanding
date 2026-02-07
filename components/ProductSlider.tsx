
import React, { useState, useEffect, useRef } from 'react';

const deepResearchSlides = [
  {
    url: "/screenshots/slide9.jpg",
    title: "Deep Research Console",
    description: "Structured research plans with multi-provider retrieval and report-ready outputs.",
    status: "Available Now"
  }
];

const platformSlides = [
  {
    url: "/screenshots/slide1.jpg",
    title: "Target Summary + Structure",
    description: "BRCA1 prediction plan, ranked candidates, and live protein structure inspection in one view.",
    status: "Coming Soon"
  },
  {
    url: "/screenshots/slide2.jpg",
    title: "Repurposable Drug Table",
    description: "Drug candidate list with confidence (COV), ADMET plots, structures, and quick Dock/Edit actions.",
    status: "Coming Soon"
  },
  {
    url: "/screenshots/slide3.jpg",
    title: "Drug Details + 3D View",
    description: "Aspirin profile with key properties (e.g., ChEMBL ID) alongside interactive 3D structure.",
    status: "Coming Soon"
  },
  {
    url: "/screenshots/slide4.jpg",
    title: "Molecule Editing History",
    description: "Versioned edits with original vs current comparisons and timeline actions per compound.",
    status: "Coming Soon"
  },
  {
    url: "/screenshots/slide5.jpg",
    title: "Docking Job Results",
    description: "Run summary with docking settings (modes/exhaustiveness) and ranked ligand affinities.",
    status: "Coming Soon"
  },
  {
    url: "/screenshots/slide6.jpg",
    title: "Investigation Library",
    description: "Searchable history with cards, timestamps, and quick actions for every investigation.",
    status: "Coming Soon"
  },
  {
    url: "/screenshots/slide7.jpg",
    title: "Cheminformatics Report",
    description: "Batch property analysis with pass/fail filters and a report summary (9 total, 7 passed).",
    status: "Coming Soon"
  },
  {
    url: "/screenshots/slide8.jpg",
    title: "Similarity Search Results",
    description: "Combined similarity table with canonical SMILES, structures, and similarity scores.",
    status: "Coming Soon"
  }
];

const ProductSlider: React.FC = () => {
  const screenshots = [...deepResearchSlides, ...platformSlides];
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPaused, setIsAutoPaused] = useState(false);
  const autoTimeoutRef = useRef<number | null>(null);
  const resumeTimeoutRef = useRef<number | null>(null);
  const BASE_INTERVAL_MS = 5000;
  const DEEP_RESEARCH_INTERVAL_MS = 9000;
  const MANUAL_PAUSE_MS = 8000;

  const pauseAuto = () => {
    setIsAutoPaused(true);
    if (autoTimeoutRef.current) {
      window.clearTimeout(autoTimeoutRef.current);
      autoTimeoutRef.current = null;
    }
    if (resumeTimeoutRef.current) {
      window.clearTimeout(resumeTimeoutRef.current);
    }
    resumeTimeoutRef.current = window.setTimeout(() => {
      setIsAutoPaused(false);
    }, MANUAL_PAUSE_MS);
  };

  const goTo = (index: number) => {
    setActiveIndex(index);
    pauseAuto();
  };

  useEffect(() => {
    return () => {
      if (resumeTimeoutRef.current) {
        window.clearTimeout(resumeTimeoutRef.current);
      }
      if (autoTimeoutRef.current) {
        window.clearTimeout(autoTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isAutoPaused) return;
    const delay = activeIndex === 0 ? DEEP_RESEARCH_INTERVAL_MS : BASE_INTERVAL_MS;
    autoTimeoutRef.current = window.setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % screenshots.length);
    }, delay);
    return () => {
      if (autoTimeoutRef.current) {
        window.clearTimeout(autoTimeoutRef.current);
        autoTimeoutRef.current = null;
      }
    };
  }, [activeIndex, isAutoPaused, screenshots.length]);

  return (
    <section id="product-showcase" className="py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <div className="text-[10px] font-mono text-white/30 uppercase tracking-[0.4em] mb-4">Product Showcase</div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase mb-6 leading-none">See It in Action</h2>
            <p className="text-white/40 text-lg leading-relaxed font-light">
              Deep Research and ChemFlow Platform OS previews — screenshots from the product.
            </p>
          </div>
          <div className="flex gap-2">
            {screenshots.map((_, i) => (
              <button 
                key={i}
                onClick={() => goTo(i)}
                className={`w-12 h-1 transition-all duration-500 ${activeIndex === i ? 'bg-orange-500' : 'bg-white/10 hover:bg-white/20'}`}
              />
            ))}
          </div>
        </div>

        <div className="relative aspect-video w-full bg-[#111] border border-white/5 rounded-sm overflow-hidden group shadow-2xl">
          {screenshots.map((slide, i) => (
            <div 
              key={i}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${activeIndex === i ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            >
              <img 
                src={slide.url} 
                className="w-full h-full object-cover" 
                alt={slide.title}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
              
              {/* UI Overlay Simulation */}
              <div className="absolute bottom-12 left-12 max-w-md">
                <div className="flex items-center gap-2 mb-4">
                  <span className={`inline-block px-3 py-1 text-[9px] font-black uppercase tracking-widest shadow-lg ${
                    slide.status === 'Available Now'
                      ? 'bg-emerald-500 text-black'
                      : 'bg-white/10 text-white/70 border border-white/10'
                  }`}>
                    {slide.status}
                  </span>
                  <span className={`inline-block px-3 py-1 text-[9px] font-black uppercase tracking-widest shadow-lg ${
                    slide.status === 'Available Now'
                      ? 'bg-orange-600 text-white'
                      : 'bg-white/5 text-white/60 border border-white/10'
                  }`}>
                    {slide.status === 'Available Now' ? 'Deep Research' : 'ChemFlow OS Preview'}
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-2 uppercase tracking-tight">{slide.title}</h3>
                <p className="text-white/70 text-sm font-light leading-relaxed">{slide.description}</p>
              </div>
            </div>
          ))}
          
          <button 
            onClick={() => {
              setActiveIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
              pauseAuto();
            }}
            className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center border border-white/10 bg-black/50 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all hover:bg-white hover:text-black"
          >
            ←
          </button>
          <button 
            onClick={() => {
              setActiveIndex((prev) => (prev + 1) % screenshots.length);
              pauseAuto();
            }}
            className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center border border-white/10 bg-black/50 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all hover:bg-white hover:text-black"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductSlider;
