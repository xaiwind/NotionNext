/* eslint-disable @next/next/no-img-element */

import SmartLink from '@/components/SmartLink'

export default function AboutPage() {  
  return ( 
    <main className="bg-[#0b0f14] text-white">

      {/* ================= Hero Section ================= */}
      <section className="relative h-[90vh] min-h-[600px] w-full overflow-hidden">
        {/* 背景图 */}
        <img
          src="/images/shoptofly/about/about-hero.avif" // 👉 换成你自己的大图
          alt="ShopToFly Hero"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />

        {/* 遮罩 */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#0b0f14]" />

        {/* 内容 */}
        <div className="relative z-10 flex h-full items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <p className="mb-4 text-sm uppercase tracking-widest text-[#9bc459]">
                About Me
              </p>

              <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
                Engineering Commerce <br />
                <span className="text-[#9bc459]">for Sustainable Growth</span>
              </h1>

              <p className="mb-10 text-lg text-white/80">
                我是 <strong>想风</strong>，一名专注于跨境电商技术体系的全栈开发者，
                也是 ShopToFly 的创建者。<br />
                我关注的不只是功能实现，而是系统是否真正服务于业务增长。
              </p>

              <SmartLink
                href="/#contact"
                className="inline-flex items-center rounded-full border border-[#9bc459] px-8 py-3 text-sm font-medium text-[#9bc459] transition hover:bg-[#9bc459] hover:text-black"
              >
                与我合作 →
              </SmartLink>
            </div>
          </div>
        </div>
      </section>

      {/* ================= About Site ================= */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold">
              关于 <span className="text-[#9bc459]">ShopToFly</span>
            </h2>

            <p className="mb-6 text-white/80 leading-relaxed">
              是本站的<strong>网站名、域名</strong>寓意：店铺起飞，
              专注跨境电商、独立站、shopify、wordpress、工具开发。
            </p>

            {/* <p className="text-white/60">
              文档说明：
              <SmartLink
                href="https://docs.tangly1024.com/about"
                className="ml-2 underline text-[#9bc459]"
              >
                docs.tangly1024.com
              </SmartLink>
            </p> */}
          </div>
        </div>
      </section>

      {/* ================= Mission ================= */}
      <section className="bg-[#0f1520] py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold">我的初衷</h2>

            <p className="text-white/80 leading-relaxed">
              打造一个 <strong>跨境电商技术服务引擎</strong>,
              为中小卖家提供长期可靠的技术支持与解决方案。
              <br /><br />
              我希望技术不再成为卖家的负担，
              而是一种可持续积累的商业资产。
            </p>

            <h2 className="mb-6 text-3xl font-bold pt-4">未来规划</h2>

            <p className="text-white/80 leading-relaxed">
              计划上线一款<strong>shopify主题</strong>一款<strong>会员积分插件</strong>,
              持续发布自媒体内容希望2026-<strong>B站粉丝过千</strong>。
              <br /><br />
              开发更多跨境电商相关的 <strong>SaaS工具</strong>,
              准备输出一套<strong>shopify全栈开发课程</strong>。
            </p>
          </div>
        </div>
      </section>

      {/* ================= Services ================= */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="mb-12 text-3xl font-bold">我能提供的服务</h2>

          <ul className="grid gap-6 md:grid-cols-2 text-white/80">
            <li>Shopify / Shopline / WooCommerce 建站与定制</li>
            <li>独立站性能优化、插件集成</li>
            <li>跨境 ERP / 物流系统 API 对接</li>
            <li>产品数据同步、自动化脚本开发</li>
            <li>Facebook / TikTok 像素埋点、事件追踪</li>
            <li>店铺迁移、后台自动化运维</li>
          </ul>
        </div>
      </section>

      {/* ================= Founder ================= */}
      <section className="bg-[#0f1520] py-24">
        <div className="container mx-auto px-6">
          <h2 className="mb-6 text-3xl font-bold">关于站长</h2>

          <p className="max-w-4xl text-white/80 leading-relaxed">
            我 2016 年毕业，早期做过测量、工地、自媒体编辑，
            后进入 Web 技术领域，先后经历外包、外企与跨境电商公司。
            <br /><br />
            技术栈覆盖 PHP / Go / Node / 前端全栈，
            目前专注于跨境电商方向的系统化建设。
            <br /><br />
            厌倦无意义的内卷，希望用长期主义的方式，
            做一件可持续、有价值的事情。
          </p>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 text-center">
        <h2 className="mb-6 text-3xl font-bold">
          寻找长期技术合作？
        </h2>

        <p className="mb-10 text-white/70">
          如果你需要的不只是一个程序员，
          而是一位理解业务的技术伙伴。
        </p>

        <SmartLink
          href="/#contact"
          className="inline-block rounded-full bg-[#9bc459] px-10 py-4 text-sm font-semibold text-black transition hover:opacity-90"
        >
          联系我
        </SmartLink>
      </section>

    </main>
  )
}
