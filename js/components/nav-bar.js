/* ═══════════════════════════════════════════════════════
   导航栏 v2 — 渐变 Logo + 发光指示器
   ═══════════════════════════════════════════════════════ */

export const NavBar = {
  template: `
  <nav class="nav-bar" :class="{ scrolled: scrolled }">
    <div class="nav-inner">
      <a href="#/" class="nav-logo" @click="closeMenu">
        <span class="logo-dot"></span>
        <span class="logo-text">小熊</span>
      </a>
      <button class="nav-toggle" :class="{ open: menuOpen }" @click="toggleMenu" aria-label="菜单">
        <span></span><span></span><span></span>
      </button>
      <div class="nav-links" :class="{ open: menuOpen }">
        <a href="#/" :class="{ active: current === '/' }" @click="closeMenu">首页</a>
        <a href="#/about" :class="{ active: current === '/about' }" @click="closeMenu">关于</a>
        <a href="#/projects" :class="{ active: current === '/projects' }" @click="closeMenu">项目</a>
        <a href="#/blog" :class="{ active: current === '/blog' }" @click="closeMenu">博客</a>
        <a href="#/products" :class="{ active: current === '/products' }" @click="closeMenu">产品</a>
      </div>
    </div>
  </nav>
  `,
  props: { current: { type: String, default: '/' } },
  data() {
    return { menuOpen: false, scrolled: false, onScroll: null }
  },
  methods: {
    toggleMenu() { this.menuOpen = !this.menuOpen },
    closeMenu() { this.menuOpen = false }
  },
  mounted() {
    this.onScroll = () => { this.scrolled = window.scrollY > 10; };
    window.addEventListener('scroll', this.onScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }
};
