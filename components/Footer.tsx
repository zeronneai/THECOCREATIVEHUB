import React from 'react';
import { Instagram, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 flex flex-col items-center justify-center gap-8 py-16 px-6 text-center">
      <div className="flex flex-wrap justify-center gap-4">
        <a 
          href="https://instagram.com/the.cocreativehub" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition-all hover:border-brand-green/50 hover:bg-brand-green/10 hover:text-brand-green"
        >
          <Instagram size={18} className="transition-transform group-hover:scale-110" />
          <span>@the.cocreativehub</span>
        </a>
        <a 
          href="https://wa.me/19152343655?text=I%20want%20to%20be%20a%20founding%20member!" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition-all hover:border-brand-green/50 hover:bg-brand-green/10 hover:text-brand-green"
        >
          <MessageCircle size={18} className="transition-transform group-hover:scale-110" />
          <span>WhatsApp</span>
        </a>
      </div>
      <p className="text-xs text-[#777]">© 2026 The Co-Creative Hub · El Paso, TX</p>
    </footer>
  );
};
