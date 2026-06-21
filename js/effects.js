/* ═══════════════════════════════════════════════════════
   特效引擎 — 粒子背景 · 滚动动画 · 打字机 · 视差
   零依赖 · 纯 Vanilla JS
   ═══════════════════════════════════════════════════════ */

// ── 1. 粒子 Canvas 背景 ──
class ParticleCanvas {
  constructor(canvas, opts = {}) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.particles = [];
    this.mouse = { x: -1000, y: -1000 };
    this.opts = {
      count: opts.count || 50,
      color: opts.color || '108,92,231',
      connectDistance: opts.connectDistance || 120,
      speed: opts.speed || 0.4,
      maxRadius: opts.maxRadius || 2.5,
    };

    this.resize();
    this.initParticles();
    this.bindEvents();
    this.animate();
  }

  resize() {
    const rect = this.canvas.parentElement.getBoundingClientRect();
    this.width = rect.width;
    this.height = rect.height;
    this.canvas.width = this.width * (window.devicePixelRatio || 1);
    this.canvas.height = this.height * (window.devicePixelRatio || 1);
    this.ctx.scale(window.devicePixelRatio || 1, window.devicePixelRatio || 1);
  }

  initParticles() {
    this.particles = Array.from({ length: this.opts.count }, () => ({
      x: Math.random() * this.width,
      y: Math.random() * this.height,
      vx: (Math.random() - 0.5) * this.opts.speed,
      vy: (Math.random() - 0.5) * this.opts.speed,
      r: Math.random() * this.opts.maxRadius + 0.8,
    }));
  }

  bindEvents() {
    const parent = this.canvas.parentElement;
    parent.addEventListener('mousemove', (e) => {
      const rect = parent.getBoundingClientRect();
      this.mouse.x = e.clientX - rect.left;
      this.mouse.y = e.clientY - rect.top;
    });
    parent.addEventListener('mouseleave', () => {
      this.mouse.x = -1000;
      this.mouse.y = -1000;
    });
    window.addEventListener('resize', () => this.resize());
  }

  animate() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    const { color, connectDistance } = this.opts;

    // Update & draw
    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];

      // Mouse interaction
      const dx = this.mouse.x - p.x;
      const dy = this.mouse.y - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 150) {
        const force = (150 - dist) / 150;
        p.vx -= (dx / dist) * force * 0.08;
        p.vy -= (dy / dist) * force * 0.08;
      }

      // Update position
      p.x += p.vx;
      p.y += p.vy;

      // Damping
      p.vx *= 0.998;
      p.vy *= 0.998;

      // Wrap around
      if (p.x < -20) p.x = this.width + 20;
      if (p.x > this.width + 20) p.x = -20;
      if (p.y < -20) p.y = this.height + 20;
      if (p.y > this.height + 20) p.y = -20;

      // Draw particle
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(${color},${0.5 + p.r * 0.15})`;
      this.ctx.fill();

      // Draw connections
      for (let j = i + 1; j < this.particles.length; j++) {
        const q = this.particles[j];
        const dx2 = p.x - q.x;
        const dy2 = p.y - q.y;
        const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
        if (dist2 < connectDistance) {
          this.ctx.beginPath();
          this.ctx.moveTo(p.x, p.y);
          this.ctx.lineTo(q.x, q.y);
          this.ctx.strokeStyle = `rgba(${color},${0.08 * (1 - dist2 / connectDistance)})`;
          this.ctx.lineWidth = 0.8;
          this.ctx.stroke();
        }
      }
    }

    this.raf = requestAnimationFrame(() => this.animate());
  }

  destroy() {
    cancelAnimationFrame(this.raf);
  }
}

// ── 2. 滚动动画 (Intersection Observer) ──
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// ── 3. 打字机效果 ──
class Typewriter {
  constructor(el, texts, opts = {}) {
    this.el = el;
    this.texts = texts;
    this.textIdx = 0;
    this.charIdx = 0;
    this.isDeleting = false;
    this.opts = {
      typeSpeed: opts.typeSpeed || 60,
      deleteSpeed: opts.deleteSpeed || 30,
      pauseTime: opts.pauseTime || 2500,
    };
    this.type();
  }

  type() {
    const current = this.texts[this.textIdx];

    if (this.isDeleting) {
      this.charIdx--;
      this.el.textContent = current.substring(0, this.charIdx);
    } else {
      this.charIdx++;
      this.el.textContent = current.substring(0, this.charIdx);
    }

    let delay = this.isDeleting ? this.opts.deleteSpeed : this.opts.typeSpeed;

    if (!this.isDeleting && this.charIdx === current.length) {
      delay = this.opts.pauseTime;
      this.isDeleting = true;
    } else if (this.isDeleting && this.charIdx === 0) {
      this.isDeleting = false;
      this.textIdx = (this.textIdx + 1) % this.texts.length;
      delay = 400;
    }

    this.timer = setTimeout(() => this.type(), delay);
  }

  destroy() {
    clearTimeout(this.timer);
  }
}

// ── 4. 鼠标视差 (Hero 浮动元素) ──
function initHeroParallax(heroEl) {
  if (!heroEl) return;
  const floats = heroEl.querySelectorAll('.hero-float');
  if (!floats.length) return;

  heroEl.addEventListener('mousemove', (e) => {
    const rect = heroEl.getBoundingClientRect();
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const mx = e.clientX - rect.left - cx;
    const my = e.clientY - rect.top - cy;

    floats.forEach((el, i) => {
      const depth = 0.02 + i * 0.01;
      const x = mx * depth;
      const y = my * depth;
      el.style.transform = `translate(${x}px,${y}px) rotate(${x * 0.05}deg)`;
    });
  });

  heroEl.addEventListener('mouseleave', () => {
    floats.forEach(el => {
      el.style.transform = 'translate(0,0) rotate(0deg)';
    });
  });
}

// ── 导出初始化函数 ──
function initEffects() {
  // 粒子背景
  const heroCanvas = document.getElementById('hero-canvas');
  let particles = null;
  if (heroCanvas) {
    particles = new ParticleCanvas(heroCanvas, {
      count: window.innerWidth < 768 ? 30 : 55,
      color: '108,92,231',
      connectDistance: 130,
      speed: 0.5,
      maxRadius: 2.8,
    });
  }

  // 滚动动画
  initScrollReveal();

  // 打字机
  const typeEl = document.getElementById('hero-typewriter');
  let typewriter = null;
  if (typeEl) {
    const texts = JSON.parse(typeEl.dataset.texts || '[]');
    if (texts.length) {
      typewriter = new Typewriter(typeEl, texts, {
        typeSpeed: 55,
        deleteSpeed: 28,
        pauseTime: 2800,
      });
    }
  }

  // 视差
  const heroEl = document.querySelector('.hero');
  if (heroEl) {
    initHeroParallax(heroEl);
  }

  return { particles, typewriter };
}

// ── 路由变化时重新绑定 ──
let activeEffects = null;

function refreshEffects() {
  // 清理旧特效
  if (activeEffects) {
    if (activeEffects.particles) activeEffects.particles.destroy();
    if (activeEffects.typewriter) activeEffects.typewriter.destroy();
  }
  // 延迟等 DOM 更新
  setTimeout(() => {
    activeEffects = initEffects();
  }, 100);
}

// 监听路由变化（SPA hashchange）
window.addEventListener('hashchange', () => {
  refreshEffects();
});

// 导出（供 app.js 等使用）
export { ParticleCanvas, initScrollReveal, Typewriter, initHeroParallax, initEffects, refreshEffects };
