import React from 'react';
import { Video, Users, Zap } from 'lucide-react';
import { Reveal } from './Reveal';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="group border border-white/10 p-9 transition-all duration-300 hover:-translate-y-2 hover:border-brand-green bg-brand-dark/50 backdrop-blur-sm">
    <div className="mb-4 text-brand-green opacity-80 group-hover:opacity-100 transition-opacity">
      {icon}
    </div>
    <h3 className="mb-2 text-xl font-bold">{title}</h3>
    <p className="text-brand-gray">{description}</p>
  </div>
);

export const About: React.FC = () => {
  return (
    <section className="relative px-6 py-32 sm:px-[10%]">
      <Reveal>
        <h2 className="mb-4 text-4xl font-bold sm:text-5xl">Where creators collide.</h2>
      </Reveal>
      
      <Reveal delay={0.1}>
        <p className="mb-16 max-w-[700px] text-xl text-brand-gray">
          A premium cowork space designed for collaboration, content creation
          and creative growth — right in the heart of El Paso.
        </p>
      </Reveal>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
        <Reveal delay={0.2}>
          <FeatureCard 
            icon={<Video size={32} />}
            title="Production-Ready" 
            description="Podcast rooms, photo setups and flexible creative areas ready for your next project." 
          />
        </Reveal>
        
        <Reveal delay={0.3}>
          <FeatureCard 
            icon={<Users size={32} />}
            title="Community Driven" 
            description="Connect with ambitious creators and entrepreneurs in a collaborative environment." 
          />
        </Reveal>
        
        <Reveal delay={0.4}>
          <FeatureCard 
            icon={<Zap size={32} />}
            title="High-Energy Design" 
            description="A space engineered for momentum, inspiration, and getting things done." 
          />
        </Reveal>
      </div>
    </section>
  );
};