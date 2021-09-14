import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Layout from '../components/Layout';
import Head from 'next/head';

export default function Home() {
  const { t } = useTranslation('common');

  return (
    <Layout>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content='Bridge Church Kryvyi Rih' />
        <meta name='og:title' content='Bridge Church' />
        <title>{t('BridgeChurch')}</title>
      </Head>
      {/* <-- Hero --> */}
      <section className='relative flex items-center content-center justify-center h-screen'>
        <div
          className='absolute w-full h-full bg-center bg-cover'
          style={{
            backgroundImage: 'url(/images/main-cover-2.jpg)',
          }}
        >
          <span className='absolute w-full h-full bg-black opacity-30'></span>
        </div>
        <div className='container relative mx-auto'>
          <div className='flex flex-wrap items-center'>
            <div className='w-full'>
              <h1 className='px-3 text-4xl font-bold leading-snug text-center text-white uppercase text-shadow md:text-5xl lg:text-8xl'>
                {t('EFCU')}
              </h1>

              <h3 className='px-3 pt-4 text-2xl italic text-center text-white md:pt-16 text-shadow lg:text-4xl'>
                {t('goal')}
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* <-- Location --> */}
      <section className='container mx-auto my-10'>
        <div className='justify-center md:bg-almostWhite md:flex'>
          {/* where and map div */}
          <div className='items-center md:flex md:w-full'>
            <div className='mx-5'>
              <h1 className='mt-5 mb-2 text-4xl font-semibold md:mt-0'>
                Where?
              </h1>
              <div className='font-medium text-gray-500'>
                Khartsyzka St, 188, Kryvyi Rih, Dnipro
              </div>
              <h1 className='mt-5 mb-2 text-4xl font-semibold'>When?</h1>
              <div className='font-medium text-gray-500'>
                Every Sunday at 11AM
              </div>
              <h1 className='mt-5 mb-2 text-4xl font-semibold'>Contact us</h1>
              <div className='font-medium text-gray-500'>narekbc@gmail.com</div>
            </div>

            {/* <--Google Map --> */}

            <div className='md:flex-grow'>
              <iframe
                className='w-full my-8 md:my-0'
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1732.903967411718!2d33.41277443250386!3d47.94599268689437!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40dadf8bb7a6beb9%3A0x56378ced765fcdec!2z0KXQsNGA0YbQuNC30YzQutCwINCy0YPQu9C40YbRjywgMTg4LCDQmtGA0LjQstC40Lkg0KDRltCzLCDQlNC90ZbQv9GA0L7Qv9C10YLRgNC-0LLRgdGM0LrQsCDQvtCx0LvQsNGB0YLRjCwgNTAwMDA!5e0!3m2!1suk!2sua!4v1630130946495!5m2!1suk!2sua'
                height='300'
                style={{ border: 0 }}
                allowFullScreen={false}
                loading='lazy'
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* <-- LATEST SERMON --> */}
      <section className='container p-5 mx-auto md:p-0 md:my-10 md:pb-10 '>
        <div className='items-center md:bg-almostWhite md:flex'>
          <img
            className='md:w-1/4'
            src='./images/latest-sermon.jpg'
            alt='a book on a table'
          />
          <div className='items-center flex-grow p-3 md:px-10 '>
            <h1 className='mt-5 text-4xl font-semibold md:mt-0'>
              Latest Sermon
            </h1>
            <h1 className='mt-5 text-xl font-semibold'>Wisemen's Story</h1>
            <div className='mt-2 font-medium text-gray-500'>
              December 27, 2020
            </div>
            <audio
              className='w-full mt-3 border-blue-600'
              controls='controls'
              preload='metadata'
              src='https://archive.org/download/2020-12-27/2020_12_27.mp3'
              type='audio/mpeg'
            >
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'navbar'])),
  },
});
