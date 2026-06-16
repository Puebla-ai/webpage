/**
 * PueblAI — Neural network particle animation
 * Subtle animated background for the hero section
 */
(function () {
  'use strict';

  const canvas = document.getElementById('hero-particles');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const hero = document.getElementById('hero');

  // Config
  const PARTICLE_COUNT = 60;
  const CONNECTION_DIST = 150;
  const PARTICLE_SPEED = 0.3;
  const PARTICLE_SIZE_MIN = 1.5;
  const PARTICLE_SIZE_MAX = 3.5;
  const LINE_OPACITY = 0.12;
  const DOT_OPACITY = 0.25;
  const COLOR = '27, 59, 140'; // cobalt RGB

  let particles = [];
  let w, h;
  let animId;

  function resize() {
    const rect = hero.getBoundingClientRect();
    w = rect.width;
    h = rect.height;
    canvas.width = w * window.devicePixelRatio;
    canvas.height = h * window.devicePixelRatio;
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
  }

  function createParticles() {
    particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * PARTICLE_SPEED * 2,
        vy: (Math.random() - 0.5) * PARTICLE_SPEED * 2,
        r: PARTICLE_SIZE_MIN + Math.random() * (PARTICLE_SIZE_MAX - PARTICLE_SIZE_MIN),
        pulse: Math.random() * Math.PI * 2 // for subtle pulsing
      });
    }
  }

  function update() {
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.pulse += 0.008;

      // Bounce off edges
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;

      // Keep in bounds
      p.x = Math.max(0, Math.min(w, p.x));
      p.y = Math.max(0, Math.min(h, p.y));
    }
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);

    // Draw connections
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < CONNECTION_DIST) {
          const opacity = LINE_OPACITY * (1 - dist / CONNECTION_DIST);
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = 'rgba(' + COLOR + ',' + opacity + ')';
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    // Draw particles
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      const pulseScale = 1 + Math.sin(p.pulse) * 0.2;
      const r = p.r * pulseScale;

      ctx.beginPath();
      ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(' + COLOR + ',' + DOT_OPACITY + ')';
      ctx.fill();
    }
  }

  function animate() {
    update();
    draw();
    animId = requestAnimationFrame(animate);
  }

  // Only animate when hero is visible
  const observer = new IntersectionObserver(
    function (entries) {
      if (entries[0].isIntersecting) {
        if (!animId) animate();
      } else {
        if (animId) {
          cancelAnimationFrame(animId);
          animId = null;
        }
      }
    },
    { threshold: 0.1 }
  );

  // Init
  resize();
  createParticles();
  observer.observe(hero);

  // Handle resize
  let resizeTimer;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      resize();
      createParticles();
    }, 200);
  });

  // Reduce particles on mobile for performance
  if (window.innerWidth < 768) {
    particles.length = Math.floor(PARTICLE_COUNT * 0.5);
  }
})();
