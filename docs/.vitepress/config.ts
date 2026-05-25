import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: '思柔之乡官方文档',
  description: 'ThroughHome-MC 官方文档 — 公益、开放、自由、温馨的 Minecraft 玩家社区',
  cleanUrls: true,
  lastUpdated: true,
  ignoreDeadLinks: true,

  head: [
    ['link', { rel: 'shortcut icon', href: 'https://th-mc.cn/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }]
  ],

  themeConfig: {
    logo: { src: 'https://th-mc.cn/favicon.ico', alt: '思柔之乡' },

    nav: [
      { text: '主页', link: '/' },
      { text: '官网', link: 'https://th-mc.cn' },
      { text: '皮肤站', link: 'https://mc.th-mc.cn' },
      { text: '府主博客', link: 'https://blog.th-mc.cn' }
    ],

    sidebar: [
      {
        text: '开始',
        items: [
          { text: '简介', link: '/开始/简介' }
        ]
      },
      {
        text: '加入服务器',
        items: [
          { text: '申请白名单', link: '/加入服务器/申请白名单' },
          { text: '下载客户端', link: '/加入服务器/下载客户端' },
          { text: '基岩版加入指南', link: '/加入服务器/基岩版加入指南' },
          { text: '网页语音聊天', link: '/加入服务器/网页语音聊天' },
          { text: '我们的网站们', link: '/加入服务器/我们的网站们' }
        ]
      },
      {
        text: '进阶玩家',
        items: [
          { text: '服务端插件', link: '/进阶玩家/服务端插件' }
        ]
      },
      {
        text: '常见问题',
        items: [
          { text: '游戏无法启动', link: '/常见问题/游戏无法启动' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/SnowSwordScholar/THMC-Doc' }
    ],

    editLink: {
      pattern: 'https://github.com/SnowSwordScholar/THMC-Doc/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },

    footer: {
      message: '由府主与志愿者们共同维护 · <a href="https://afdian.net/@th-mc" target="_blank" rel="noreferrer">爱发电支持</a>',
      copyright: 'ThroughHome-MC'
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '本页内容',
      level: [2, 3]
    },

    lastUpdated: {
      text: '最后更新于'
    },

    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            displayDetails: '显示详细列表',
            resetButtonTitle: '清除查询条件',
            backButtonTitle: '关闭搜索',
            noResultsText: '无法找到相关结果',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭'
            }
          }
        }
      }
    }
  }
})
