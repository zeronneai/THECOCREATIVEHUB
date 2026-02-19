import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // --- Setup ---
    const scene = new THREE.Scene();
    
    // Camera setup
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // --- Objects ---
    const geometry = new THREE.IcosahedronGeometry(2.4, 1); // Reduced detail slightly for cleaner low-poly look
    const material = new THREE.MeshStandardMaterial({
      color: 0x6FAF45,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
      roughness: 0.5,
      metalness: 0.8
    });
    
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // --- Lighting ---
    const light = new THREE.PointLight(0x6FAF45, 2, 50);
    light.position.set(5, 5, 5);
    scene.add(light);
    
    const ambientLight = new THREE.AmbientLight(0x404040); // Soft white light
    scene.add(ambientLight);

    // --- State ---
    const mouse = new THREE.Vector2();
    let frameId: number;

    // --- Handlers ---
    const handleMouseMove = (event: MouseEvent) => {
      // Normalize mouse position to -0.5 to 0.5 range
      mouse.x = (event.clientX / window.innerWidth) - 0.5;
      mouse.y = (event.clientY / window.innerHeight) - 0.5;
    };

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const animate = () => {
      frameId = requestAnimationFrame(animate);

      // Rotation logic
      mesh.rotation.y += 0.002 + mouse.x * 0.02;
      mesh.rotation.x += 0.002 + mouse.y * 0.02;

      renderer.render(scene, camera);
    };

    // --- Listeners ---
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    // Start
    animate();

    // --- Cleanup ---
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameId);
      
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      // Dispose resources
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-0 pointer-events-none"
      aria-hidden="true"
    />
  );
};