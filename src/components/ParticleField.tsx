import React, { useRef, useEffect } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  hue: number;
  life: number;
}

const ParticleField: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);
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

    const createParticle = (x?: number, y?: number): Particle => ({
      x: x ?? Math.random() * canvas.width,
      y: y ?? Math.random() * canvas.height,
      size: Math.random() * 3 + 1,
      speedX: (Math.random() - 0.5) * 1,
      speedY: (Math.random() - 0.5) * 1,
      hue: 30 + Math.random() * 30, // Warm colors: 30-60
      life: 1
    });

    const initParticles = () => {
      particles.current = [];
      const count = Math.min(60, Math.floor(window.innerWidth * window.innerHeight / 20000));
      for (let i = 0; i < count; i++) {
        particles.current.push(createParticle());
      }
    };

    const animate = () => {
      time.current += 0.01;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create new particles near mouse
      if (Math.random() < 0.1) {
        const newParticle = createParticle(
          mousePosition.current.x + (Math.random() - 0.5) * 50,
          mousePosition.current.y + (Math.random() - 0.5) * 50
        );
        newParticle.size = Math.random() * 2 + 0.5;
        particles.current.push(newParticle);
      }

      // Update and draw particles
      particles.current = particles.current.filter(p => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.life -= 0.002;

        // Mouse interaction
        const dx = mousePosition.current.x - p.x;
        const dy = mousePosition.current.y - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          const angle = Math.atan2(dy, dx);
          const force = (100 - distance) / 2000;
          p.x -= Math.cos(angle) * force * 5;
          p.y -= Math.sin(angle) * force * 5;
          p.life += 0.01;
        }

        // Boundary check
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -0.8;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -0.8;

        // Keep within bounds
        p.x = Math.max(0, Math.min(canvas.width, p.x));
        p.y = Math.max(0, Math.min(canvas.height, p.y));

        // Draw particle
        const pulse = Math.sin(time.current * 5 + p.x) * 0.2 + 0.8;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * pulse * p.life, 0, Math.PI * 2);
        
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3);
        gradient.addColorStop(0, `hsla(${p.hue}, 90%, 70%, ${p.life})`);
        gradient.addColorStop(1, `hsla(${p.hue + 20}, 80%, 60%, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.fill();

        return p.life > 0.1 && p.x > 0 && p.x < canvas.width && p.y > 0 && p.y < canvas.height;
      });

      animationFrame.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', () => {
      resize();
      initParticles();
    });

    resize();
    initParticles();
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
      className="fixed inset-0 pointer-events-none z-10"
      style={{ 
        background: 'transparent',
        mixBlendMode: 'screen'
      }}
    />
  );
};

export default ParticleField;