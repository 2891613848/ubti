/* ═══════════════════════════════════════════════════════
   已上线产品 v2
   ═══════════════════════════════════════════════════════ */

import { products } from '../data/products.js';

export const ProductsPage = {
  template: `
  <section class="section" style="padding-top:calc(var(--nav-height) + 40px)">
    <div class="container">
      <h2 class="section-title reveal reveal-up">已上线产品</h2>
      <p class="section-subtitle reveal reveal-up reveal-d2">那些真正在运行、在服务用户的产品。每一个我都投入了心血。</p>

      <div v-if="products.length > 0">
        <div v-for="(p,i) in products" :key="p.id" :class="'card reveal reveal-up reveal-d'+(i+1)" style="margin-bottom:20px">
          <div class="product-card">
            <div class="product-icon-wrap">{{ p.icon }}</div>
            <div class="product-info">
              <h3 class="product-name">{{ p.name }}</h3>
              <span class="product-status" :class="p.status">{{ p.statusLabel }}</span>
              <p class="product-desc">{{ p.description }}</p>
              <div style="display:flex;align-items:center;gap:16px;flex-wrap:wrap">
                <span style="font-size:12px;color:var(--c-text-muted)">🏗 {{ p.tech }}</span>
                <a v-if="p.link" :href="p.link" target="_blank" class="btn btn-primary" style="padding:8px 22px;font-size:14px">访问 →</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else style="text-align:center;padding:48px;color:var(--c-text-muted)">还没有产品。去上线你的第一个产品吧！</div>
    </div>
  </section>
  `,
  data() { return { products } }
};
