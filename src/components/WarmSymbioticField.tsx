import React, { useRef, useEffect } from 'react';

interface Symbiote {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
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
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createSymbiote = (): Symbiote => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 4 + 2,
      speedX: (Math.random() - 0.5) * 0.8,
      speedY: (Math.random() - 0.5) * 0.8,
      hue: 30 + Math.random() * 30, // Warm hues: 30-60 (orange-yellow range)
      pulsePhase: Math.random() * Math.PI * 2,
      trail: [],
      energy: Math.random() * 0.5 + 0.5
    });

    const initSymbiotes = () => {
      symbiotes.current = [];
      const count = Math.min(25, Math.floor(window.innerWidth * window.innerHeight / 20000));
      for (let i = 0; i < count; i++) {
        symbiotes.current.push(createSymbiote());
      }
    };

    const drawSymbiote = (s: Symbiote, ctx: CanvasRenderingContext2D) => {
      const pulse = Math.sin(time.current * 3 + s.pulsePhase) * 0.2 + 0.8;
      const currentSize = s.size * pulse;

      // Draw trail
      if (s.trail.length > 1) {
        for (let i = 0; i < s.trail.length - 1; i++) {
          const t1 = s.trail[i];
          const t2 = s.trail[i + 1];
          const alpha = (i / s.trail.length) * 0.3;
          
          ctx.beginPath();
          ctx.moveTo(t1.x, t1.y);
          ctx.lineTo(t2.x, t2.y);
          ctx.strokeStyle = `hsla(${s.hue}, 80%, 60%, ${alpha})`;
          ctx.lineWidth = s.size * 0.8 * (i / s.trail.length);
          ctx.stroke();
        }
      }

      // Draw energy field
      const gradient = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.size * 8);
      gradient.addColorStop(0, `hsla(${s.hue}, 90%, 70%, ${s.energy * 0.3})`);
      gradient.addColorStop(0.5, `hsla(${s.hue}, 80%, 60%, ${s.energy * 0.1})`);
      gradient.addColorStop(1, `hsla(${s.hue}, 70%, 50%, 0)`);
      
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.size * 8, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      // Draw core
      ctx.beginPath();
      ctx.arc(s.x, s.y, currentSize, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${s.hue}, 90%, 70%, ${s.energy})`;
      ctx.fill();

      // Draw inner glow
      ctx.beginPath();
      ctx.arc(s.x, s.y, currentSize * 0.6, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${s.hue}, 100%, 80%, ${s.energy * 0.8})`;
      ctx.fill();

      // Draw connecting tendrils between nearby symbiotes
      symbiotes.current.forEach(other => {
        if (other === s) return;
        
        const dx = other.x - s.x;
        const dy = other.y - s.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
          const gradient = ctx.createLinearGradient(s.x, s.y, other.x, other.y);
          gradient.addColorStop(0, `hsla(${s.hue}, 80%, 70%, 0.2)`);
          gradient.addColorStop(0.5, `hsla(${(s.hue + other.hue) / 2}, 80%, 60%, 0.3)`);
          gradient.addColorStop(1, `hsla(${other.hue}, 80%, 70%, 0.2)`);

          ctx.beginPath();
          ctx.moveTo(s.x, s.y);
          ctx.lineTo(other.x, other.y);
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 1.5 * (1 - distance / 150);
          ctx.stroke();

          // Draw energy particles along connection
          const particleCount = 3;
          for (let i = 0; i < particleCount; i++) {
            const t = (Math.sin(time.current * 5 + i) + 1) / 2;
            const px = s.x + dx * t;
            const py = s.y + dy * t;
            
            ctx.beginPath();
            ctx.arc(px, py, 2, 0, Math.PI * 2);
            ctx.fillStyle = `hsla(${(s.hue + other.hue) / 2}, 90%, 70%, 0.4)`;
            ctx.fill();
          }
        }
      });
    };

    const animate = () => {
      time.current += 0.016;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      symbiotes.current.forEach(s => {
        // Update position with organic movement
        s.x += s.speedX + Math.sin(time.current + s.pulsePhase) * 0.2;
        s.y += s.speedY + Math.cos(time.current + s.pulsePhase) * 0.2;

        // Wrap around edges with smooth transition
        if (s.x < -50) s.x = canvas.width + 50;
        if (s.x > canvas.width + 50) s.x = -50;
        if (s.y < -50) s.y = canvas.height + 50;
        if (s.y > canvas.height + 50) s.y = -50;

        // Mouse interaction - attraction/repulsion
        const dx = mousePosition.current.x - s.x;
        const dy = mousePosition.current.y - s.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 200) {
          const force = (200 - distance) / 10000;
          const angle = Math.atan2(dy, dx);
          
          // Gentle attraction
          s.x += Math.cos(angle) * force * 30;
          s.y += Math.sin(angle) * force * 30;
          
          // Increase energy near mouse
          s.energy = Math.min(1, s.energy + 0.01);
          
          // Add trail points
          s.trail.push({ x: s.x, y: s.y });
          if (s.trail.length > 10) {
            s.trail.shift();
          }
        } else {
          s.energy = Math.max(0.5, s.energy - 0.005);
          
          // Gradually fade trail
          if (s.trail.length > 0 && Math.random() > 0.95) {
            s.trail.shift();
          }
        }

        // Random speed changes for organic movement
        if (Math.random() < 0.01) {
          s.speedX += (Math.random() - 0.5) * 0.2;
          s.speedY += (Math.random() - 0.5) * 0.2;
          
          // Limit speed
          const maxSpeed = 1.5;
          const currentSpeed = Math.sqrt(s.speedX * s.speedX + s.speedY * s.speedY);
          if (currentSpeed > maxSpeed) {
            s.speedX = (s.speedX / currentSpeed) * maxSpeed;
            s.speedY = (s.speedY / currentSpeed) * maxSpeed;
          }
        }

        drawSymbiote(s, ctx);
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