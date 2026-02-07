
import React, { useState, useEffect, useCallback } from 'react';

const STEP_DURATION_MS = 6000;
const PROGRESS_INTERVAL_MS = 80;

const steps = [
  {
    number: '01',
    title: 'Start with a research question',
    description:
      'Ask a disease- or biomarker-focused research question and define scope before execution.',
    image: '/screenshots/slide9.jpg',
  },
  {
    number: '02',
    title: 'Coordinated deep research',
    description:
      'The system generates a structured research plan and coordinates multi-agent research across OpenTargets and biomedical literature.',
    image: '/screenshots/slide2.jpg',
  },
  {
    number: '03',
    title: 'Decision-ready insight',
    description:
      'Receive ranked biomarker hypotheses with supporting evidence, citations, and a downloadable research report.',
    image: '/screenshots/slide3.jpg',
  },
];

const DeepResearchHowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const intervalId = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min(100, (elapsed / STEP_DURATION_MS) * 100);
      setProgress(newProgress);
      if (newProgress >= 100) {
        setProgress(0);
        setActiveStep((prev) => (prev + 1) % steps.length);
      }
    }, PROGRESS_INTERVAL_MS);
    return () => clearInterval(intervalId);
  }, [activeStep]);

  const goToStep = useCallback((idx: number) => {
    setActiveStep(idx);
    setProgress(0);
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, idx: number) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        goToStep(idx);
      }
    },
    [goToStep]
  );

  return (
    <section className="py-32 px-6 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-12 md:gap-16 items-stretch">
          <div className="flex flex-col">
            <div className="text-[10px] font-mono text-white/30 uppercase tracking-[0.4em] mb-8 flex items-center gap-2">
              <span className="w-4 h-[1px] bg-orange-500/50"></span>
              DEEP RESEARCH WORKFLOW
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight uppercase leading-[1.1] mb-4 md:whitespace-nowrap">
              How It Works
            </h2>
            <p className="text-lg md:text-xl text-white/40 font-light leading-relaxed mb-12">
              From question to report in three steps — evidence-backed biomarker hypotheses powered by OpenTargets and multi-agent research.
            </p>

            <ol className="flex-1 flex flex-col">
              {steps.map((step, idx) => {
                const isActive = activeStep === idx;
                return (
                  <li key={idx} className="flex-1">
                    <button
                      type="button"
                      onClick={() => goToStep(idx)}
                      onKeyDown={(e) => handleKeyDown(e, idx)}
                      aria-current={isActive ? 'step' : undefined}
                      tabIndex={0}
                      className="w-full h-full text-left py-6 border-b border-white/5 hover:bg-white/[0.02] transition-all duration-300 ease-in-out cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50"
                    >
                      <p
                        className={`text-[10px] font-mono uppercase tracking-widest mb-2 transition-colors duration-300 ${
                          isActive ? 'text-orange-500' : 'text-white/40'
                        }`}
                      >
                        {step.number}
                      </p>
                      <h3
                        className={`text-xl font-medium tracking-tight mb-2 transition-colors duration-300 ${
                          isActive ? 'text-white' : 'text-white/40'
                        }`}
                      >
                        {step.title}
                      </h3>
                      <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${
                          isActive ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <p className="text-white/40 text-sm leading-relaxed mb-4">
                          {step.description}
                        </p>
                        <div
                          className="h-[2px] w-full bg-white/10 rounded-full overflow-hidden"
                          role="progressbar"
                          aria-valuenow={progress}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          aria-label="Step progress"
                        >
                          <div
                            className="h-full bg-orange-500 rounded-full"
                            style={{
                              width: `${progress}%`,
                              transition: 'width 80ms linear',
                            }}
                          />
                        </div>
                      </div>
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>

          <div className="flex flex-col min-h-[320px] pt-8 md:pt-16">
            <div className="relative flex-1 w-full rounded-sm overflow-hidden border border-white/10 bg-black">
              {steps.map((step, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                    activeStep === idx ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                >
                  <div className="absolute inset-0 z-0 flex items-center justify-center bg-gradient-to-br from-white/5 to-white/[0.02] font-mono text-[10px] text-white/20 uppercase tracking-widest">
                    Step {step.number}
                  </div>
                  <img
                    src={step.image}
                    alt={`Step ${step.number}: ${step.title}`}
                    className="absolute inset-0 z-10 w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeepResearchHowItWorks;
