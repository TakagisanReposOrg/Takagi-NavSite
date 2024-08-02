import { defineConfig } from 'vitepress'

import { head, nav, sidebar } from './configs'

export default defineConfig({
  outDir: '../dist',
  base: process.env.APP_BASE_PATH || '/',

  lang: 'zh-CN',
  title: '高木同学站点导航',
  description: '聚合《高木同学》有关链接的网站',
  head: [
    // ...
  
    ['script', { async: true, src: 'https://analytics.takagi3.top/script.js', 'data-website-id': 'fbf6c344-0f7b-4fdb-8bea-366eb611c5ee' }],
    ],

  lastUpdated: true,
  cleanUrls: true,

  /* markdown 配置 */
  markdown: {
    lineNumbers: true
  },

  /* 主题配置 */
  themeConfig: {
    i18nRouting: false,

    logo: '/icons/Gesun-203-Jan-cover-modified.webp',

    nav,
    sidebar,
    /* 右侧大纲配置 */
    outline: {
      level: 'deep',
      label: '本页目录'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/TakagisanReposOrg/Takagi-NavSite' }
    ],

    footer: {
      message: '2024 高木同学站点导航 | Powered by VitePress',
      copyright: 'Made by 辰灿汐 | Designed by 茂茂'
    },

    darkModeSwitchLabel: '外观',
    returnToTopLabel: '返回顶部',
    lastUpdatedText: '上次更新',

    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    }
  }
})
