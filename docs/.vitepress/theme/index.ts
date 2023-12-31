import { h } from 'vue'
import { useData } from 'vitepress'
import Theme from 'vitepress/theme'

import './styles/index.scss'

export default Object.assign({}, Theme, {
  Layout: () => {
    const props: Record<string, any> = {}
    // 获取 frontmatter
    const { frontmatter } = useData()

    /* 添加自定义 class */
    if (frontmatter.value?.layoutClass) {
      props.class = frontmatter.value.layoutClass
    }

    return h(Theme.Layout, props)
  },
  googleAnalytics: {
    id: 'G-KH6J06FP77', // 替换为你的 Google Analytics ID，应该以 'G-' 开头
  }
})
