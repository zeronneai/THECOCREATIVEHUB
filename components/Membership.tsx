import React from 'react';
import { Reveal } from './Reveal';

export const Membership: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your interest! We'll be in touch shortly.");
  };

  return (
    <section id="membership" className="relative bg-gradient-to-br from-[#0c0c0c] to-[#121212] px-6 py-32 text-center sm:px-[10%]">
      
      <Reveal>
        <span className="mb-6 inline-block border border-brand-green px-5 py-2 text-sm font-bold uppercase tracking-[1.5px] text-white">
          Founding Members Offer
        </span>
      </Reveal>

      <Reveal delay={0.1}>
        <h2 className="mb-6 text-4xl font-bold sm:text-5xl">Launch Membership</h2>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="my-8 text-[5rem] font-black leading-none text-brand-green">
          $89<span className="text-2xl font-normal text-white">/mo</span>
        </div>
      </Reveal>

      <Reveal delay={0.3}>
        <p className="mx-auto mb-12 max-w-[500px] text-lg text-brand-gray">
          Limited to the first <strong className="text-white">44 Founding Members</strong>.
          Lock your rate. Be part of the foundation.
        </p>
      </Reveal>

      <Reveal delay={0.4}>
        <form onSubmit={handleSubmit} className="mx-auto max-w-[420px] space-y-4">
          <input 
            type="text" 
            placeholder="Name" 
            required
            className="w-full border border-brand-border bg-brand-surface p-4 text-white placeholder-brand-gray focus:border-brand-green focus:outline-none transition-colors"
          />
          <input 
            type="email" 
            placeholder="Email" 
            required
            className="w-full border border-brand-border bg-brand-surface p-4 text-white placeholder-brand-gray focus:border-brand-green focus:outline-none transition-colors"
          />
          <button 
            type="submit" 
            className="w-full bg-brand-green p-4 font-bold text-black transition-all hover:bg-white hover:scale-[1.02]"
          >
            Request Access
          </button>
        </form>
      </Reveal>

    </section>
  );
};