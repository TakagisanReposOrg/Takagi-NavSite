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
**站长：**@[轻虹空雨](https://mufeng086.com) |
**收录申请：**[Feedback@takagi3.cn](mailto:feedback@takagi3.cn)
:::

::: tip
**更新时间：2023.7.20 19:55** | **目前已收录 29 条链接**
:::

<MNavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>

::: tip
本站前端模板由 [maomao](https://github.com/maomao1996) 开发，源项目地址：https://github.com/maomao1996/vitepress-fe-nav
:::

**赞助**  
若您愿意支持本站与其他项目，请通过以下任一方式（微信赞赏码/爱发电）进行赞助，并请附上您的昵称，非常感谢。
<a><img src="https://pic.mufeng086.com/i/2023/07/30/o1xb5q.webp" style="width:20%;" /></a>
<a href="https://afdian.net/a/LightRainbow"><img src="https://pic1.afdiancdn.com/static/img/welcome/button-sponsorme.jpg" style="width:20%;" /></a>
