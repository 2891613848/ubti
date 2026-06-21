/* ═══════════════════════════════════════════════════════
   博客 v2
   ═══════════════════════════════════════════════════════ */

import { blogPosts } from '../data/blog-posts.js';

export const BlogPage = {
  template: `
  <section class="section" style="padding-top:calc(var(--nav-height) + 40px)">
    <div class="container">
      <template v-if="!selectedPost">
        <h2 class="section-title reveal reveal-up">博客</h2>
        <p class="section-subtitle reveal reveal-up reveal-d2">技术文章和思考随笔</p>
        <div class="blog-list">
          <div v-for="(post,i) in blogPosts" :key="post.id" :class="'blog-item reveal reveal-up reveal-d'+(i+1)" @click="selectedPost=post">
            <div class="blog-date">{{ post.date }}</div>
            <div class="blog-title">{{ post.title }}</div>
            <div class="blog-excerpt">{{ post.excerpt }}</div>
          </div>
          <div v-if="blogPosts.length === 0" style="text-align:center;padding:48px;color:var(--c-text-muted)">还没有文章。很快就会有的！</div>
        </div>
      </template>

      <template v-else>
        <div class="blog-detail fade-in">
          <div class="blog-back" @click="selectedPost=null;window.scrollTo({top:0,behavior:'smooth'})">← 返回列表</div>
          <div class="blog-header">
            <div class="blog-date">{{ selectedPost.date }}</div>
            <h1 class="blog-title">{{ selectedPost.title }}</h1>
          </div>
          <div class="blog-body" v-html="selectedPost.content"></div>
          <div style="margin-top:48px;padding-top:24px;border-top:1px solid var(--c-border-light)">
            <div class="blog-back" @click="selectedPost=null;window.scrollTo({top:0,behavior:'smooth'})">← 返回列表</div>
          </div>
        </div>
      </template>
    </div>
  </section>
  `,
  data() { return { blogPosts, selectedPost: null } }
};
