
import React from 'react';

const tools = [
  {
    id: "01",
    name: "Deep Research",
    description: "Biomarker discovery with OpenTargets integration, evidence gathering, and structured research plans.",
    detail: "OpenTargets / Evidence",
    status: "Available Now"
  },
  {
    id: "02",
    name: "Agentic Chat",
    description: "The neural command center. Decompose complex objectives into executable steps with natural language orchestration.",
    detail: "Interpret intent / Execute tools",
    status: "Coming Soon"
  },
  {
    id: "03",
    name: "Docking Engine",
    description: "High-fidelity structure-based simulation of small molecules into protein binding sites with 3D pose extraction.",
    detail: "Binding poses / Interaction maps",
    status: "Coming Soon"
  },
  {
    id: "04",
    name: "Molecule Editor",
    description: "Rapid what-if chemistry. Redraw molecules on the spot with scaffold changes and R-group substitutions.",
    detail: "Branching / Versioning",
    status: "Coming Soon"
  },
  {
    id: "05",
    name: "DTI Predictor",
    description: "Advanced ML models trained on massive biochemical datasets to predict drug-target interaction strength.",
    detail: "Affinity ranking / Scalable proxy",
    status: "Coming Soon"
  },
  {
    id: "06",
    name: "ADMET Profiler",
    description: "Absorption, Distribution, Metabolism, Excretion, and Toxicity prediction to eliminate risky candidates early.",
    detail: "BBB / Hepatotoxicity / Clearance",
    status: "Coming Soon"
  },
  {
    id: "07",
    name: "Entity Resolver",
    description: "Zero-error mapping of messy chemical language, trade names, and SMILES to canonical scientific representations.",
    detail: "Silent disambiguation",
    status: "Coming Soon"
  },
  {
    id: "08",
    name: "ChEMBL Similarity",
    description: "Anchor novel designs to known chemical space by retrieving bioactivity data for structurally related compounds.",
    detail: "Tanimoto scoring / Substructures",
    status: "Coming Soon"
  },
  {
    id: "09",
    name: "R-Group SAR",
    description: "Systematic exploration of structure-activity relationships through automated group finding and series expansion.",
    detail: "Series expansion / Extraction",
    status: "Coming Soon"
  },
  {
    id: "10",
    name: "Lipinski Filtering",
    description: "Enforce drug-likeness rules and physicochemical property filters (MW, logP, TPSA) at scale.",
    detail: "Veber rules / Bioavailability",
    status: "Coming Soon"
  },
  {
    id: "11",
    name: "Custom PDB Upload",
    description: "Deploy internal, proprietary, or AlphaFold-predicted protein structures directly into the docking pipeline.",
    detail: "Private target exploration",
    status: "Coming Soon"
  },
  {
    id: "12",
    name: "SMILES Extractor",
    description: "Batch process virtual screens and libraries from any file format or unstructured text snippets.",
    detail: "High-throughput ingestion",
    status: "Coming Soon"
  }
];

const ToolsGrid: React.FC = () => {
  return (
    <section id="arsenal" className="py-32 px-6 bg-[#030303] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-6">
             <div className="w-12 h-[1px] bg-orange-500"></div>
             <span className="text-[11px] uppercase tracking-[0.4em] font-bold text-white/40">The ChemFlow Arsenal</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-8">
            Scientific <br/> <span className="text-white/20">Capabilities.</span>
          </h2>
          <p className="max-w-2xl text-white/50 text-lg font-light leading-relaxed">
            The full ChemFlow OS toolkit below is coming soon.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
          {tools.map((tool) => (
            <div key={tool.id} className="group relative bg-black p-10 hover:bg-white/[0.02] transition-all duration-500 border border-white/5">
              <div className="flex justify-between items-center mb-8">
                <span className="text-[10px] font-mono text-white/20">{tool.id} // SEC</span>
                <span className={`text-[9px] uppercase tracking-widest font-mono px-2 py-1 border rounded-sm ${
                  tool.status === 'Available Now'
                    ? 'text-emerald-400 border-emerald-500/40 bg-emerald-500/10'
                    : 'text-white/40 border-white/10 bg-white/[0.02]'
                }`}>
                  {tool.status}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-4 uppercase tracking-tight group-hover:text-orange-500 transition-colors">
                {tool.name}
              </h3>
              <p className="text-sm text-white/40 leading-relaxed mb-8 min-h-[60px]">
                {tool.description}
              </p>
              <div className="pt-6 border-t border-white/5">
                <p className="text-[10px] uppercase font-mono tracking-widest text-white/20 group-hover:text-white/40 transition-colors">
                  {tool.detail}
                </p>
              </div>
              
              {/* Subtle background glow on hover */}
              <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/[0.02] pointer-events-none transition-all duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsGrid;
