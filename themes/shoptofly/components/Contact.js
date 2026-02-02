import { siteConfig } from '@/lib/config'
import CONFIG from '../config'
import { SVGEmail } from './svg/SVGEmail'
import { SVGLocation } from './svg/SVGLocation'

/* eslint-disable react/no-unescaped-entities */
export const Contact = () => {
  const url = siteConfig('STARTER_CONTACT_MSG_EXTERNAL_URL')
  return (
    <>
      {/* <!-- ====== Contact Start ====== --> */}
      <section id='contact' className='relative py-20 md:py-[120px]'>
        <div className='absolute left-0 top-0 -z-[1] h-full w-full dark:bg-dark'></div>
        <div className='absolute left-0 top-0 -z-[1] h-1/2 w-full bg-[#b3e5f7] dark:bg-dark-700 lg:h-[45%] xl:h-1/2'></div>
        <div className='container px-4'>
          <div className='-mx-4 flex flex-wrap items-center'>
            {/* 联系方式左侧文字 */}
            <div className='w-full px-4 lg:w-7/12 xl:w-8/12'>
              <div className='ud-contact-content-wrapper'>
                <div className='ud-contact-title mb-12 flex flex-wrap justify-between max-w-full lg:mb-[150px]'>
                  <div>
                    <span className='mb-6 block text-base font-medium text-dark dark:text-white'>
                      {siteConfig('STARTER_CONTACT_TITLE')}
                    </span>                  
                    <h2 className='mb-8 max-w-[260px] text-[35px] font-semibold leading-[1.14] text-dark dark:text-white'>
                      {siteConfig('STARTER_CONTACT_TEXT')}
                    </h2>
                    <p className='mb-6 block text-base font-medium text-dark dark:text-white'>
                      <a class="mb-4 inline-block text-xl font-semibold text-dark hover:text-[#9bc459] dark:text-white dark:hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl" href="https://t.me/shoptofly" target='_blank'>Telegram 点击联系</a>
                    </p>
                    <p className='mb-6 block text-base font-medium text-dark dark:text-white'>
                      <a class="mb-4 inline-block text-xl font-semibold text-dark hover:text-[#9bc459] dark:text-white dark:hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl" href="https://wa.me/8618819483656" target='_blank'>Whatsapp 点击联系</a>
                    </p>
                  </div>
                  <div class=''>
                    <span className='mb-6 block text-base font-medium text-dark dark:text-white'>
                    微信联系: <br/>
                    搜索 shoptofly 或者扫码添加
                    </span>
                    <img className='max-w-[280px] object-contain' alt='wecaht' src='/images/shoptofly/shoptofly-wechat.png'/>
                  </div>
                </div>

                <div className='mb-12 flex flex-wrap justify-between lg:mb-0'>
                  <div className='mb-8 flex w-[330px] max-w-full'>
                    <div className='mr-6 text-[32px] text-[#2a4030]'>
                      <SVGLocation />
                    </div>
                    <div>
                      <h5 className='mb-[18px] text-lg font-semibold text-dark dark:text-white'>
                        {siteConfig(
                          'STARTER_CONTACT_LOCATION_TITLE',
                          null,
                          CONFIG
                        )}
                      </h5>
                      <p className='text-base text-body-color dark:text-dark-6'>
                        {siteConfig(
                          'STARTER_CONTACT_LOCATION_TEXT',
                          null,
                          CONFIG
                        )}
                      </p>
                    </div>
                  </div>
                  <div className='mb-8 flex w-[330px] max-w-full'>
                    <div className='mr-6 text-[32px] text-[#2a4030]'>
                      <SVGEmail />
                    </div>
                    <div>
                      <h5 className='mb-[18px] text-lg font-semibold text-dark dark:text-white'>
                        {siteConfig(
                          'STARTER_CONTACT_EMAIL_TITLE',
                          null,
                          CONFIG
                        )}
                      </h5>
                      <p className='text-base text-body-color dark:text-dark-6'>
                        {siteConfig('STARTER_CONTACT_EMAIL_TEXT')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {url && url !== '' && (
              <>
                {/* 联系方式右侧留言 */}
                <div className='w-full px-4 lg:w-5/12 xl:w-4/12'>
                  <div
                    className='wow fadeInUp rounded-lg bg-white px-8 py-10 shadow-testimonial dark:bg-dark-2 dark:shadow-none sm:px-10 sm:py-12 md:p-[60px] lg:p-10 lg:px-10 lg:py-12 2xl:p-[60px]'
                    data-wow-delay='.2s'>
                    {/* 自定义的留言表单 、 需要对接接口 */}
                    {/* <MessageForm/> */}
                    {/* 嵌入外部表单 */}
                    <iframe
                      src={siteConfig(
                        'STARTER_CONTACT_MSG_EXTERNAL_URL',
                        null,
                        CONFIG
                      )}
                      width='100%'
                      height='500px'
                      frameBorder='0'></iframe>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
      {/* <!-- ====== Contact End ====== --> */}
    </>
  )
}
