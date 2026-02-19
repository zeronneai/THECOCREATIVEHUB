import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface LoaderProps {
  onComplete: () => void;
}

export const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
           onComplete();
        }
      });

      // Initial states
      gsap.set(logoRef.current, { opacity: 0, scale: 0.9, y: 20 });
      
      // Animation sequence
      tl.to(logoRef.current, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
      })
      .to(logoRef.current, {
        opacity: 0,
        y: -30,
        duration: 0.5,
        delay: 0.8, 
        ease: "power2.in"
      })
      .to(containerRef.current, {
        yPercent: -100,
        duration: 1,
        ease: "power4.inOut"
      });

    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
    >
      <img 
        ref={logoRef}
        src="https://res.cloudinary.com/dsprn0ew4/image/upload/v1770244174/ChatGPT_Image_Feb_4_2026_04_29_14_PM_ftmqj9.png" 
        alt="The Co-Creative Hub Logo"
        className="w-32 md:w-48 object-contain"
      />
    </div>
  );
};