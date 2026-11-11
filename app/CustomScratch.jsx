'use client';
import { useRef, useEffect, useState } from 'react';

export default function CustomScratch({ imageSrc }) {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    // Paints the canvas our soft pink color
    ctx.fillStyle = '#fbcfe8'; // Tailwind rose-200
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }, []);

  const scratch = (e) => {
    if (!isDrawing && e.type !== 'touchmove') return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    
    // Supports both mouse and phone touch screens
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    
    // Calculates perfect cursor alignment even if the window is resized
    const x = (clientX - rect.left) * (canvas.width / rect.width);
    const y = (clientY - rect.top) * (canvas.height / rect.height);

    ctx.globalCompositeOperation = 'destination-out';
    ctx.beginPath();
    ctx.arc(x, y, 40, 0, Math.PI * 2); // 40 is the brush size
    ctx.fill();
  };

  return (
    <div className="relative w-full max-w-[600px] aspect-[3/2] rounded-3xl overflow-hidden shadow-inner border-[6px] border-white/60 select-none touch-none">
      {/* The Hidden Photo */}
      <img 
        src={imageSrc} 
        alt="Us" 
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
      />
      
      {/* The Pink Scratch Layer */}
      <canvas
        ref={canvasRef}
        width={600}
        height={400}
        className="absolute inset-0 w-full h-full cursor-crosshair"
        onMouseDown={() => setIsDrawing(true)}
        onMouseUp={() => setIsDrawing(false)}
        onMouseMove={scratch}
        onMouseLeave={() => setIsDrawing(false)}
        onTouchStart={() => setIsDrawing(true)}
        onTouchEnd={() => setIsDrawing(false)}
        onTouchMove={scratch}
      />
    </div>
  );
}