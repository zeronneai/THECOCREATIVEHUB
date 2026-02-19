import React, { useEffect, useRef } from 'react';
import { Reveal } from './Reveal';
import gsap from 'gsap';

// Helper component to split text into characters while preserving structure
const SplitText = ({ text, className = "" }: { text: string, className?: string }) => (
  <span className={className}>
    {text.split("").map((char, i) => (
      <span key={i} className="char">
        {char === " " ? "\u00A0" : char}
      </span>
    ))}
  </span>
);

export const Hero: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);

  const scrollToMembership = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const membershipSection = document.getElementById('membership');
    if (membershipSection) {
      membershipSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;

    // Select only chars within this heading
    const chars = el.querySelectorAll('.char');

    const ctx = gsap.context(() => {
      // ===== MOBILE: SCROLL EXPLOSION =====
      gsap.from(chars, {
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
        },
        x: () => gsap.utils.random(-40, 40),
        y: () => gsap.utils.random(-40, 40),
        rotation: () => gsap.utils.random(-10, 10),
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
        stagger: {
          amount: 0.4
        }
      });
    }, el);

    // ===== DESKTOP: MOUSE INTERACTION =====
    const handleMouseEnter = () => {
      gsap.to(chars, {
        x: () => gsap.utils.random(-30, 30),
        y: () => gsap.utils.random(-30, 30),
        rotation: () => gsap.utils.random(-8, 8),
        opacity: 0.9,
        duration: 0.6,
        ease: "power3.out",
        stagger: {
          amount: 0.3
        },
        overwrite: 'auto'
      });
    };

    const handleMouseLeave = () => {
      gsap.to(chars, {
        x: 0,
        y: 0,
        rotation: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power4.out",
        overwrite: 'auto'
      });
    };

    el.addEventListener('mouseenter', handleMouseEnter);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      ctx.revert();
      el.removeEventListener('mouseenter', handleMouseEnter);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="hero relative flex min-h-screen items-center justify-center px-4 py-32 text-center sm:px-10">
      <div className="max-w-[900px] flex flex-col items-center">
        
        {/* 
          We removed the Reveal wrapper here because the script 
          handles the entrance animation (gsap.from opacity:0) 
        */}
        <h1 id="explode-text" ref={headingRef} className="mb-6 cursor-default">
          <SplitText text="The" className="line soft" />
          <br />
          <SplitText text="First & Only" className="line strong green" />
          <br />
          <SplitText text="Co-Creative Space" className="line strong" />
          <br />
          <SplitText text="in El Paso" className="line soft" />
        </h1>

        <Reveal delay={0.2}>
          <p className="subtitle mx-auto mb-12 max-w-[650px] text-lg text-brand-gray sm:text-xl">
            Built for creators, filmmakers, designers, podcasters and the multi-media community.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <a 
            href="#membership" 
            onClick={scrollToMembership}
            className="cta group inline-block border border-brand-green px-10 py-4 text-base font-semibold uppercase tracking-[0.5px] text-brand-green transition-all duration-300 hover:bg-brand-green hover:text-black cursor-pointer"
          >
            Become a Founding Member
          </a>
        </Reveal>

      </div>
    </section>
  );
};