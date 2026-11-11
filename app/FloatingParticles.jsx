'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function FloatingParticles() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generates 25 random particles on load
    const newParticles = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      // 75% chance of a heart, 25% chance of a poop for the Glooberpapple vibes
      type: Math.random() > 0.25 ? '❤️' : '💩',
      left: Math.random() * 100, // Random horizontal position
      animationDuration: 15 + Math.random() * 25, // Floats up over 15 to 40 seconds
      delay: Math.random() * -30, // Negative delay so they are already on screen when she loads the page
      size: 14 + Math.random() * 24, // Random sizes between 14px and 38px
      rotation: Math.random() * 360 > 180 ? 360 : -360 // Spins left or right
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute bottom-[-50px] drop-shadow-md opacity-60"
          style={{ left: `${p.left}%`, fontSize: `${p.size}px` }}
          animate={{
            y: ['0vh', '-120vh'], // Floats from bottom to past the top of the screen
            rotate: [0, p.rotation],
          }}
          transition={{
            duration: p.animationDuration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'linear'
          }}
        >
          {p.type}
        </motion.div>
      ))}
    </div>
  );
}