import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import Layout from '../components/Layout';
import Image from 'next/image';

export default function Ministries() {
  const { t } = useTranslation('ministries');

  return (
    <Layout>
      <div>
        <div className='max-w-screen-xl py-24 mx-auto'>
          <div className='flex justify-between'>
            <div>
              <h1 className='p-2 pb-5 text-2xl font-bold lg:text-7xl'>
                Sunday Service
              </h1>
              <p className='max-w-2xl pr-4'>
                Each Sunday we gather as the family of God, the body of Christ
                to honor Him and worship Him through reading Scripture, singing
                songs of praise, praying together, studying God’s Word together
                and eating and fellowshipping together. Through these activities
                we seek to one another in our faith so we will stay faithful to
                Jesus Christ and be good witnesses for Him in the world during
                the week.
              </p>
            </div>
            <Image
              className='rounded-md'
              src='/images/SundayService.jpg'
              alt='Worship Service'
              height={530}
              width={795}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['ministries', 'navbar'])),
  },
});

// {
//   /* Card one */
// }
// <div className='justify-center p-4 md:flex'>
//   <div className='w-full mb-5 md:max-w-xl md:mr-5 lg:flex'>
//     <div
//       className='flex-none h-64 overflow-hidden text-center bg-center bg-cover rounded-t lg:h-auto lg:w-64 lg:rounded-t-none lg:rounded-l'
//       style={{
//         backgroundImage: 'url(https://most-kr.com/images/youth.webp)',
//         alt: 'First Timothy 4 12-16 written on a wall',
//       }}
//     ></div>
//     <div className='flex flex-col justify-between p-4 leading-normal bg-white border-b border-l border-r rounded-b border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light lg:rounded-b-none lg:rounded-r'>
//       <div className='mb-3'>
//         <div className='mb-2 text-xl font-bold text-black'>{t('YOUTH')}</div>
//         <p className='text-sm text-gray-500'>{t('YOUTH_P')}</p>
//       </div>
//     </div>
//   </div>

//   {/* Card two */}

//   <div className='w-full mb-5 md:max-w-xl lg:flex'>
//     <div
//       className='flex-none h-64 overflow-hidden text-center bg-center bg-cover rounded-t lg:h-auto lg:w-64 lg:rounded-t-none lg:rounded-l'
//       style={{
//         backgroundImage: 'url(/images/Sunday.jpg)',
//         alt: 'Woman holding a mug',
//       }}
//     ></div>
//     <div className='flex flex-col justify-between p-4 leading-normal bg-white border-b border-l border-r rounded-b border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light lg:rounded-b-none lg:rounded-r'>
//       <div className='mb-3'>
//         <div className='mb-2 text-xl font-bold text-black'>
//           {t('SUNDAY_SERV')}
//         </div>
//         <p className='text-sm text-gray-500'>{t('SUNDAY_P')}</p>
//       </div>
//     </div>
//   </div>
// </div>;
