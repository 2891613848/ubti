/* ═══════════════════════════════════════════════════════
   关于我页面 v2
   ═══════════════════════════════════════════════════════ */

export const AboutPage = {
  template: `
  <section class="section" style="padding-top:calc(var(--nav-height) + 40px)">
    <div class="container">
      <div class="about-grid">
        <aside class="about-sidebar reveal reveal-up">
          <div class="about-avatar-wrap">
            <svg viewBox="0 0 140 140" width="130" height="130" xmlns="http://www.w3.org/2000/svg">
              <circle cx="70" cy="46" r="35" fill="#FFDBB5"/>
              <ellipse cx="30" cy="102" rx="8" ry="17" fill="#FFDBB5" transform="rotate(12 30 102)"/>
              <ellipse cx="110" cy="102" rx="8" ry="17" fill="#FFDBB5" transform="rotate(-12 110 102)"/>
              <path d="M44 79 Q40 77 40 81 L40 126 Q40 132 46 132 L94 132 Q100 132 100 126 L100 81 Q100 77 96 79 Q88 85 70 85 Q52 85 44 79 Z" fill="#6C5CE7"/>
              <path d="M58 79 Q70 88 82 79" stroke="#8B7DFF" stroke-width="2.5" fill="none" opacity=".4" stroke-linecap="round"/>
              <path d="M36 46 Q34 14 70 12 Q106 14 104 46 Q104 54 98 54 Q94 60 90 52 Q86 44 82 52 Q78 58 74 48 Q70 42 66 48 Q62 58 58 52 Q54 44 50 52 Q46 60 42 54 Q36 54 36 46 Z" fill="#4A3728"/>
              <path d="M53 37 Q56 35 59 37" stroke="#3D2B1F" stroke-width="1.2" fill="none" stroke-linecap="round"/><path d="M81 37 Q84 35 87 37" stroke="#3D2B1F" stroke-width="1.2" fill="none" stroke-linecap="round"/>
              <path d="M52 44 Q56 40 61 44" stroke="#3D2B1F" stroke-width="2.2" fill="none" stroke-linecap="round"/><path d="M79 44 Q83 40 88 44" stroke="#3D2B1F" stroke-width="2.2" fill="none" stroke-linecap="round"/>
              <ellipse cx="44" cy="53" rx="8" ry="5" fill="#FFB8B8" opacity=".5"/><ellipse cx="96" cy="53" rx="8" ry="5" fill="#FFB8B8" opacity=".5"/>
              <path d="M65 58 Q70 64 75 58" stroke="#3D2B1F" stroke-width="1.8" fill="none" stroke-linecap="round"/>
            </svg>
          </div>
          <h2 class="about-name">小熊</h2>
          <p class="about-role">全栈开发者 · 产品建造者</p>
          <div class="about-social">
            <a href="https://github.com/" target="_blank" title="GitHub">🐙</a>
            <a href="mailto:hello@ubti.top" title="Email">📧</a>
          </div>
        </aside>

        <div class="about-main">
          <div class="card reveal reveal-right"><h3>👋 关于我</h3>
            <p style="font-size:15px;color:var(--c-text-secondary);line-height:2;text-align:justify">
              你好！我是小熊，一个热爱用代码创造东西的人。我相信好的产品不是被「设计」出来的，而是在不断建造、测试、推翻、重建的过程中长出来的。<br><br>
              我目前的兴趣集中在教育科技和工具型产品，喜欢思考「怎么让复杂的事情变得简单」和「怎么帮人做出更好的选择」。UBTI 就是我践行这个理念的产物——把一个关于大学选择的复杂问题，拆解成四个维度、四十八道题，用清晰直观的方式呈现结果。<br><br>
              不写代码的时候，我可能在读书、思考人生、或者琢磨下一个项目。
            </p>
          </div>

          <div class="card reveal reveal-right reveal-d2"><h3>🛠 技能栈</h3>
            <div class="skill-cloud">
              <span class="skill-tag">JavaScript / TypeScript</span><span class="skill-tag">Vue 3</span><span class="skill-tag">React</span>
              <span class="skill-tag">Node.js</span><span class="skill-tag">Python</span><span class="skill-tag">HTML / CSS</span>
              <span class="skill-tag">SVG</span><span class="skill-tag">Git / GitHub</span><span class="skill-tag">Figma</span>
              <span class="skill-tag">产品设计</span><span class="skill-tag">交互设计</span><span class="skill-tag">技术写作</span>
            </div>
          </div>

          <div class="card reveal reveal-right reveal-d3"><h3>📅 时间线</h3>
            <div class="timeline">
              <div class="timeline-item"><div class="timeline-dot"></div><div class="timeline-date">2026</div><div class="timeline-title">UBTI 大学适配测试上线</div><div class="timeline-desc">独立设计、开发和部署了完整的性格-大学匹配测试工具，已对外服务。</div></div>
              <div class="timeline-item"><div class="timeline-dot"></div><div class="timeline-date">2026</div><div class="timeline-title">搭建个人网站</div><div class="timeline-desc">用 Vue 3 从零搭建了零构建依赖的个人网站，整合所有项目和内容。</div></div>
              <div class="timeline-item"><div class="timeline-dot"></div><div class="timeline-date">更早</div><div class="timeline-title">对编程和创造产生了不可逆的兴趣</div><div class="timeline-desc">从此走上了一条「看到问题就想用代码解决」的不归路。</div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  `
};
