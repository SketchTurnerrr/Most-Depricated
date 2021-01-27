import { i18n, Link, withTranslation } from '../i18n';
import Layout from '../components/Layout';

const Home = ({ t }) => {
  return (
    <Layout home>
      <div
        className='bg-gray-300 bg-center bg-cover lg:pt-16 h-vh9'
        style={{
          backgroundImage: 'url(/images/main-cover.jpg)',
          backgroundBlendMode: 'multiply',
        }}
      >
        <h1 className='p-5 pt-64 text-6xl text-center text-white text-shadow'>
          {t('BridgeChurch')}
        </h1>
        <h2 className='p-5 text-3xl text-center text-white text-shadow'>
          {t('EFCU')}
        </h2>
        <h2 className='p-2 text-3xl text-center text-white text-shadow'>
          {t('welcome')}
        </h2>
        <h5 className='text-xl italic text-center lg:p-3 text-gray-50 lg:mx-72 text-shadow'>
          {t('goal')}
        </h5>
      </div>
      <section className='w-auto px-5 mt-5'>
        <div className='flex flex-wrap justify-center max-w-screen-md mx-auto'>
          <div className='items-center w-1/2'>
            <h1 className='mt-5 text-4xl font-semibold'>Where?</h1>
            <p className='font-medium text-gray-500'>
              Khartsyzka St, 188, Kryvyi Rih, Dnipro
            </p>
            <h1 className='mt-5 text-4xl font-semibold'>When?</h1>
            <p className='font-medium text-gray-500'>Every Sunday at 11AM</p>
            <h1 className='mt-5 text-4xl font-semibold'>Contact us</h1>
            <p className='font-medium text-gray-500'>narekbc@gmail.com</p>
          </div>
          <div className='items-center w-1/2'>
            <h1 className='mt-5 text-4xl font-semibold'>Latest Sermon</h1>
            <h1 className='mt-5 text-xl font-semibold'>Wisemen's Story</h1>
            <p className='mt-2 font-medium text-gray-500'>December 27, 2020</p>
            <audio
              className='mt-1'
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
};

Home.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default withTranslation('common')(Home);
