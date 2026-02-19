import React, { useEffect, useRef } from 'react';

export const CursorGlow: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const moveCursor = (e: MouseEvent) => {
      // Direct DOM manipulation for maximum performance instead of React state
      cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, []);

  return (
    <div 
      ref={cursorRef}
      className="fixed top-0 left-0 w-[500px] h-[500px] pointer-events-none z-[1] mix-blend-screen"
      style={{
        // Using rgba(111,175,69, 0.15) as requested for --green-soft
        background: 'radial-gradient(circle, rgba(111,175,69,0.15), transparent 65%)',
        willChange: 'transform'
      }}
    />
  );
};