import type { HeadConfig } from 'vitepress'

export const head: HeadConfig[] = [
  ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
  ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ['link', { rel: 'apple-touch-icon', href: '/Gesun-203-Jan-cover.webp' }],
  ['link', { rel: 'mask-icon', href: '/Gesun-203-Jan-cover.webp', color: '#3eaf7c' }],
  ['meta', { name: 'msapplication-TileImage', content: '/Gesun-203-Jan-cover.webp' }],
  ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
]
