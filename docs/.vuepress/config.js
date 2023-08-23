module.exports = {
    base: '/blog/',
    locales: {
      '/': {
        lang: 'zh-CN'
      }
    },
    title: '伏案呓河鳌',
    description: '记录，成为更好的自己。',
    // dest: 'public',
    head: [
      ['link', { rel: 'icon', href: '/favicon.ico' }],
      ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
      ['meta', { name: 'keywords', content: '伏案呓河鳌,博客,Java,Learn'}],
      ['script', {}, `
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?xxxxxxxxxxxxxxxxxxxx"; 
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();`]
    ],
    markdown: {
      lineNumbers: true,
    },
    theme: 'reco',
    themeConfig: {
      nav: [
        { text: '主页', link: '/', icon: 'reco-home' },
        { text: '归档', link: '/archives.html', icon: 'reco-date' },
        { text: '标签', link: '/tags.html', icon: 'reco-tag'},
        { text: '域名', link: '/domains.html', icon: 'reco-other' },
        { text: '回顾', link: '/review.html', icon: 'reco-blog' },
        { text: '关于', link: '/about.html', icon: 'reco-account' },
      ],

      type: 'blog',
      blogConfig: {
        category: {
          location: 2, // 在导航栏菜单中所占的位置，默认2
          text: '分类' // 默认 “分类”
        },
        // tag: {
        //   location: 3, // 在导航栏菜单中所占的位置，默认3
        //   text: '标签' // 默认 “标签”
        // },
        socialLinks: [
          { icon: 'reco-github', link: 'https://gitee.com/fan-yihao' },
        ]
      },
      valineConfig: {
        appId: 'xxxxxxxxxxxx-xxxxxx',
        appKey: 'xxxxxxxxxxxxxxxxx',
      },
      logo: '/image/avatar.jpg',
      authorAvatar: '/image/avatar.jpg',
      search: true,
      searchMaxSuggestions: 10,
      subSidebar: 'auto',
      sidebarDepth: 4,
      lastUpdated: '上次更新',
      author: '心宿二',
      record: '2472698567',
      startYear: '2023',
      /**
       * 密钥 (if your blog is private)
       */
      friendLink: [
        {
          title: '心宿二',
          desc: '在广袤的空间和无限的时间中，能与你共享同一颗行星和同一段时光是我的荣幸。————卡尔萨根',
          email: 'computer_fyh@163.com',
          link: 'https://gitee.com/fan-yihao'
        },
      ],
      /**
       * support for
       * '' | 'default'
       * 'coy'
       * 'dark'
       * 'funky'
       * 'okaidia'
       * 'solarizedlight'
       * 'tomorrow'
       * 'twilight'
       */
    },
    plugins: [
      // 更新刷新插件
      ['@vuepress/pwa', {
        serviceWorker: true,
        updatePopup: {
            message: "发现新内容可用",
            buttonText: "刷新"
        }
      }],
    // 代码复制弹窗插件
      ["vuepress-plugin-nuggets-style-copy", {
        copyText: "copy",
        tip: {
            content: "复制成功!"
        }
      }],
      ['@vuepress/last-updated', 
        {
          transformer: (timestamp, lang) => {
            return (new Date(timestamp)).toUTCString() 
            //或者用下面这段
            // const moment = require('moment')
            // moment.locale(lang)
            // return moment(timestamp).toLocaleString()
          }
        }],
      ['@vuepress-reco/vuepress-plugin-pagation', {
        perPage: 16
      }],
      ['sitemap', {
        hostname: 'https://conimi.com'
      }],
    ]
  }