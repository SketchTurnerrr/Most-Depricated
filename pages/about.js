import { i18n, Link, withTranslation } from '../i18n';
import Layout from '../components/Layout';

const About = ({ t }) => {
  return (
    <Layout>
      {t('about')}
      <div className='flex items-center justify-center my-10'>
        <img
          className='w-64 h-64 m-2 rounded-full'
          src='/images/IMG_4194--min.png'
          alt='photo of Daryl'
        />
        <img
          className='w-64 h-64 m-2 rounded-full'
          src='/images/IMG_4194--min.png'
          alt='photo of Molly'
        />
      </div>
      <section className='max-w-3xl mx-auto'>
        <div>
          <h1 className='mb-5 text-4xl font-semibold text-center'>
            Daryl & Molly Porter
          </h1>
          <p className='p-5 mb-5 text-lg leading-relaxed text-gray-600 lg:p-0'>
            Our pastor is Daryl Porter. He and his wife Molly are missionaries
            from Canada. The Porters have lived in Ukraine since 2000 and in
            Krivoy Rog since 2012. They have two adult children and five grand
            children. One of the main goals of them living in Ukraine is to
            establish new Evangelical free churches and help them to grow. Daryl
            is also the Area Director for all of the EFCCM (Evangelical Free
            Church of Canada Mission) missionaries serving in Europe. During the
            year (October-May) the Porters lead an English club at their place.
          </p>
          <p className='p-5 mb-5 text-lg leading-relaxed text-gray-600 lg:p-0'>
            In the summer they also organize and teach at a 3-week Summer
            English Institute. It needs to be mentioned that Pastor Daryl's main
            hobby is running. All of his life he has run marathons and half
            marathons. It helps him to discipline himself not only physically,
            but also spiritually. How? Because in a very real sense our
            spiritual life is a race: we are running, get tired, fall, want to
            quit but get up and keep running until we see the finish line. We
            keep our eyes on Jesus who ran the race before us. He never stopped
            even though the way was hard. So we too should keep going just like
            He did.
          </p>
        </div>
      </section>
    </Layout>
  );
};

About.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default withTranslation()(About);
