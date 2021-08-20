import { i18n, Link, withTranslation } from '../i18n';
import Layout from '../components/Layout';

const About = ({ t }) => {
  return (
    <Layout>
      <div className='flex items-center justify-center my-10'>
        <img
          className='w-40 m-2 mx-4 rounded-full h-42 lg:w-44 lg:h-44'
          src='/images/IMG_4194--min.png'
          alt='photo of Daryl'
        />
        <img
          className='w-40 m-2 mx-4 rounded-full h-42 lg:w-44 lg:h-44'
          src='/images/IMG_4194--min.png'
          alt='photo of Molly'
        />
      </div>
      <section className='max-w-3xl mx-auto'>
        <div>
          <h1 className='mb-5 text-4xl font-semibold text-center'>
            {t('DMP')}
          </h1>
          <p className='p-5 mb-5 text-lg leading-relaxed text-gray-500 lg:p-0'>
            {t('p1')}
          </p>
          <p className='p-5 mb-5 text-lg leading-relaxed text-gray-500 lg:p-0'>
            {t('p2')}
          </p>
        </div>
      </section>

      <div className='flex flex-wrap items-center justify-center my-10 text-lg font-semibold'>
        <div className='items-center text-center'>
          <img
            className='w-40 m-2 mx-4 rounded-full h-42 lg:w-44 lg:h-44'
            src='/images/IMG_4194--min.png'
            alt='photo of Daryl'
          />
          <span>{t('A&L')}</span>
        </div>
        <div className='items-center text-center'>
          <img
            className='w-40 m-2 mx-4 rounded-full h-42 lg:w-44 lg:h-44'
            src='/images/IMG_4194--min.png'
            alt='photo of Daryl'
          />
          <span>{t('Vika')}</span>
        </div>
        <div className='items-center text-center'>
          <img
            className='w-40 m-2 mx-4 rounded-full h-42 lg:w-44 lg:h-44'
            src='/images/IMG_4194--min.png'
            alt='photo of Daryl'
          />
          <span>{t('Roma')}</span>
        </div>
      </div>
      <section className='max-w-3xl p-5 mx-auto'>
        <div className='text-center'>
          <h1 className='text-4xl font-semibold'>{t('WHAT_WE_BELIEVE')}</h1>
        </div>
        <h1 className='my-4 text-3xl font-semibold'>{t('SCRIPTURES')}</h1>
        <p className='w-full mb-10 text-lg text-gray-500'>
          {t('SCRIPTURES_P')}
        </p>
        <h1 className='my-4 text-3xl font-semibold'>{t('GOD')}</h1>
        <p className='w-full mb-10 text-lg text-gray-500'>{t('GOD_P')}</p>
        <h1 className='my-4 text-3xl font-semibold'>{t('JC')}</h1>
        <p className='w-full mb-10 text-lg text-gray-500'>{t('JC_P')}</p>
        <h1 className='my-4 text-3xl font-semibold'>{t('HS')}</h1>
        <p className='w-full mb-10 text-lg text-gray-500'>{t('HS_P')}</p>
        <h1 className='my-4 text-3xl font-semibold'>{t('HUMANITY')}</h1>
        <p className='w-full mb-10 text-lg text-gray-500'>{t('HUMANITY_P')}</p>
        <h1 className='my-4 text-3xl font-semibold'>{t('CHURCH')}</h1>
        <p className='w-full mb-10 text-lg text-gray-500'>{t('CHURCH_P')}</p>
        <h1 className='my-4 text-3xl font-semibold'>{t('DISCIPLESHIP')}</h1>
        <p className='w-full mb-10 text-lg text-gray-500'>
          {t('DISCIPLESHIP_P')}
        </p>
        <h1 className='my-4 text-3xl font-semibold'>{t('FUTURE')}</h1>
        <p className='w-full mb-10 text-lg text-gray-500'>{t('FUTURE_P')}</p>

        <div className='w-3/4 pl-4 mx-auto bg-blue-100 border-l-4 border-blue-500 rounded'>
          <p>{t('BLOCKQUOTE')}</p>
          <p className='pl-5'>{t('BLOCKQUOTE1')}</p>
          <p className='pl-5'>{t('BLOCKQUOTE2')}</p>
        </div>
      </section>
      <h1 className='max-w-5xl mx-auto mt-10 text-3xl font-semibold text-center lg:text-4xl'>
        {t('DISTINCTIVES')}
      </h1>
      <section className='max-w-3xl p-5 mx-auto'>
        <h1 className='my-4 text-2xl font-semibold'>{t('D1')}</h1>
        <p className='w-full mb-10 text-lg text-gray-500'>{t('D1P1')}</p>
        <h1 className='my-4 text-2xl font-semibold'>{t('D2')}</h1>
        <p className='w-full mb-10 text-lg text-gray-500'>{t('D2P1')}</p>
        <h1 className='my-4 text-2xl font-semibold'>{t('D3')}</h1>
        <p className='w-full mb-10 text-lg text-gray-500'>{t('D3P')}</p>
        <h1 className='my-4 text-2xl font-semibold'>{t('D4')}</h1>
        <p className='w-full mb-10 text-lg text-gray-500'>{t('D4P')}</p>
        <h1 className='my-4 text-2xl font-semibold'>{t('D5')}</h1>
        <p className='w-full mb-10 text-lg text-gray-500'>{t('D5P')}</p>
        <h1 className='my-4 text-2xl font-semibold'>{t('D6')}</h1>
        <p className='w-full mb-10 text-lg text-gray-500'>{t('D6P1')}</p>
        <p className='w-full mb-10 text-lg text-gray-500'>{t('D6P2')}</p>
        <h1 className='my-4 text-4xl font-bold'>{t('WHO_WE_ARE')}</h1>
        <p className='w-full mb-5 text-lg text-gray-500'>
          {t('WHO_WE_ARE_SUB')}
        </p>
        <p className='w-full mb-10 text-lg text-gray-500'>
          {t('WHO_WE_ARE_SUB1')}
        </p>
        <div className='pl-4 mb-10 ml-5 border-l-8 border-blue-500'>
          <p className='pl-2 font-bold'>{t('WHO_WE_ARE_SUB2')}</p>
          <p className='pl-2 font-bold'>{t('WHO_WE_ARE_SUB3')}</p>
          <p className='pl-2 font-bold'>{t('WHO_WE_ARE_SUB4')}</p>
          <p className='pl-2 font-bold'>{t('WHO_WE_ARE_SUB5')}</p>
        </div>
      </section>
    </Layout>
  );
};

About.getInitialProps = async () => ({
  namespacesRequired: ['common', 'about'],
});

export default withTranslation('about')(About);
