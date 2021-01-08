import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import Nav from '../components/nav';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className='py-20'>
        <h1 className='text-5xl text-center'>Bridge Church</h1>
      </div>
      <h2 className='title'>
        Read{' '}
        <Link href='posts/first-post'>
          <a className=''>first post</a>
        </Link>
      </h2>
      <section>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href='https://nextjs.org/learn'>our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
