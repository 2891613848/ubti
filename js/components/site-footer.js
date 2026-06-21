/* ═══════════════════════════════════════════════════════
   页脚组件
   ═══════════════════════════════════════════════════════ */

export const SiteFooter = {
  template: `
  <footer class="site-footer">
    <div class="footer-links">
      <a href="#/">首页</a>
      <a href="#/about">关于</a>
      <a href="#/projects">项目</a>
      <a href="#/blog">博客</a>
      <a href="#/products">产品</a>
    </div>
    <p class="footer-copy">&copy; {{ year }} 小熊 · 用好奇心建造</p>
  </footer>
  `,
  data() {
    return { year: new Date().getFullYear() }
  }
};
