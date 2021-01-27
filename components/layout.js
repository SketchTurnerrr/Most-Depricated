import Head from 'next/head';
import { i18n, Link, withTranslation } from '../i18n';
import Navbar from './Navbar';

const Layout = ({ children, t }) => {
  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content='Bridge Church Kryvyi Rih' />
        s
        <meta name='og:title' content={t('BridgeChurch')} />
        <title>{t('BridgeChurch')}</title>
      </Head>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

Layout.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default withTranslation('common')(Layout);
