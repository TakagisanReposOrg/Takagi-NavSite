---
layoutClass: m-nav-layout
outline: [2, 3, 4]
---

<script setup>
import MNavLinks from './components/MNavLinks.vue'

import { NAV_DATA } from './data'
</script>
<style src="./index.scss"></style>

# 站点列表

::: tip
**欢迎访问 高木同学站点导航** |
**站长：**@[辰灿汐](https://aurorainic.top) |
**收录申请：**[Feedback@takagi3.cn](mailto:feedback@takagi3.cn)<br>
**更新时间：2024.8.2 18:06** | **目前已收录 34 条链接**
:::
::: warning 注意
部分站点（尤其是“民间自建站点”）由于停止维护/项目终止等原因无法访问。
:::
::: info 站点状态标识
✅：可用 🤔：短期维护/改造中 ❌：长期停运/尚未重启
:::

<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>

::: info 站点框架声明
本站前端模板由 [maomao](https://github.com/maomao1996) 开发，源项目地址：https://github.com/maomao1996/vitepress-fe-nav
:::
