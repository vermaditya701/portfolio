import { useEffect, useRef, useCallback } from 'react';
import { useTheme } from '../context/ThemeContext';

interface Star {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  twinkleSpeed: number;
  twinklePhase: number;
  rotation: number;
  rotationSpeed: number;
  type: 'eight-point' | 'four-point';
}

interface Flower {
  x: number;
  y: number;
  size: number;
  speed: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  color: string;
  centerColor: string;
  swayOffset: number;
  bloomProgress: number;
  targetBloom: number;
  hasBloomedOnce: boolean;
}

interface Leaf {
  x: number;
  y: number;
  size: number;
  speed: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  type: number;
  swayOffset: number;
  hoverScale: number;
  targetHoverScale: number;
}

export const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const starsRef = useRef<Star[]>([]);
  const flowersRef = useRef<Flower[]>([]);
  const leavesRef = useRef<Leaf[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>(0);

  // White and cream flower colors matching reference image
  const flowerColors = [
    { petal: 'rgba(255, 255, 255, 0.95)', center: 'rgba(254, 240, 138, 1)' }, // Pure white
    { petal: 'rgba(254, 252, 232, 0.95)', center: 'rgba(250, 204, 21, 1)' }, // Cream white
    { petal: 'rgba(250, 250, 250, 0.95)', center: 'rgba(253, 224, 71, 1)' }, // Off white
    { petal: 'rgba(248, 250, 252, 0.95)', center: 'rgba(251, 191, 36, 1)' }, // Cool white
    { petal: 'rgba(255, 251, 235, 0.95)', center: 'rgba(245, 158, 11, 1)' }, // Warm white
    { petal: 'rgba(253, 253, 253, 0.95)', center: 'rgba(252, 211, 77, 1)' }, // Bright white
  ];

  // Draw natural flower leaves
  const drawLeaf = useCallback((
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    size: number,
    rotation: number,
    type: number,
    opacity: number
  ) => {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rotation);
    ctx.globalAlpha = opacity;

    const leafGradient = ctx.createLinearGradient(0, -size * 0.5, 0, size * 0.5);
    leafGradient.addColorStop(0, 'rgba(196, 181, 253, 0.7)'); // Light purple
    leafGradient.addColorStop(0.5, 'rgba(167, 139, 250, 0.75)'); // Medium purple
    leafGradient.addColorStop(1, 'rgba(139, 92, 246, 0.7)'); // Deep purple

    switch (type % 5) {
      case 0: // Elongated natural leaf
        ctx.beginPath();
        ctx.moveTo(0, -size * 0.7);
        ctx.bezierCurveTo(size * 0.25, -size * 0.5, size * 0.3, -size * 0.2, size * 0.25, 0);
        ctx.bezierCurveTo(size * 0.3, size * 0.2, size * 0.25, size * 0.5, 0, size * 0.7);
        ctx.bezierCurveTo(-size * 0.25, size * 0.5, -size * 0.3, size * 0.2, -size * 0.25, 0);
        ctx.bezierCurveTo(-size * 0.3, -size * 0.2, -size * 0.25, -size * 0.5, 0, -size * 0.7);
        ctx.fillStyle = leafGradient;
        ctx.fill();
        break;

      case 1: // Willow-like leaf
        ctx.beginPath();
        ctx.moveTo(0, -size * 0.8);
        ctx.bezierCurveTo(size * 0.15, -size * 0.6, size * 0.2, -size * 0.3, size * 0.15, 0);
        ctx.bezierCurveTo(size * 0.2, size * 0.3, size * 0.15, size * 0.6, 0, size * 0.8);
        ctx.bezierCurveTo(-size * 0.15, size * 0.6, -size * 0.2, size * 0.3, -size * 0.15, 0);
        ctx.bezierCurveTo(-size * 0.2, -size * 0.3, -size * 0.15, -size * 0.6, 0, -size * 0.8);
        ctx.fillStyle = leafGradient;
        ctx.fill();
        break;

      case 2: // Fern-like leaf with gentle curves
        ctx.beginPath();
        ctx.moveTo(0, -size * 0.6);
        for (let i = 0; i < 8; i++) {
          const t = i / 7;
          const y = -size * 0.6 + t * size * 1.2;
          const x = Math.sin(t * Math.PI) * size * 0.3;
          if (i === 0) {
            ctx.lineTo(x, y);
          } else {
            ctx.quadraticCurveTo(x * 1.2, y - size * 0.1, x, y);
          }
        }
        for (let i = 7; i >= 0; i--) {
          const t = i / 7;
          const y = -size * 0.6 + t * size * 1.2;
          const x = -Math.sin(t * Math.PI) * size * 0.3;
          ctx.quadraticCurveTo(x * 1.2, y - size * 0.1, x, y);
        }
        ctx.closePath();
        ctx.fillStyle = leafGradient;
        ctx.fill();
        break;

      case 3: // Rounded maple-like leaf
        ctx.beginPath();
        ctx.moveTo(0, -size * 0.5);
        ctx.bezierCurveTo(size * 0.4, -size * 0.3, size * 0.35, 0, size * 0.2, size * 0.3);
        ctx.bezierCurveTo(size * 0.1, size * 0.4, 0, size * 0.5, 0, size * 0.5);
        ctx.bezierCurveTo(0, size * 0.5, -size * 0.1, size * 0.4, -size * 0.2, size * 0.3);
        ctx.bezierCurveTo(-size * 0.35, 0, -size * 0.4, -size * 0.3, 0, -size * 0.5);
        ctx.fillStyle = leafGradient;
        ctx.fill();
        break;

      case 4: // Compound flower leaf (3 leaflets)
        for (let i = -1; i <= 1; i++) {
          ctx.save();
          const offsetX = i * size * 0.3;
          const offsetY = Math.abs(i) * size * 0.15;
          ctx.translate(offsetX, offsetY);
          ctx.rotate(i * 0.3);

          ctx.beginPath();
          ctx.moveTo(0, -size * 0.4);
          ctx.bezierCurveTo(size * 0.2, -size * 0.3, size * 0.22, -size * 0.1, size * 0.18, size * 0.1);
          ctx.bezierCurveTo(size * 0.15, size * 0.3, 0, size * 0.4, 0, size * 0.4);
          ctx.bezierCurveTo(0, size * 0.4, -size * 0.15, size * 0.3, -size * 0.18, size * 0.1);
          ctx.bezierCurveTo(-size * 0.22, -size * 0.1, -size * 0.2, -size * 0.3, 0, -size * 0.4);
          ctx.fillStyle = leafGradient;
          ctx.fill();
          ctx.restore();
        }
        break;
    }

    // Central vein with side veins
    ctx.strokeStyle = 'rgba(139, 92, 246, 0.4)'; // Purple vein
    ctx.lineWidth = size * 0.02;
    ctx.beginPath();
    ctx.moveTo(0, -size * 0.6);
    ctx.lineTo(0, size * 0.6);
    ctx.stroke();

    // Side veins
    ctx.lineWidth = size * 0.01;
    for (let i = -3; i <= 3; i++) {
      if (i !== 0) {
        const y = i * size * 0.15;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(size * 0.15, y - size * 0.05);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(-size * 0.15, y - size * 0.05);
        ctx.stroke();
      }
    }

    ctx.restore();
  }, []);

  // Draw glittering seed
  const drawSeed = useCallback((
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    size: number,
    color: string,
    centerColor: string,
    opacity: number,
    time: number
  ) => {
    ctx.save();
    ctx.translate(x, y);
    ctx.globalAlpha = opacity;

    // Glitter effect
    const glitterPulse = Math.sin(time * 0.05) * 0.3 + 0.7;

    // Outer glow
    const glow = ctx.createRadialGradient(0, 0, 0, 0, 0, size * 2);
    glow.addColorStop(0, `${color.replace('0.9)', `${glitterPulse * 0.6})`)}`);
    glow.addColorStop(0.5, `${color.replace('0.9)', '0.2)')}`);
    glow.addColorStop(1, 'rgba(255, 255, 255, 0)');

    ctx.beginPath();
    ctx.arc(0, 0, size * 2, 0, Math.PI * 2);
    ctx.fillStyle = glow;
    ctx.fill();

    // Seed body - small sphere
    const seedGradient = ctx.createRadialGradient(-size * 0.2, -size * 0.2, 0, 0, 0, size);
    seedGradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
    seedGradient.addColorStop(0.3, color);
    seedGradient.addColorStop(1, centerColor);

    ctx.beginPath();
    ctx.arc(0, 0, size, 0, Math.PI * 2);
    ctx.fillStyle = seedGradient;
    ctx.fill();

    // Sparkles
    for (let i = 0; i < 4; i++) {
      const angle = (Math.PI * 2 * i / 4) + time * 0.02;
      const sparkleX = Math.cos(angle) * size * 1.5;
      const sparkleY = Math.sin(angle) * size * 1.5;

      ctx.fillStyle = `rgba(255, 255, 255, ${glitterPulse * 0.8})`;
      ctx.beginPath();
      ctx.arc(sparkleX, sparkleY, size * 0.15, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.restore();
  }, []);

  // Draw bloomed flower
  const drawBloomedFlower = useCallback((
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    size: number,
    rotation: number,
    color: string,
    centerColor: string,
    opacity: number,
    bloomProgress: number
  ) => {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rotation);
    ctx.globalAlpha = opacity * bloomProgress;

    const actualSize = size * (0.5 + bloomProgress * 0.5);

    ctx.shadowColor = color;
    ctx.shadowBlur = actualSize * 0.3 * bloomProgress;

    // 5 petals
    const petalCount = 5;
    for (let i = 0; i < petalCount; i++) {
      ctx.save();
      ctx.rotate((Math.PI * 2 * i) / petalCount);

      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(
        -actualSize * 0.45, -actualSize * 0.35,
        -actualSize * 0.55, -actualSize * 0.75,
        0, -actualSize
      );
      ctx.bezierCurveTo(
        actualSize * 0.55, -actualSize * 0.75,
        actualSize * 0.45, -actualSize * 0.35,
        0, 0
      );

      const petalGradient = ctx.createRadialGradient(0, -actualSize * 0.4, 0, 0, -actualSize * 0.4, actualSize * 0.7);
      petalGradient.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
      petalGradient.addColorStop(0.3, color);
      petalGradient.addColorStop(1, color);

      ctx.fillStyle = petalGradient;
      ctx.fill();

      // Vein
      ctx.strokeStyle = `${centerColor.replace('1)', '0.2)')}`;
      ctx.lineWidth = actualSize * 0.02;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(0, -actualSize * 0.8);
      ctx.stroke();

      ctx.restore();
    }

    ctx.shadowBlur = 0;

    // Stamen
    const stamenCount = 12;
    for (let i = 0; i < stamenCount; i++) {
      const angle = (Math.PI * 2 * i) / stamenCount;
      const stamenLength = actualSize * 0.25;

      ctx.strokeStyle = 'rgba(254, 240, 138, 0.9)';
      ctx.lineWidth = actualSize * 0.035;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(Math.cos(angle) * stamenLength, Math.sin(angle) * stamenLength);
      ctx.stroke();

      ctx.fillStyle = centerColor;
      ctx.beginPath();
      ctx.arc(
        Math.cos(angle) * stamenLength,
        Math.sin(angle) * stamenLength,
        actualSize * 0.06,
        0,
        Math.PI * 2
      );
      ctx.fill();
    }

    // Center
    ctx.beginPath();
    ctx.arc(0, 0, actualSize * 0.15, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(254, 240, 138, 1)';
    ctx.fill();

    ctx.restore();
  }, []);

  const drawFourPointStar = useCallback((
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    size: number,
    rotation: number,
    opacity: number,
    isHovered: boolean
  ) => {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rotation);

    const glowSize = isHovered ? size * 10 : size * 6;

    const outerGlow = ctx.createRadialGradient(0, 0, 0, 0, 0, glowSize);
    outerGlow.addColorStop(0, `rgba(167, 139, 250, ${opacity * (isHovered ? 0.5 : 0.3)})`);
    outerGlow.addColorStop(0.4, `rgba(139, 92, 246, ${opacity * (isHovered ? 0.3 : 0.15)})`);
    outerGlow.addColorStop(1, 'rgba(109, 40, 217, 0)');

    ctx.beginPath();
    ctx.arc(0, 0, glowSize, 0, Math.PI * 2);
    ctx.fillStyle = outerGlow;
    ctx.fill();

    const points = 4;
    const outerRadius = size * 3;
    const innerRadius = size * 0.4;

    ctx.beginPath();
    for (let i = 0; i < points * 2; i++) {
      const radius = i % 2 === 0 ? outerRadius : innerRadius;
      const angle = (Math.PI / points) * i;
      const px = Math.cos(angle) * radius;
      const py = Math.sin(angle) * radius;

      if (i === 0) {
        ctx.moveTo(px, py);
      } else {
        ctx.lineTo(px, py);
      }
    }
    ctx.closePath();

    const starGradient = ctx.createRadialGradient(0, 0, 0, 0, 0, outerRadius);
    starGradient.addColorStop(0, `rgba(255, 255, 255, ${opacity * (isHovered ? 1 : 0.95)})`);
    starGradient.addColorStop(0.3, `rgba(221, 214, 254, ${opacity * (isHovered ? 0.9 : 0.8)})`);
    starGradient.addColorStop(0.7, `rgba(167, 139, 250, ${opacity * (isHovered ? 0.7 : 0.6)})`);
    starGradient.addColorStop(1, `rgba(139, 92, 246, ${opacity * 0.4})`);

    ctx.fillStyle = starGradient;
    ctx.fill();

    ctx.beginPath();
    ctx.arc(0, 0, size * 0.8, 0, Math.PI * 2);
    const coreGradient = ctx.createRadialGradient(0, 0, 0, 0, 0, size * 0.8);
    coreGradient.addColorStop(0, `rgba(255, 255, 255, ${opacity})`);
    coreGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
    ctx.fillStyle = coreGradient;
    ctx.fill();

    if (isHovered) {
      ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.6})`;
      ctx.lineWidth = size * 0.15;
      ctx.lineCap = 'round';

      for (let i = 0; i < 4; i++) {
        ctx.save();
        ctx.rotate((Math.PI / 2) * i);

        const gradient = ctx.createLinearGradient(0, -outerRadius, 0, -outerRadius * 1.5);
        gradient.addColorStop(0, `rgba(255, 255, 255, ${opacity * 0.8})`);
        gradient.addColorStop(1, 'rgba(167, 139, 250, 0)');

        ctx.strokeStyle = gradient;
        ctx.beginPath();
        ctx.moveTo(0, -outerRadius);
        ctx.lineTo(0, -outerRadius * 1.5);
        ctx.stroke();
        ctx.restore();
      }
    }

    ctx.restore();
  }, []);

  const drawEightPointStar = useCallback((
    ctx: CanvasRenderingContext2D,
    x: number,
    y: number,
    size: number,
    rotation: number,
    opacity: number,
    isHovered: boolean
  ) => {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(rotation);

    const glowSize = isHovered ? size * 8 : size * 5;

    const outerGlow = ctx.createRadialGradient(0, 0, 0, 0, 0, glowSize);
    outerGlow.addColorStop(0, `rgba(167, 139, 250, ${opacity * (isHovered ? 0.4 : 0.25)})`);
    outerGlow.addColorStop(0.5, `rgba(139, 92, 246, ${opacity * (isHovered ? 0.25 : 0.12)})`);
    outerGlow.addColorStop(1, 'rgba(109, 40, 217, 0)');

    ctx.beginPath();
    ctx.arc(0, 0, glowSize, 0, Math.PI * 2);
    ctx.fillStyle = outerGlow;
    ctx.fill();

    const points = 8;
    const outerRadius = size * 2.5;
    const innerRadius = size * 0.5;

    ctx.beginPath();
    for (let i = 0; i < points * 2; i++) {
      const radius = i % 2 === 0 ? outerRadius : innerRadius;
      const angle = (Math.PI / points) * i;
      const px = Math.cos(angle) * radius;
      const py = Math.sin(angle) * radius;

      if (i === 0) {
        ctx.moveTo(px, py);
      } else {
        ctx.lineTo(px, py);
      }
    }
    ctx.closePath();

    const starGradient = ctx.createRadialGradient(0, 0, 0, 0, 0, outerRadius);
    starGradient.addColorStop(0, `rgba(255, 255, 255, ${opacity * (isHovered ? 0.95 : 0.85)})`);
    starGradient.addColorStop(0.4, `rgba(196, 181, 253, ${opacity * (isHovered ? 0.8 : 0.7)})`);
    starGradient.addColorStop(1, `rgba(139, 92, 246, ${opacity * 0.5})`);

    ctx.fillStyle = starGradient;
    ctx.fill();

    ctx.beginPath();
    ctx.arc(0, 0, size * 0.6, 0, Math.PI * 2);
    const coreGradient = ctx.createRadialGradient(0, 0, 0, 0, 0, size * 0.6);
    coreGradient.addColorStop(0, `rgba(255, 255, 255, ${opacity * (isHovered ? 1 : 0.9)})`);
    coreGradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
    ctx.fillStyle = coreGradient;
    ctx.fill();

    ctx.restore();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const updateSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    updateSize();

    const initStars = () => {
      const starCount = 70;
      starsRef.current = [];

      for (let i = 0; i < starCount; i++) {
        const size = Math.random() * 3 + 2;
        const type = size > 3.5 ? 'four-point' : (Math.random() > 0.5 ? 'eight-point' : 'four-point');

        starsRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height, // Spread across entire screen
          size,
          speed: Math.random() * 0.25 + 0.08,
          opacity: Math.random() * 0.35 + 0.55,
          twinkleSpeed: Math.random() * 0.015 + 0.008,
          twinklePhase: Math.random() * Math.PI * 2,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.003,
          type,
        });
      }
    };

    const initFlowers = () => {
      const flowerCount = 35;
      flowersRef.current = [];

      for (let i = 0; i < flowerCount; i++) {
        const colorSet = flowerColors[Math.floor(Math.random() * flowerColors.length)];
        flowersRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height, // Spread across entire screen
          size: Math.random() * 12 + 10,
          speed: Math.random() * 0.2 + 0.15,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.008,
          opacity: Math.random() * 0.25 + 0.65,
          color: colorSet.petal,
          centerColor: colorSet.center,
          swayOffset: Math.random() * Math.PI * 2,
          bloomProgress: 0,
          targetBloom: 0,
          hasBloomedOnce: false,
        });
      }
    };

    const initLeaves = () => {
      const leafCount = 25;
      leavesRef.current = [];

      for (let i = 0; i < leafCount; i++) {
        leavesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height, // Spread across entire screen
          size: Math.random() * 20 + 10, // Varied sizes: 10-30
          speed: Math.random() * 0.08 + 0.05,
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.01,
          opacity: Math.random() * 0.3 + 0.5,
          type: Math.floor(Math.random() * 5),
          swayOffset: Math.random() * Math.PI * 2,
          hoverScale: 1,
          targetHoverScale: 1,
        });
      }
    };

    initStars();
    initFlowers();
    initLeaves();

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (theme === 'dark') {
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, 'rgba(24, 24, 27, 0.4)');
        gradient.addColorStop(0.3, 'rgba(39, 39, 42, 0.3)');
        gradient.addColorStop(0.6, 'rgba(55, 48, 107, 0.25)');
        gradient.addColorStop(1, 'rgba(67, 56, 202, 0.2)');

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        starsRef.current.forEach((star) => {
          star.y += star.speed;
          star.rotation += star.rotationSpeed;

          if (star.y > canvas.height + star.size * 15) {
            star.y = -star.size * 15;
            star.x = Math.random() * canvas.width;
          }

          const twinkle = Math.sin(time * star.twinkleSpeed + star.twinklePhase);
          const currentOpacity = star.opacity * (0.75 + twinkle * 0.25);

          const dx = mouseRef.current.x - star.x;
          const dy = mouseRef.current.y - star.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const hoverDistance = 120;

          let finalOpacity = currentOpacity;
          let isHovered = false;

          if (distance < hoverDistance) {
            const factor = 1 - distance / hoverDistance;
            const smoothFactor = factor * factor;
            finalOpacity = Math.min(1, currentOpacity + smoothFactor * 0.4);
            isHovered = smoothFactor > 0.4;
          }

          if (star.type === 'four-point') {
            drawFourPointStar(ctx, star.x, star.y, star.size, star.rotation, finalOpacity, isHovered);
          } else {
            drawEightPointStar(ctx, star.x, star.y, star.size, star.rotation, finalOpacity, isHovered);
          }
        });
      } else {
        // Soft lavender gradient background
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, 'rgba(221, 214, 254, 0.8)'); // Pale lavender
        gradient.addColorStop(0.3, 'rgba(196, 181, 253, 0.75)'); // Light lavender
        gradient.addColorStop(0.6, 'rgba(167, 139, 250, 0.7)'); // Medium lavender
        gradient.addColorStop(1, 'rgba(196, 181, 253, 0.75)'); // Light lavender

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw leaves (slower)
        leavesRef.current.forEach((leaf) => {
          leaf.y += leaf.speed;
          leaf.x += Math.sin(time * 0.005 + leaf.swayOffset) * 0.3;
          leaf.rotation += leaf.rotationSpeed;

          if (leaf.y > canvas.height + leaf.size * 2) {
            leaf.y = -leaf.size * 2;
            leaf.x = Math.random() * canvas.width;
            leaf.type = Math.floor(Math.random() * 5);
          }

          // Hover detection for leaves
          const dx = mouseRef.current.x - leaf.x;
          const dy = mouseRef.current.y - leaf.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const hoverDistance = 80;

          if (distance < hoverDistance) {
            const factor = 1 - distance / hoverDistance;
            leaf.targetHoverScale = 1 + factor * 0.5; // Grow up to 1.5x
          } else {
            leaf.targetHoverScale = 1;
          }

          // Smooth scale transition
          const scaleSpeed = 0.08;
          if (leaf.hoverScale < leaf.targetHoverScale) {
            leaf.hoverScale = Math.min(leaf.targetHoverScale, leaf.hoverScale + scaleSpeed);
          } else {
            leaf.hoverScale = Math.max(leaf.targetHoverScale, leaf.hoverScale - scaleSpeed);
          }

          // Enhanced opacity for glow effect
          const hoverOpacity = leaf.opacity + (leaf.hoverScale - 1) * 0.4;

          drawLeaf(ctx, leaf.x, leaf.y, leaf.size * leaf.hoverScale, leaf.rotation, leaf.type, hoverOpacity);
        });

        // Draw flowers (faster than leaves)
        flowersRef.current.forEach((flower) => {
          flower.y += flower.speed;
          flower.x += Math.sin(time * 0.008 + flower.swayOffset) * 0.4;
          flower.rotation += flower.rotationSpeed;

          if (flower.y > canvas.height + flower.size * 2) {
            flower.y = -flower.size * 2;
            flower.x = Math.random() * canvas.width;
            const colorSet = flowerColors[Math.floor(Math.random() * flowerColors.length)];
            flower.color = colorSet.petal;
            flower.centerColor = colorSet.center;
          }

          const dx = mouseRef.current.x - flower.x;
          const dy = mouseRef.current.y - flower.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const hoverDistance = 100;

          if (distance < hoverDistance) {
            const factor = 1 - distance / hoverDistance;
            flower.targetBloom = factor;
            if (factor > 0.5) {
              flower.hasBloomedOnce = true; // Mark as bloomed
            }
          } else if (!flower.hasBloomedOnce) {
            flower.targetBloom = 0; // Only close if never fully bloomed
          } else {
            flower.targetBloom = 1; // Stay open if bloomed once
          }

          // Slow bloom transition
          const bloomSpeed = 0.03;
          if (flower.bloomProgress < flower.targetBloom) {
            flower.bloomProgress = Math.min(flower.targetBloom, flower.bloomProgress + bloomSpeed);
          } else {
            flower.bloomProgress = Math.max(flower.targetBloom, flower.bloomProgress - bloomSpeed);
          }

          if (flower.bloomProgress > 0.1) {
            drawBloomedFlower(
              ctx,
              flower.x,
              flower.y,
              flower.size,
              flower.rotation,
              flower.color,
              flower.centerColor,
              flower.opacity,
              flower.bloomProgress
            );
          } else {
            drawSeed(
              ctx,
              flower.x,
              flower.y,
              flower.size * 0.3,
              flower.color,
              flower.centerColor,
              flower.opacity,
              time
            );
          }
        });
      }

      time += 1;
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      updateSize();
      initStars();
      initFlowers();
      initLeaves();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationRef.current);
    };
  }, [theme, drawSeed, drawBloomedFlower, drawLeaf, drawFourPointStar, drawEightPointStar]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};
