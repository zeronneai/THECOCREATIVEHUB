import React from 'react';
import { Reveal } from './Reveal';

export const Membership: React.FC = () => {
  return (
    <section id="membership" className="relative bg-gradient-to-br from-[#0c0c0c] to-[#121212] px-6 py-32 text-center sm:px-[10%]">
      
      {/* --- INICIO SECCIÓN DE PRECIOS --- */}
      <Reveal>
        <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl">Select Your Pass</h2>
        <p className="mb-10 text-lg text-brand-gray">Join the community. Choose the rhythm that fits your creative process.</p>
      </Reveal>

      <Reveal delay={0.1}>
        <ul className="mx-auto mb-16 flex max-w-[600px] flex-col items-start gap-4 text-left text-white sm:items-center sm:text-center">
          <li className="flex items-center gap-3"><span className="text-brand-green text-xl font-bold">✓</span> Access to the cowork space desk and common areas</li>
          <li className="flex items-center gap-3"><span className="text-brand-green text-xl font-bold">✓</span> Fast Wi-Fi</li>
          <li className="flex items-center gap-3"><span className="text-brand-green text-xl font-bold">✓</span> Free coffee station</li>
          <li className="flex items-center gap-3"><span className="text-brand-green text-xl font-bold">✓</span> Have meetings in the space</li>
          <li className="flex items-center gap-3"><span className="text-brand-green text-xl font-bold">✓</span> Free printing (limited)</li>
        </ul>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="mx-auto mb-32 grid max-w-[1100px] grid-cols-1 items-end gap-6 md:grid-cols-2 xl:grid-cols-4 text-white">
          
          {/* Day Pass */}
          <div className="relative rounded-xl border border-[#222] bg-[#111] p-8 transition-all hover:-translate-y-1 hover:border-[#333]">
            <h3 className="mb-4 text-xl font-semibold">Day Pass</h3>
            <div className="mb-8 flex items-baseline justify-center text-5xl font-black">
              <span className="mr-1 text-xl text-brand-gray">$</span>10<span className="ml-1 text-lg font-normal text-brand-gray">/day</span>
            </div>
            <button className="w-full rounded border border-brand-green bg-transparent py-3 text-sm font-bold tracking-widest text-brand-green uppercase transition-colors hover:bg-brand-green/10" data-plan="daily">Select Plan</button>
          </div>

          {/* Week Pass */}
          <div className="relative rounded-xl border border-[#222] bg-[#111] p-8 transition-all hover:-translate-y-1 hover:border-[#333]">
            <h3 className="mb-4 text-xl font-semibold">Week Pass</h3>
            <div className="mb-8 flex items-baseline justify-center text-5xl font-black">
              <span className="mr-1 text-xl text-brand-gray">$</span>25<span className="ml-1 text-lg font-normal text-brand-gray">/week</span>
            </div>
            <button className="w-full rounded border border-brand-green bg-transparent py-3 text-sm font-bold tracking-widest text-brand-green uppercase transition-colors hover:bg-brand-green/10" data-plan="weekly">Select Plan</button>
          </div>

          {/* Month Pass (Most Popular & Founding Offer) */}
          <div className="relative rounded-xl border-2 border-brand-green bg-gradient-to-b from-[#111] to-[#0a0f05] p-10 shadow-2xl transition-all hover:-translate-y-1">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-brand-green px-4 py-1 text-xs font-black uppercase tracking-widest text-black">
              Founding Members Offer
            </div>
            <h3 className="mb-2 text-xl font-semibold">Month Pass</h3>
            
            {/* Texto de urgencia movido aquí */}
            <p className="mb-6 text-sm text-brand-gray">
              Limited to the first <strong className="text-white">44 Founding Members</strong>. Lock your rate.
            </p>

            <div className="mb-8 flex items-baseline justify-center text-5xl font-black text-brand-green">
              <span className="mr-1 text-xl text-white">$</span>89<span className="ml-1 text-lg font-normal text-white">/mo</span>
            </div>
            <button className="w-full rounded bg-brand-green py-3 text-sm font-bold tracking-widest text-black uppercase transition-colors hover:bg-white" data-plan="monthly">Select Plan</button>
          </div>

          {/* 6-Month Pass */}
          <div className="relative rounded-xl border border-[#222] bg-[#111] p-8 transition-all hover:-translate-y-1 hover:border-[#333]">
            <h3 className="mb-4 text-xl font-semibold">6-Month Pass</h3>
            <div className="mb-8 flex items-baseline justify-center text-5xl font-black">
              <span className="mr-1 text-xl text-brand-gray">$</span>414<span className="ml-1 text-lg font-normal text-brand-gray">/6 mo</span>
            </div>
            <button className="w-full rounded border border-brand-green bg-transparent py-3 text-sm font-bold tracking-widest text-brand-green uppercase transition-colors hover:bg-brand-green/10" data-plan="semiannual">Select Plan</button>
          </div>

        </div>
      </Reveal>
      {/* --- FIN SECCIÓN DE PRECIOS --- */}


      {/* --- SECCIÓN DE FORMULARIO (CONTACTO / DUDAS) --- */}
      <Reveal>
        <span className="mb-6 inline-block border border-brand-green px-5 py-2 text-sm font-bold uppercase tracking-[1.5px] text-white">
          Get In Touch
        </span>
      </Reveal>

      <Reveal delay={0.1}>
        <h2 className="mb-6 text-4xl font-bold sm:text-5xl text-white">Have Questions?</h2>
      </Reveal>

      <Reveal delay={0.2}>
        <p className="mx-auto mb-12 max-w-[500px] text-lg text-brand-gray">
          Not sure which plan is right for you? Drop us a message and we'll help you figure it out.
        </p>
      </Reveal>

      <Reveal delay={0.3}>
        <form onSubmit={async (e) => {
          e.preventDefault();
          const target = e.target as typeof e.target & {
            name: { value: string };
            email: { value: string };
            phone: { value: string };
            message: { value: string };
            reset: () => void;
          };
          const formData = {
            name: target.name.value,
            email: target.email.value,
            phone: target.phone.value,
            message: target.message.value, // <-- Se agregó el mensaje al envío
          };
          try {
            await fetch("https://script.google.com/macros/s/AKfycbzPR3gBZ8ABm53vuvK5IXW-rlOpXp5YlTobq8Ae1_90DzwCH-PwszJmQu5bRAG1upPTqg/exec", {
              method: "POST",
              body: JSON.stringify(formData),
            });
            alert("Message sent! We'll get back to you shortly.");
            target.reset();
          } catch (error) {
            alert("Something went wrong. Please try again.");
          }
        }} className="mx-auto max-w-[420px] space-y-4">
          <input 
            type="text"
            name="name"
            placeholder="Name" 
            required
            className="w-full border border-brand-border bg-brand-surface p-4 text-white placeholder-brand-gray focus:border-brand-green focus:outline-none transition-colors"
          />
          <input 
            type="email"
            name="email"
            placeholder="Email" 
            required
            className="w-full border border-brand-border bg-brand-surface p-4 text-white placeholder-brand-gray focus:border-brand-green focus:outline-none transition-colors"
          />
          <input 
            type="tel"
            name="phone"
            placeholder="Phone Number (Optional)" 
            className="w-full border border-brand-border bg-brand-surface p-4 text-white placeholder-brand-gray focus:border-brand-green focus:outline-none transition-colors"
          />
          {/* Nuevo campo para la duda */}
          <textarea 
            name="message"
            placeholder="How can we help you?" 
            required
            rows={4}
            className="w-full resize-none border border-brand-border bg-brand-surface p-4 text-white placeholder-brand-gray focus:border-brand-green focus:outline-none transition-colors"
          ></textarea>
          
          <button 
            type="submit" 
            className="w-full bg-brand-green p-4 font-bold text-black transition-all hover:bg-white hover:scale-[1.02]"
          >
            Send Message
          </button>
        </form>
      </Reveal>

    </section>
  );
};
