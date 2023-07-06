import { defineConfig } from 'vitepress'

import { head, nav, sidebar } from './configs'

export 默认 defineConfig({
  outDir: '../dist',
  base: process.env。APP_BASE_PATH || '/',

  lang: 'zh-CN',
  标题: '高木同学站点导航',
  描述: '聚合《高木同学》有关链接的网站',
  head,

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
      标签: '本页目录'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/TakagisanArchiveRepos/Takagi-NavSite' }
    ],

    footer: {
      message: '2023 高木同学站点导航',
      copyright: 'Made by 轻虹空雨 | Designed by 茂茂'
    },

    darkModeSwitchLabel: '外观',
    returnToTopLabel: '返回顶部',
    lastUpdatedText: '上次更新',

    docFooter: {
      上一页: '上一篇',
      下一页: '下一篇'
    }
  }
})
