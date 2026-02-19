import React, { useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ThreeBackground } from './components/ThreeBackground';
import { VideoBackground } from './components/VideoBackground';
import { CursorGlow } from './components/CursorGlow';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Membership } from './components/Membership';
import { Footer } from './components/Footer';
import { Loader } from './components/Loader';
import { AnnouncementBar } from './components/AnnouncementBar';

// Register GSAP plugin globally
gsap.registerPlugin(ScrollTrigger);

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loader onComplete={() => setLoading(false)} />}
      
      <div className="relative min-h-screen w-full text-white selection:bg-brand-green selection:text-black">
        {/* Background Layers */}
        <VideoBackground />
        <ThreeBackground />
        <CursorGlow />
        
        {/* Fixed Announcement Bar */}
        <AnnouncementBar />

        {/* Main Content - Relative to sit above background */}
        <main className="relative z-10 w-full overflow-hidden">
          <Hero />
          <About />
          <Membership />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default App;