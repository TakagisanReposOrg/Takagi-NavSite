import type { NavLink } from './components/type'

type NavData = {
  title: string
  items: NavLink[]
}

export const NAV_DATA: NavData[] = [
  {
    title: '官方相关',
    items: [
      {
        icon: 'icons/yamamoto.webp',
        title: '山本崇一朗-推特',
        desc: '《高木同学》原作者',
        link: 'https://twitter.com/udon0531'
      },
      {
        icon: 'icons/dp6h9JiL.webp',
        title: '稲葉光史-推特',
        desc: '《（原）高木同学》作者',
        link: 'https://twitter.com/Y6W9v'
      },
      {
        icon: 'icons/takagi3_anime.webp',
        title: '动画官方推特',
        desc: '《高木同学》动画官方SNS账号',
        link: 'https://twitter.com/takagi3_anime'
      },
      {
        icon: 'icons/takagi3_anime.webp',
        title: '动画官网',
        desc: '《高木同学》动画官网（默认为剧场版页面）',
        link: 'https://takagi3.me/'
      },
      {
        icon: 'icons/geekan-sunday.ico',
        title: '《月刊少年》杂志官网',
        desc: '原作漫画连载杂志的官网',
        link: 'https://gekkansunday.net/'
      }
    ]
  },
  {
    title: '民间自建站点',
    items: [
      {
        icon: '/icons/takagi-wiki.webp',
        title: '高木同学资料站',
        desc: '类wiki资料信息站 (by @一只鬆）',
        link: 'https://wiki.takagi3.cn/'
      },
      {
        icon: '/icons/takagi-fanclub.webp',
        title: '高木同学Fan社区',
        desc: '属于高木厨的独立社区论坛 (by @轻虹空雨）',
        link: 'https://club.takagi3.cn/'
      },
      {
        icon: '/icons/takagi-imgshare.webp',
        title: '高木同学共享云图仓 (by @轻虹空雨）',
        desc: '实用&共享的高木美图云仓',
        link: 'https://shareimg.takagi3.cn/'
      }
    ]
  },
  {
    title: '公共社群',
    items: [
      {
        icon: '/icons/tieba.webp',
        title: '百度贴吧',
        link: 'https://tieba.baidu.com/f?kw=%E6%93%85%E9%95%BF%E6%8D%89%E5%BC%84%E7%9A%84%E9%AB%98%E6%9C%A8%E5%90%8C%E5%AD%A6&fr=index'
      },
      {
        icon: '/icons/weibo.webp',
        title: '微博超话',
        link: 'https://weibo.com/p/100808bb6103ebd10533630befafe870f424f2'
      },
      {
        icon: '/icons/qq.webp',
        title: 'QQ频道',
        link: 'https://pd.qq.com/s/cp4k08j75'
      }
    ]
  },
  {
    title: '百科资料',
    items: [
      {
        icon: '/icons/wikipedia.ico',
        title: '维基百科',
        link: 'https://zh.m.wikipedia.org/wiki/%E6%93%85%E9%95%B7%E6%8D%89%E5%BC%84%E4%BA%BA%E7%9A%84%E9%AB%98%E6%9C%A8%E5%90%8C%E5%AD%B8'
      },
      {
        icon: '/icons/moegirl.ico',
        title: '萌娘百科',
        link: 'https://zh.moegirl.org.cn/%E6%93%85%E9%95%BF%E6%8D%89%E5%BC%84%E7%9A%84%E9%AB%98%E6%9C%A8%E5%90%8C%E5%AD%A6'
      },
      {
        icon: '/icons/fandom.ico',
        title: 'Fandom Wiki',
        link: 'https://karakai-jouzu-no-takagi-san.fandom.com/zh/wiki/%E9%A6%96%E9%A1%B5'
      }
    ]
  },
  {
    title: '其他',
    items: [
      {
        icon: '/icons/chatgpt-next-web.svg',
        title: 'ChatGPT-Next-Web',
        desc: '国内可用的二改GPT站点 (访问密钥请联系站长)',
        link: 'https://chatgpt.takagi3.top'
      },
      {
        icon: '/icons/bing.ico',
        title: 'Bing-AI Chat',
        desc: '国内可用的Bing AI站点',
        link: 'https://bingchat.takagi3.top'
      },
      {
        icon: '/icons/tkgcrop.webp',
        title: '“高木同学振兴会”官网',
        desc: '民间粉丝团体“高木同学振兴会”官网',
        link: 'https://takagisan.cn'
      }
    ]
  },
  {
    title: '圈内名人',
    items: [
      {
        icon: '/icons/touzi.webp',
        title: '擅长捉弄の高木同学',
        desc: '高木圈知名B站UP主，外号“头子”',
        link: 'https://space.bilibili.com/2709173/'
      },
      {
        icon: '/icons/takagi-camerata.webp',
        title: '高木同学同好会',
        desc: '民间粉丝团体“高木同学同好会”B站公号',
        link: 'https://space.bilibili.com/1415908672/'
      }
    ]
  }
]
