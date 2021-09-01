import Head from 'next/head';
import { i18n, Link, withTranslation } from '../i18n';
import Navbar2 from './Navbar2';

const Layout = ({ children, t }) => {
  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content='Bridge Church Kryvyi Rih' />
        s
        <meta name='og:title' content='Bridge Church' />
        <title>{t('BridgeChurch')}</title>
      </Head>
      {/* <Navbar /> */}
      <Navbar2 />

      <div>{children}</div>
    </>
  );
};

Layout.getInitialProps = async () => ({
  namespacesRequired: ['common'],
});

export default withTranslation('common')(Layout);
