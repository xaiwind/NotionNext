/* eslint-disable @next/next/no-img-element */
import { siteConfig } from '@/lib/config'
import SmartLink from '@/components/SmartLink'
import { Router } from 'next/router'

/**
 * 客户案例 项目列表
 * @param {*} param0
 * @returns
 */
export const Project = ({ posts }) => {
  console.log('router.basePath---', Router.basePath);
  {
      posts = [
        {title: '卡维滋进口蜂蜜品牌独立站', summary: '宝塔 lnmp wordpress elementor', publishDay: '2025-12', href: 'https://www.kavezi.com/en/', pageCoverThumbnail: '/images/shoptofly/project/1-kavezi.webp'},
        {title: 'APM Monaco 国际品牌官网', summary: 'shopify plus 主题定制 数据同步', publishDay: '2021-12', href: 'https://us.apm.mc/', pageCoverThumbnail: '/images/shoptofly/project/2-apm.webp'},
        {title: '海外短剧广告投放管理系统', summary: 'docker go vue3  FB Pixel ads', publishDay: '2025-05', href: 'https://shoptofy.com/images/shoptofly/project/3-short.png', pageCoverThumbnail: '/images/shoptofly/project/3-short.png'}
      ]
  }
  return (
    <>
      {/* <!-- ====== Blog Section Start --> */}
      <section className='bg-[#eff0a0] pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]'>
        <div className='container mx-auto'>
          {/* 区块标题文字 */}
          <div className='-mx-4 flex flex-wrap justify-center'>
            <div className='w-full px-4'>
              <div className='mx-auto mb-[60px] max-w-[485px] text-center'>
                <span className='mb-2 block text-lg font-semibold text-[#2a4030]'>
                  我们的案例
                </span>
                <h2 className='mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]'>
                   项目展示
                </h2>
                <p
                  dangerouslySetInnerHTML={{
                    __html: '我们为众多客户提供专业的 shopify、wordpress 等技术开发服务，以下是部分客户案例'
                  }}
                  className='text-base text-body-color dark:text-dark-6'></p>
              </div>
            </div>
          </div>
          {/* 博客列表 此处优先展示3片文章 */}
          {/* { console.log('Project posts----3', posts)  } */}
          
          <div className='-mx-4 flex flex-wrap'>
            {posts?.map((item, index) => {
              return (
                <div key={index} className='w-full px-4 md:w-1/2 lg:w-1/3'>
                  <div
                    className='wow fadeInUp group mb-10'
                    data-wow-delay='.1s'>
                    <div className='relative pb-[56.25%] mb-8 overflow-hidden rounded-[5px]'>
                      {item.pageCoverThumbnail && (
                        <SmartLink href={item?.href} className='block'>
                          <img
                            src={item.pageCoverThumbnail}
                            alt={item.title}
                            className='absolute inset-0 w-full h-auto object-contain transition group-hover:rotate-6 group-hover:scale-125'
                          />
                        </SmartLink>
                      )}
                    </div>
                    <div>
                      <span className='mb-6 inline-block rounded-[5px] bg-primary px-4 py-0.5 text-center text-xs font-medium leading-loose text-white'>
                        {item.publishDay}
                      </span>
                      <h3>
                        <SmartLink
                          href={item?.href}
                          className='mb-4 inline-block text-xl font-semibold text-dark hover:text-[#9bc459] dark:text-white dark:hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl'>
                          {item.title}
                        </SmartLink>
                      </h3>
                      <p className='max-w-[370px] text-base text-body-color dark:text-dark-6'>
                        {item.summary}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      {/* <!-- ====== Blog Section End --> */}
    </>
  )
}
