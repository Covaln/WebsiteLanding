
import React, { useState, useRef, useEffect } from 'react';
import { getArchitectResponse } from '../services/gemini';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const GeminiArchitect: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'Deep research ready. Ask a biomarker discovery question or an OpenTargets-backed query.' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    const response = await getArchitectResponse(userMsg);
    setMessages(prev => [...prev, { role: 'assistant', content: response || 'Investigation interrupted.' }]);
    setIsLoading(false);
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  return (
    <div id="deep-research" className="max-w-4xl mx-auto px-6 py-40">
      <div className="flex flex-col items-center mb-16 text-center">
        <div className="text-[10px] uppercase tracking-[0.4em] font-bold text-orange-500 mb-4">Deep Research Console</div>
        <h2 className="text-4xl font-bold uppercase tracking-tighter">Biomarker Discovery</h2>
      </div>

      <div className="bg-[#050505] border border-white/5 flex flex-col h-[450px] rounded-sm shadow-2xl">
        <div ref={scrollRef} className="flex-grow overflow-y-auto p-10 space-y-6 scrollbar-thin scrollbar-thumb-white/5 font-mono">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[90%] text-[13px] leading-relaxed ${
                msg.role === 'user' 
                  ? 'text-orange-500' 
                  : 'text-white/50'
              }`}>
                <span className="text-[9px] uppercase font-bold tracking-widest mr-3 opacity-20">
                  {msg.role === 'user' ? '[USER]' : '[CHEMFLOW]'}
                </span>
                {msg.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start text-[10px] font-mono text-orange-500/50 animate-pulse">
              [ANALYZING_SYSTEM_BIOLOGY_GRAPH...]
            </div>
          )}
        </div>

        <div className="p-8 border-t border-white/5 flex gap-4 items-center bg-white/[0.02]">
          <span className="text-orange-500 font-mono text-sm opacity-50">$</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask a biomarker discovery question..."
            className="flex-grow bg-white/[0.03] border border-white/10 outline-none text-sm text-white/90 placeholder:text-white/40 font-mono px-4 py-2 rounded-sm"
          />
          <button
            onClick={handleSend}
            disabled={isLoading}
            className="px-6 py-2 border border-orange-500/30 text-[10px] font-black uppercase tracking-widest text-orange-500 hover:bg-orange-500 hover:text-white transition-all disabled:opacity-20"
          >
            Start Research
          </button>
        </div>
      </div>
    </div>
  );
};

export default GeminiArchitect;
