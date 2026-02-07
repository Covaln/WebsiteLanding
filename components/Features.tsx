
import React from 'react';

const technicalStats = [
  { label: "Throughput", value: "10k+", sub: "Compounds/hr", color: "text-orange-500" },
  { label: "Accuracy", value: "94%", sub: "DTI Precision", color: "text-white" },
  { label: "Graph Density", value: "2.4B", sub: "Relationships", color: "text-white" },
  { label: "Entities", value: "200M+", sub: "ChEMBL/UniProt", color: "text-white" }
];

const features = [
  {
    title: "Deep Research",
    description: "Biomarker discovery with OpenTargets integration, structured research plans, and report-ready outputs.",
    tag: "Available Now",
    status: "available"
  },
  {
    title: "Agentic Discovery",
    description: "Coming soon: decompose complex discovery objectives into executable steps with a unified OS.",
    tag: "Coming Soon",
    status: "coming-soon"
  },
  {
    title: "Knowledge Graph Grounding",
    description: "Coming soon: massive systems-biology graphs to reason across pathways and disease signatures.",
    tag: "Coming Soon",
    status: "coming-soon"
  },
  {
    title: "Multi-Tool Pipeline",
    description: "Coming soon: orchestrate Docking -> DTI -> ADMET with seamless handoffs between tools.",
    tag: "Coming Soon",
    status: "coming-soon"
  }
];

const Features: React.FC = () => {
  return (
    <section id="services" className="py-32 px-6 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32">
          {technicalStats.map((stat, i) => (
            <div key={i} className={`border-l ${stat.color === 'text-orange-500' ? 'border-orange-500' : 'border-white/10'} pl-6 py-2 transition-colors duration-500`}>
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/40 mb-2">{stat.label}</p>
              <p className={`text-4xl font-bold tracking-tighter mb-1 ${stat.color}`}>{stat.value}</p>
              <p className="text-[10px] text-white/20 uppercase font-mono">{stat.sub}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5 border border-white/5">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-black p-12 hover:bg-white/[0.01] transition-all group border border-white/5">
              <div className="flex justify-between items-start mb-8">
                <span className={`text-[10px] font-mono uppercase tracking-widest transition-colors ${
                  feature.status === 'available'
                    ? 'text-emerald-400'
                    : 'text-white/20 group-hover:text-orange-500/60'
                }`}>{feature.tag}</span>
                <div className="w-8 h-[1px] bg-white/10 group-hover:w-12 transition-all group-hover:bg-orange-500/50"></div>
              </div>
              <h3 className="text-2xl font-medium mb-4 tracking-tight group-hover:text-white transition-colors">{feature.title}</h3>
              <p className="text-white/40 leading-relaxed text-sm max-w-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
