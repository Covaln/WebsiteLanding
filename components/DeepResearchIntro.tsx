
import React from 'react';

const bullets = [
  'Question scoping and intent capture',
  'Cross-source evidence aggregation',
  'Structured research plan generation',
  'Parallel agent investigation',
  'Exportable report output (PDF-ready)',
 ];

const DeepResearchIntro: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
          {/* Left column: text */}
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-white/70 mb-3">
              DEEP RESEARCH
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight text-white mb-6">
              FROM QUESTION TO BIOMARKER INSIGHT
            </h2>
            <p className="text-xl text-white/40 font-light leading-relaxed mb-10">
              Deep Research turns a biomarker question into a structured, evidence-grounded research artifact. It coordinates OpenTargets and biomedical literature, then synthesizes ranked hypotheses with clear rationale and citations.
            </p>
            <ul className="space-y-4">
              {bullets.map((bullet, idx) => (
                <li key={idx} className="flex items-start gap-4 text-white/60">
                  <span className="w-1.5 h-1.5 bg-orange-500 mt-2 flex-shrink-0" />
                  <span className="text-sm font-mono">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right column: image */}
          <div className="relative w-full">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-white/10 bg-black shadow-2xl">
              <img
                src="/screenshots/DR1.jpg"
                alt="Deep Research console showing structured research plans and biomarker discovery workflows"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeepResearchIntro;
