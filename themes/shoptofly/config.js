/**
 * 另一个落地页主题
 */
const CONFIG = {
  // 默认只展示Logo文字，如果设置了logo图片，会在文字左侧显示图标
  STARTER_LOGO: '/images/shoptofly/logo/shopify_glyph.png', // 普通logo图片 示例：/images/starter/logo/logo.svg
  STARTER_LOGO_WHITE: '/images/shoptofly/logo/shopify_glyph_white.png', // 透明底浅色logo 示例： /images/starter/logo/logo-white.svg

  // MENU ， 菜单部分不在此处配置，请在Notion数据库中添加MENU

  // 英雄区块导航
  STARTER_HERO_ENABLE: true, // 开启英雄区
  STARTER_HERO_TITLE_1: '面向跨境卖家的技术服务提供者 Shopify + WordPress  & 中台/ERP SaaS ', // 英雄区文字
  STARTER_HERO_TITLE_2: '加入ShopToFly社区,获取更多跨境资讯、教程、技术支持', // 英雄区文字
  // 英雄区两个按钮，如果TEXT留空则隐藏按钮
  STARTER_HERO_BUTTON_1_TEXT: '开始体验', // 英雄区按钮
  STARTER_HERO_BUTTON_1_URL:
    'https://www.shopify.com', // 英雄区按钮
  STARTER_HERO_BUTTON_2_TEXT: '在B站上关注我', // 英雄区按钮
  STARTER_HERO_BUTTON_2_URL: 'https://space.bilibili.com/266933323', // 英雄区按钮
  STARTER_HERO_BUTTON_2_ICON: '/images/shoptofly/Bilibili_logo.svg', // 英雄区按钮2的图标，不需要则留空

  // 英雄区配图，如需隐藏，改为空值即可 ''
  STARTER_HERO_PREVIEW_IMAGE: '/images/shoptofly/hero/shoptofly.png', // 产品预览图 ，默认读取public目录下图片
  STARTER_HERO_BANNER_IMAGE: '', // hero区下方的全宽图

  SHOPTOFLY_TOP_WORD1: '🚀 299rmb 自研高级模版预售中',   //优惠框1
  SHOPTOFLY_TOP_WORD2: '🌍 免费咨询、在线接单、欢迎详聊',  //优惠框2

  // 顶部右侧导航暗流
  STARTER_NAV_BUTTON_1_TEXT: 'Sign In',
  STARTER_NAV_BUTTON_1_URL: '/sign-in',

  STARTER_NAV_BUTTON_2_TEXT: 'Sign Up',
  STARTER_NAV_BUTTON_2_URL: '/sign-up',

  // 特性区块
  STARTER_FEATURE_ENABLE: true, // 特性区块开关
  STARTER_FEATURE_TITLE: '优势', // 特性
  STARTER_FEATURE_TEXT_1: 'ShopToFly的主要优势', // 特性
  STARTER_FEATURE_TEXT_2:
    'ShopToFly的愿景是帮助中小卖家简单、安全无忧地搭建自己的独立站商城网站,获取技术支持服务。 ', // 特性

  STARTER_FEATURE_1_TITLE_1: '极速建站，简单上手', // 特性1
  STARTER_FEATURE_1_TEXT_1: '专业技术背景，操作培训，帮您快速搭建专业级独立站，让您专注于卖货本身。', // 特性1
  STARTER_FEATURE_1_BUTTON_TEXT: '了解更多', // 特性1
  STARTER_FEATURE_1_BUTTON_URL: '', // 特性1

  STARTER_FEATURE_2_TITLE_1: '安全稳定，全程护航', // 特性2
  STARTER_FEATURE_2_TEXT_1: '从平台安全到支付交易，我们提供全方位保障，让您高枕无忧，远离技术风险。', // 特性2
  STARTER_FEATURE_2_BUTTON_TEXT: '了解更多', // 特性2
  STARTER_FEATURE_2_BUTTON_URL:
    '', // 特性2

  STARTER_FEATURE_3_TITLE_1: '专业支持，随叫随到', // 特性3
  STARTER_FEATURE_3_TEXT_1: '拥有专属技术支持团队，随时解决您的问题，做您最可靠的“网店IT部门”。', // 特性3
  STARTER_FEATURE_3_BUTTON_TEXT: '了解更多', // 特性3
  STARTER_FEATURE_3_BUTTON_URL: '', // 特性3

  STARTER_FEATURE_4_TITLE_1: '成本可控，高性价比', // 特性4
  STARTER_FEATURE_4_TEXT_1: '一站式解决方案，您无需组建昂贵技术团队，大幅降低初始投入，每一分钱都花在刀刃上。', // 特性4
  STARTER_FEATURE_4_BUTTON_TEXT: '了解更多', // 特性4
  STARTER_FEATURE_4_BUTTON_URL: '', // 特性4

  // 首页ABOUT区块
  STARTER_ABOUT_ENABLE: true, // ABOUT区块开关
  STARTER_ABOUT_TITLE: '一套简单快捷、安全稳定的独立站启动方案',
  STARTER_ABOUT_TEXT:
    'ShopToFly的愿景是让每位中小卖家都能拥有强大的技术支持，专注于产品与营销，将生意风险降至最低。功能全面的电商系统，依托可靠的基础架构，助您轻松开启品牌出海之旅。',
  STARTER_ABOUT_BUTTON_TEXT: '了解更多',
  STARTER_ABOUT_BUTTON_URL: '/#contact',
  STARTER_ABOUT_IMAGE_1: '/images/shoptofly/about/about-image-01.png',
  STARTER_ABOUT_IMAGE_2: '/images/shoptofly/about/about-image-02.png',
  STARTER_ABOUT_TIPS_1: '100+',
  STARTER_ABOUT_TIPS_2: '跨境站点',
  STARTER_ABOUT_TIPS_3: '正在线上运行',

  // 首页价格区块
  STARTER_PRICING_ENABLE: true, // 价格区块开关
  STARTER_PRICING_TITLE: '价格表',
  STARTER_PRICING_TEXT_1: '很棒的定价计划',
  STARTER_PRICING_TEXT_2:
    '我们制定了灵活的付费模式，您可以按需选择。（暂时不支持线上支付，可以加我微信或者邮件联系我）',

  STARTER_PRICING_1_TITLE: '1 对 1 技术咨询',
  STARTER_PRICING_1_PRICE: '39.98',
  STARTER_PRICING_1_PRICE_CURRENCY: '$',
  STARTER_PRICING_1_PRICE_PERIOD: '30天售后',
  STARTER_PRICING_1_HEADER: '服务项',
  STARTER_PRICING_1_FEATURES: '一小时技术咨询,跨境技术专家,一对一沟通,语音需要预约,免费社群服务', // 英文逗号隔开
  STARTER_PRICING_1_BUTTON_TEXT: '立即购买',
  STARTER_PRICING_1_BUTTON_URL:'/#contact',

  STARTER_PRICING_2_TAG: '推荐',
  STARTER_PRICING_2_TITLE: '月度技术支持',
  STARTER_PRICING_2_PRICE: '399.88+',
  STARTER_PRICING_2_PRICE_CURRENCY: '$',
  STARTER_PRICING_2_PRICE_PERIOD: '90天售后',
  STARTER_PRICING_2_HEADER: '服务项',
  STARTER_PRICING_2_FEATURES: '包含前者,一月时长,模版建站,代码微调,项目源码,技术支持', // 英文逗号隔开
  STARTER_PRICING_2_BUTTON_TEXT: '立即购买',
  STARTER_PRICING_2_BUTTON_URL:'/#contact',

  STARTER_PRICING_3_TITLE: '定制开发服务',
  STARTER_PRICING_3_PRICE: '1399.88+',
  STARTER_PRICING_3_PRICE_CURRENCY: '$',
  STARTER_PRICING_3_PRICE_PERIOD: '180天售后',
  STARTER_PRICING_3_HEADER: '服务项',
  STARTER_PRICING_3_FEATURES: '包含前者,按照设计稿开发,功能定制开发', // 英文逗号隔开
  STARTER_PRICING_3_BUTTON_TEXT: '立即购买',
  STARTER_PRICING_3_BUTTON_URL:'/#contact',

  // 首页用户测评区块
  STARTER_TESTIMONIALS_ENABLE: true, // 测评区块开关
  STARTER_TESTIMONIALS_TITLE: '用户反馈',
  STARTER_TESTIMONIALS_TEXT_1: '我们的用户怎么说',
  STARTER_TESTIMONIALS_TEXT_2:
    '数百跨境卖家选择用ShopToFly搭建他们的独立站,通过帮助手册、交流社群以及技术咨询、技术支持，大家成功上线了自己的跨境商城',
  STARTER_TESTIMONIALS_STAR_ICON: '/images/starter/testimonials/icon-star.svg', // 评分图标

  // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
  STARTER_TESTIMONIALS_ITEMS: [
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '简单，安全，服务好！ShopToFly团队完美满足了我对独立站的所有想象，是我跨境电商之旅最棒的起点。',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        '/images/shoptofly/testimonials/krisli.jpg',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'kris li',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '跨境卖家 solo',
      STARTER_TESTIMONIALS_ITEM_URL: ''
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '依靠ShopToFly，心里踏实多了。再也不用担心网站安全漏洞和支付风险了，他们有专业团队在背后保驾护航，我可以安心搞事业了。',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        '/images/shoptofly/testimonials/jackzhang.jpg',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'jack zhang',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '跨境卖家 solo',
      STARTER_TESTIMONIALS_ITEM_URL: ''
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '必须夸一下shoptofly团队！响应速度快，而且非常专业，无论多小的问题都会耐心解答，感觉像雇了一个免费的IT部门。”( •̀ ω •́ )y ',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        '/images/shoptofly/testimonials/becca.jpg',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Becca',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '跨境卖家 宝妈',
      STARTER_TESTIMONIALS_ITEM_URL: ''
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '完全不懂代码的小白也能轻松上手！ShopToFly团队搭建独立站比我想象中快太多了，拖拽操作真的很人性化，强烈推荐给想自己做跨境的兄弟们！',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        '/images/shoptofly/testimonials/zhuzhu.jpg',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: '猪猪',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '跨境卖家',
      STARTER_TESTIMONIALS_ITEM_URL: ''
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        '一开始还担心价格，用了之后发现物超所值。它帮我避免了很多潜在的坑，这钱花得值！',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        '/images/shoptofly/testimonials/willson.jpg',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'willson',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '跨境卖家 创业者',
      STARTER_TESTIMONIALS_ITEM_URL: ''
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT: '店家服务很不错，靠谱、非常感谢！',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        '/images/shoptofly/testimonials/flower.jpg',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'flower',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: '跨境卖家 ',
      STARTER_TESTIMONIALS_ITEM_URL: ''
    }
  ],

  //   FAQ 常见问题模块
  STARTER_FAQ_ENABLE: true, // 常见问题模块开关
  STARTER_FAQ_TITLE: '常见问题解答',
  STARTER_FAQ_TEXT_1: '有任何问题吗？请看这里',
  STARTER_FAQ_TEXT_2: '我们收集了常见的用户疑问',

  STARTER_FAQ_1_QUESTION: 'ShopToFly提供哪些服务',
  STARTER_FAQ_1_ANSWER:
    'ShopToFly定位是一个给跨境电商中小卖家提供专业技术支持的团队,我们提供跨境咨询、支持维护、跨境建站、主题定制、应用开发、支付对接、ERP集成、工具制作等服务',

  STARTER_FAQ_2_QUESTION: 'shopify为何是目前独立站建站首选？',
  STARTER_FAQ_2_ANSWER:
  '开箱即用的全面性：无需技术背景，通过直观后台和丰富模板就能快速搭建专业网店；拥有海量应用插件轻松扩展功能；同时提供安全稳定的支付、物流等电商基础设施，让卖家能专注营销与销售，一站式解决独立站所有核心需求。',

  STARTER_FAQ_3_QUESTION: '合作前需要做什么准备呢',
  STARTER_FAQ_3_ANSWER:
    '首次确定你的需求，入门版仅一小时咨询，无需准备，基础版适合新手卖家，需准备logo、产品资料等，高级版适合品牌客户需要准备基础版的还需要准备设计稿，不接口头定制功能',

  STARTER_FAQ_4_QUESTION: '可以怎么合作呢？如何付款？',
  STARTER_FAQ_4_ANSWER:
    '加微信详聊、可以简单功能开发也可以项目合作，首次合作和金额超过1000rmb的订单 必须442付款，即首付4成开工，做完一半再付4成，完成9成后付全款，准备交付',


  // 团队成员区块
  STARTER_TEAM_ENABLE: true, // 团队成员区块开关
  STARTER_TEAM_TITLE: '团队成员',
  STARTER_TEAM_TEXT_1: '我们的开发者团队',
  STARTER_TEAM_TEXT_2:
    'ShopToFly由多位10年左右资深跨境行业从业者，提供强有力的技术支持',

  // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
  STARTER_TEAM_ITEMS: [
    {
      STARTER_TEAM_ITEM_AVATAR:
        '/images/shoptofly/team/team-01.png',
      STARTER_TEAM_ITEM_NICKNAME: '想风',
      STARTER_TEAM_ITEM_DESCRIPTION: '站长想风ToFly'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/shoptofly/team/team-02.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Tong',
      STARTER_TEAM_ITEM_DESCRIPTION: '高级前端工程师'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/shoptofly/team/team-03.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Su',
      STARTER_TEAM_ITEM_DESCRIPTION: 'PHP全栈工程师'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/shoptofly/team/team-04.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Ye',
      STARTER_TEAM_ITEM_DESCRIPTION: '资深创意设计师'
    }
  ],

  // 博客文章区块
  STARTER_BLOG_ENABLE: true, // 首页博文区块开关
  STARTER_BLOG_TITLE: '我们的博客',
  STARTER_BLOG_COUNT: 3, // 首页博文区块默认展示前3篇文章
  STARTER_BLOG_TEXT_1: '最近的新闻',
  STARTER_BLOG_TEXT_2:
    '这里会发布一些关于跨境电商的最新动态，包括shopify、amazon、paypal和运营技术等',

  // 联系模块
  STARTER_CONTACT_ENABLE: true, // 联系模块开关
  STARTER_CONTACT_TITLE: '联系我们',
  STARTER_CONTACT_TEXT: '告诉我们您遇到的问题',
  STARTER_CONTACT_LOCATION_TITLE: '我们的位置',
  STARTER_CONTACT_LOCATION_TEXT: '中国，深圳',
  STARTER_CONTACT_EMAIL_TITLE: '我们如何帮助您？',
  STARTER_CONTACT_EMAIL_TEXT: 'support@shoptofly.com',

  // 嵌入外部表单
  STARTER_CONTACT_MSG_EXTERNAL_URL: 'https://noteforms.com/forms/duplicate-free-client-intake-form-y5it1p', // 基于NoteForm创建，将留言数据存在Notion中
  //   自定义留言表单，以下几个配置暂时废弃
  //   STARTER_CONTACT_MSG_TITLE: '向我们留言',
  //   STARTER_CONTACT_MSG_NAME: '姓名',
  //   STARTER_CONTACT_MSG_EMAIL: '邮箱地址',
  //   STARTER_CONTACT_MSG_PHONE: '联系电话',
  //   STARTER_CONTACT_MSG_TEXT: '消息内容',
  //   STARTER_CONTACT_MSG_SEND: '发送消息',
  //   STARTER_CONTACT_MSG_THANKS: '感谢您的留言',

  // 合作伙伴的图标
  STARTER_BRANDS_ENABLE: true, // 合作伙伴开关
  STARTER_BRANDS: [
    {
      IMAGE: '/images/shoptofly/brands/amazon_whitebg.svg',
      IMAGE_WHITE: '/images/shoptofly/brands/amazon_darkbg.svg',
      URL: 'https://developer-docs.amazon.com/sp-api/docs/welcome',
      TITLE: 'amazon'
    },
    {
      IMAGE: '/images/shoptofly/brands/ticktok_whitebg.svg',
      IMAGE_WHITE: '/images/shoptofly/brands/ticktok_darkbg.svg',
      URL: 'https://developers.tiktok.com/doc/overview',
      TITLE: 'ticktok'
    },
    {
      IMAGE: '/images/shoptofly/brands/shopify_whitebg.svg',
      IMAGE_WHITE: '/images/shoptofly/brands/shopify_darkbg.svg',
      URL: 'https://shopify.dev/docs',
      TITLE: 'shopify'
    },
    {
      IMAGE: '/images/shoptofly/brands/shopline_whitebg.svg',
      IMAGE_WHITE: '/images/shoptofly/brands/shopline_darkbg.svg',
      URL: 'https://developer.shopline.com',
      TITLE: 'shopline'
    },
    {
      IMAGE: '/images/shoptofly/brands/wordpress_whitebg.svg',
      IMAGE_WHITE: '/images/shoptofly/brands/wordpress_darkbg.svg',
      URL: 'https://developer.wordpress.org/',
      TITLE: 'wordpress'
    },
    {
      IMAGE: '/images/shoptofly/brands/magento_whitbg.svg',
      IMAGE_WHITE: '/images/shoptofly/brands/magento_darkbg.svg',
      URL: 'https://developer.adobe.com/commerce/docs/',
      TITLE: 'magento'
    }
  ],

  STARTER_FOOTER_SLOGAN: '我们通过技术为跨境电商中小卖家提供技术支持',

  // 页脚三列菜单组
  STARTER_FOOTER_LINK_GROUP: [
    {
      TITLE: '关于我们',
      LINK_GROUP: [    
        { TITLE: '关于本站', URL: '/article/2991c968-562f-801a-a86a-d565e6cd988f' },
        // {
        //   TITLE: '帮助支持',
        //   URL: 'https://docs.tangly1024.com/article/how-to-question'
        // },
        // {
        //   TITLE: '合作申请',
        //   URL: 'https://docs.tangly1024.com/article/my-service'
        // }
      ]
    },
    {
      TITLE: '团队优势',
      LINK_GROUP: [
        {
          TITLE: '团队成员',
          URL: '/#team'
        },
        // { TITLE: '最新版本', URL: 'https://docs.tangly1024.com/article/latest' }
      ]
    },
    {
      TITLE: '友情链接', //项目案例
      LINK_GROUP: [
        {
          TITLE: '站长以往博客',//shopify项目
          URL: 'https://learnku.com/blog/zhaocrazy'
        },
        // {
        //   TITLE: 'API集成',
        //   URL: 'https://docs.tangly1024.com/article/notion-short-key'
        // },
        // {
        //   TITLE: '工具软件',
        //   URL: 'https://docs.tangly1024.com/article/notion-faster'
        // }
      ]
    }
  ],

  STARTER_FOOTER_BLOG_LATEST_TITLE: '最新文章',

  STARTER_FOOTER_PRIVACY_POLICY_TEXT: '隐私政策',
  STARTER_FOOTER_PRIVACY_POLICY_URL: '/privacy-policy',

  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_TEXT: '法律声明',
  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_URL: '/legacy-notice',

  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_TEXT: '服务协议',
  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_URL: '/terms-of-use',

  // 404页面的提示语
  STARTER_404_TITLE: '我们似乎找不到您要找的页面。',
  STARTER_404_TEXT: '抱歉！您要查找的页面不存在。可能已经移动或删除。',
  STARTER_404_BACK: '回到主页',

  // 页面底部的行动呼吁模块
  STARTER_CTA_ENABLE: true,
  STARTER_CTA_TITLE: '你还在等待什么呢？',
  STARTER_CTA_TITLE_2: '现在开始吧',
  STARTER_CTA_DESCRIPTION:
    '访问ShopToFly的操作文档,我们提供了详细的教程,帮助你业务即刻起飞',
  STARTER_CTA_BUTTON: true, // 是否显示按钮
  STARTER_CTA_BUTTON_URL: 'https://www.shopify.com',
  STARTER_CTA_BUTTON_TEXT: '开始体验',

  STARTER_POST_REDIRECT_ENABLE: true, // 默認開啟重定向
  STARTER_POST_REDIRECT_URL: 'https://blog.tangly1024.com', // 重定向域名
  STARTER_NEWSLETTER: process.env.NEXT_PUBLIC_THEME_STARTER_NEWSLETTER || false 
  // 是否开启邮件订阅 请先配置mailchimp功能 https://docs.tangly1024.com/article/notion-next-mailchimp
}
export default CONFIG
