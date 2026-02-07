
import React from 'react';

const ProductGrid: React.FC = () => {
  return (
    <section className="py-40 px-6 border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="text-5xl font-bold mb-6 tracking-tighter uppercase">Scientific Services.</h2>
            <p className="text-white/40 text-lg leading-relaxed font-light">
              Specialized ML microservices designed for absolute transparency. Inspect 3D docking poses, ADMET predictions, and DTI scores in real-time.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer">
              <span className="text-xs">←</span>
            </div>
            <div className="w-12 h-12 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all cursor-pointer">
              <span className="text-xs">→</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          <div className="group border border-white/10 bg-[#0a0a0a] p-2 hover:border-orange-500/30 transition-all">
             <div className="aspect-[4/5] relative overflow-hidden bg-white mb-8">
               <img src="https://images.unsplash.com/photo-1532187875605-18005fe70795?auto=format&fit=crop&q=80&w=1000" 
                    className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:scale-105 transition-all duration-1000" 
                    alt="3D Molecular Docking" />
               <div className="absolute top-6 left-6 px-3 py-1 bg-white/90 backdrop-blur-md border border-black/10 text-[9px] text-black uppercase tracking-widest font-black">DOCKING-v2 // VISUAL</div>
             </div>
             <div className="px-6 pb-8">
               <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">Interactive 3D Docking</h3>
               <p className="text-sm text-white/40 leading-relaxed mb-6">Structure-based docking with high-fidelity pose inspection. Examine molecular interactions within receptor binding pockets using Mol*.</p>
               <a href="#" className="text-[10px] font-black uppercase tracking-widest text-orange-500 hover:text-white transition-colors">Launch Module ↗</a>
             </div>
          </div>

          <div className="group border border-white/10 bg-[#0a0a0a] p-2 hover:border-orange-500/30 transition-all">
             <div className="aspect-[4/5] relative overflow-hidden bg-white mb-8">
               <img src="https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=1000" 
                    className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:scale-105 transition-all duration-1000" 
                    alt="DTI Affinity Results" />
               <div className="absolute top-6 left-6 px-3 py-1 bg-white/90 backdrop-blur-md border border-black/10 text-[9px] text-black uppercase tracking-widest font-black">DTI-PREDICT // ANALYTICS</div>
             </div>
             <div className="px-6 pb-8">
               <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">DTI Affinity Ranking</h3>
               <p className="text-sm text-white/40 leading-relaxed mb-6">Massively parallel binding affinity prediction. Filter and rank millions of molecules against diverse protein targets with confidence scores.</p>
               <a href="#" className="text-[10px] font-black uppercase tracking-widest text-orange-500 hover:text-white transition-colors">API Docs ↗</a>
             </div>
          </div>

          <div className="group border border-white/10 bg-[#0a0a0a] p-2 hover:border-orange-500/30 transition-all">
             <div className="aspect-[4/5] relative overflow-hidden bg-white mb-8">
               <img src="https://images.unsplash.com/photo-1579154235820-002d131f4963?auto=format&fit=crop&q=80&w=1000" 
                    className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:scale-105 transition-all duration-1000" 
                    alt="Molecule Versioning" />
               <div className="absolute top-6 left-6 px-3 py-1 bg-white/90 backdrop-blur-md border border-black/10 text-[9px] text-black uppercase tracking-widest font-black">EDIT-CORE // VERSIONING</div>
             </div>
             <div className="px-6 pb-8">
               <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">Molecular Forging</h3>
               <p className="text-sm text-white/40 leading-relaxed mb-6">Iterate and branch molecular edits. ChemFlow tracks versions of your scaffolds as you optimize functional groups side-by-side.</p>
               <a href="#" className="text-[10px] font-black uppercase tracking-widest text-orange-500 hover:text-white transition-colors">View Samples ↗</a>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
