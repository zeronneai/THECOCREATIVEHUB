import React, { useEffect, useRef } from 'react';

export const VideoBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const offset = window.scrollY * 0.03;
        containerRef.current.style.transform = `translateY(${offset}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="video-bg">
      <video id="video-desktop" autoPlay muted loop playsInline>
        <source src="https://res.cloudinary.com/dsprn0ew4/video/upload/v1770245850/Abstract_cinematic_background_1080p_202602041_1_lvxsgv.mp4" type="video/mp4" />
      </video>

      <video id="video-mobile" autoPlay muted loop playsInline>
        <source src="https://res.cloudinary.com/dsprn0ew4/video/upload/v1770245609/Abstract_cinematic_background_1080p_202602041_gbxg7c.mp4" type="video/mp4" />
      </video>
    </div>
  );
};