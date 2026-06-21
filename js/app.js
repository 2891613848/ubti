/* ═══════════════════════════════════════════════════════
   Vue 3 应用入口 v2 — Hash Router + 特效绑定
   ═══════════════════════════════════════════════════════ */

import { NavBar } from './components/nav-bar.js';
import { SiteFooter } from './components/site-footer.js';
import { HomePage } from './pages/home.js';
import { AboutPage } from './pages/about.js';
import { ProjectsPage } from './pages/projects.js';
import { BlogPage } from './pages/blog.js';
import { ProductsPage } from './pages/products.js';
import { refreshEffects } from './effects.js';

const routes = {
  '/': HomePage,
  '/about': AboutPage,
  '/projects': ProjectsPage,
  '/blog': BlogPage,
  '/products': ProductsPage,
};

function getRoute() {
  const hash = window.location.hash.slice(1).replace(/\/+$/, '') || '/';
  return routes[hash] ? hash : '/';
}

const app = Vue.createApp({
  data() {
    return { currentRoute: getRoute() };
  },
  computed: {
    currentComponent() {
      return routes[this.currentRoute] || routes['/'];
    }
  },
  methods: {
    onHashChange() {
      this.currentRoute = getRoute();
    }
  },
  mounted() {
    window.addEventListener('hashchange', this.onHashChange);
    // 初次加载特效
    this.$nextTick(() => {
      // 动态导入 effects.js 已在 index.html 加载，直接调用
      import('./effects.js').then(m => m.refreshEffects());
    });
  },
  beforeUnmount() {
    window.removeEventListener('hashchange', this.onHashChange);
  }
});

app.component('nav-bar', NavBar);
app.component('site-footer', SiteFooter);
app.mount('#app');

// 返回顶部
window.addEventListener('scroll', () => {
  const btn = document.getElementById('back-to-top');
  if (btn) btn.classList.toggle('visible', window.scrollY > 400);
});
window.scrollToTop = function() { window.scrollTo({ top: 0, behavior: 'smooth' }); };
