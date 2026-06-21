/* ═══════════════════════════════════════════════════════
   项目作品集 v2
   ═══════════════════════════════════════════════════════ */

import { projects } from '../data/projects.js';

export const ProjectsPage = {
  template: `
  <section class="section" style="padding-top:calc(var(--nav-height) + 40px)">
    <div class="container">
      <h2 class="section-title reveal reveal-up">项目作品集</h2>
      <p class="section-subtitle reveal reveal-up reveal-d2">我做过的一些东西。每个项目都解决了一个真实的问题。</p>

      <div class="filter-bar reveal reveal-up reveal-d3">
        <button class="filter-btn" :class="{ active: activeFilter === 'all' }" @click="activeFilter='all'">全部</button>
        <button class="filter-btn" :class="{ active: activeFilter === 'product' }" @click="activeFilter='product'">产品</button>
        <button class="filter-btn" :class="{ active: activeFilter === 'web' }" @click="activeFilter='web'">Web</button>
      </div>

      <div class="projects-grid">
        <div v-for="(p,i) in filteredProjects" :key="p.id" :class="'card project-card reveal reveal-up reveal-d'+(i%4+1)">
          <div class="project-icon">{{ p.icon }}</div>
          <div class="project-title">{{ p.title }}</div>
          <div class="project-desc">{{ p.description }}</div>
          <div class="project-meta">
            <div class="project-tags"><span v-for="t in p.tags" :key="t" class="tag tag-purple">{{ t }}</span></div>
            <a v-if="p.link && p.link !== '#'" :href="p.link" target="_blank" class="btn btn-ghost" style="padding:6px 16px;font-size:13px">查看 →</a>
          </div>
        </div>
      </div>

      <div v-if="filteredProjects.length === 0" style="text-align:center;padding:48px;color:var(--c-text-muted)">暂无项目。快去创造点什么吧！</div>
    </div>
  </section>
  `,
  data() { return { projects, activeFilter: 'all' } },
  computed: {
    filteredProjects() {
      return this.activeFilter === 'all' ? this.projects : this.projects.filter(p => p.category === this.activeFilter);
    }
  }
};
