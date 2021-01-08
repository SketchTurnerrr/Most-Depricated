import Head from 'next/head';
import Link from 'next/link';
import Nav from '../components/nav';

const name = 'Narek Oganesyan';
export const siteTitle = 'Bridge Church';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content='Bridge Church Kryvyi Rih' />
        s
        <meta name='og:title' content={siteTitle} />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      <Nav />
      <main>{children}</main>
    </>
  );
}
