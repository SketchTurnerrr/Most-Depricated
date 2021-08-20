import { i18n, Link, withTranslation } from '../i18n';
import Layout from '../components/Layout';

const Ministries = ({ t }) => {
  return (
    <Layout>
      <div>asd</div>
    </Layout>
  );
};

Ministries.getInitialProps = async () => ({
  namespacesRequired: ['ministries'],
});

export default withTranslation('ministries')(Ministries);

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
