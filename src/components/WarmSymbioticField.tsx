import React, { useRef, useEffect } from 'react';

interface Symbiote {
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  size: number;
  speed: number;
  hue: number;
  pulsePhase: number;
  trail: { x: number; y: number }[];
  energy: number;
}

const WarmSymbioticField: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const symbiotes = useRef<Symbiote[]>([]);
  const animationFrame = useRef<number>();
  const mousePosition = useRef({ x: 0, y: 0 });
  const time = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = { 
        x: e.clientX, 
        y: e.clientY 
      };
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createSymbiote = (): Symbiote => {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      return {
        x: x,
        y: y,
        targetX: x,
        targetY: y,
        size: Math.random() * 3 + 1.5,
        speed: 0.02 + Math.random() * 0.03,
        hue: 30 + Math.random() * 30,
        pulsePhase: Math.random() * Math.PI * 2,
        trail: [],
        energy: Math.random() * 0.5 + 0.3
      };
    };

    const initSymbiotes = () => {
      symbiotes.current = [];
      const count = Math.min(20, Math.floor(window.innerWidth * window.innerHeight / 30000));
      for (let i = 0; i < count; i++) {
        symbiotes.current.push(createSymbiote());
      }
    };

    const updateTargets = () => {
      symbiotes.current.forEach(s => {
        // Move towards mouse with some randomness
        const dx = mousePosition.current.x - s.x;
        const dy = mousePosition.current.y - s.y;
        const distanceToMouse = Math.sqrt(dx * dx + dy * dy);

        if (distanceToMouse < 300) {
          // Strong attraction to mouse
          const attraction = (300 - distanceToMouse) / 300;
          s.targetX = s.x + dx * attraction * 0.1;
          s.targetY = s.y + dy * attraction * 0.1;
          s.energy = Math.min(1, s.energy + 0.01);
        } else {
          // Random wandering
          s.targetX = s.x + (Math.random() - 0.5) * 100;
          s.targetY = s.y + (Math.random() - 0.5) * 100;
          s.energy = Math.max(0.3, s.energy - 0.002);
        }

        // Keep targets within bounds
        s.targetX = Math.max(50, Math.min(canvas.width - 50, s.targetX));
        s.targetY = Math.max(50, Math.min(canvas.height - 50, s.targetY));
      });
    };

    const animate = () => {
      time.current += 0.01;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update targets based on mouse position
      updateTargets();

      symbiotes.current.forEach(s => {
        // Smooth movement towards target
        s.x += (s.targetX - s.x) * s.speed;
        s.y += (s.targetY - s.y) * s.speed;

        // Add trail
        s.trail.push({ x: s.x, y: s.y });
        if (s.trail.length > 8) {
          s.trail.shift();
        }

        // Draw trail
        if (s.trail.length > 1) {
          for (let i = 0; i < s.trail.length - 1; i++) {
            const t1 = s.trail[i];
            const t2 = s.trail[i + 1];
            const alpha = (i / s.trail.length) * 0.2 * s.energy;
            
            ctx.beginPath();
            ctx.moveTo(t1.x, t1.y);
            ctx.lineTo(t2.x, t2.y);
            ctx.strokeStyle = `hsla(${s.hue}, 80%, 70%, ${alpha})`;
            ctx.lineWidth = s.size * 0.8 * (i / s.trail.length);
            ctx.stroke();
          }
        }

        // Draw energy field
        const pulse = Math.sin(time.current * 3 + s.pulsePhase) * 0.2 + 0.8;
        const currentSize = s.size * pulse * s.energy;
        
        const gradient = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.size * 12);
        gradient.addColorStop(0, `hsla(${s.hue}, 90%, 70%, ${s.energy * 0.3})`);
        gradient.addColorStop(0.4, `hsla(${s.hue}, 80%, 60%, ${s.energy * 0.15})`);
        gradient.addColorStop(1, `hsla(${s.hue}, 70%, 50%, 0)`);
        
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size * 12, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Draw core
        ctx.beginPath();
        ctx.arc(s.x, s.y, currentSize * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${s.hue}, 90%, 70%, ${s.energy})`;
        ctx.fill();

        // Draw inner glow
        ctx.beginPath();
        ctx.arc(s.x, s.y, currentSize, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${s.hue}, 100%, 80%, ${s.energy * 0.8})`;
        ctx.fill();
      });

      animationFrame.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', () => {
      resize();
      initSymbiotes();
    });

    resize();
    initSymbiotes();
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resize);
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-20"
      style={{ 
        background: 'transparent',
        mixBlendMode: 'screen'
      }}
    />
  );
};

export default WarmSymbioticField; 