
module.exports = {
    title: '台中高工資訊科部落格',
    description: 'TcivsCse Blog',
    theme: "reco",
    head: [
        ['link', { rel: 'icon', href: './page.png' }],  
        ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }],
        ["script", {
          "language": "javascript",
          "type": "text/javascript",
          "src": "https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js"
        }],
        ["script", {
          "language": "javascript",
          "type": "text/javascript",
          "src": "./js/snowFlowEffect.js"
        }],
        ["script", {
            "language": "javascript",
            "type": "text/javascript",
            "src": "./js/setting.js"
        }]
    ],
    plugins: 
    [
        ["@vuepress-reco/vuepress-plugin-loading-page", false],

        ["vuepress-plugin-nuggets-style-copy", {
            copyText: "複製程式碼",
            tip: {
                content: "複製成功!"
            }
        }],
        ["vuepress-plugin-auto-sidebar", {}]
      
    ],
    themeConfig: {
        mode: 'dark', 
        modePicker: false, 
        type: 'blog',
        logo: '/page.png',
        authorAvatar: '/page.png',
        locales: {
            '/': {
              lang: 'zh-TW'
            },
        },
        blogConfig: {
            category: {
                location: 2,
                text: '專案'
            },
            tag: {
                location: 3,
                text: '標籤'
            }
        },
        codeTheme: 'tomorrow', // default 'tomorrow'
        friendLink: [
            {
                title: 'Docat0209',
                desc: 'Github',
                link: 'https://github.com/docat0209'
            },
            {
                title: 'URLoser404',
                desc: 'Github',
                link: 'https://github.com/urloser404'
            }
        ],
        nav: [
            { text: '首頁', link: '/', icon: 'reco-home' },
            { text: '網站歷史', link: '/timeline/', icon: 'reco-date' }
        ],
        noFoundPageByTencent: false
    }
    
}