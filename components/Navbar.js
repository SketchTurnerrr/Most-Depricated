import { i18n, Link, withTranslation } from '../i18n';
import { useState } from 'react';

const Navbar = ({ t }) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className='flex flex-wrap items-center justify-between px-6 py-8 lg:mx-auto lg:max-w-screen-xl lg:p-8'>
        <div className='flex items-center'>
          <Link href='/'>
            <a>
              <span className='text-xl font-bold lg:text-3xl '>{t('BC')}</span>
            </a>
          </Link>
        </div>
        <div className='flex items-center'>
          <button
            onClick={() => i18n.changeLanguage((i18n.language = 'en'))}
            className='mx-1 text-lg font-bold focus:text-blue-500 focus:outline-none'
          >
            EN
          </button>
          <button
            onClick={() => i18n.changeLanguage((i18n.language = 'ua'))}
            className='mx-1 text-lg font-bold focus:text-blue-500 focus:outline-none'
          >
            UA
          </button>
          <button
            onClick={() => i18n.changeLanguage((i18n.language = 'ru'))}
            className='mx-1 text-lg font-bold focus:text-blue-500 focus:outline-none'
          >
            RU
          </button>
        </div>
        <button
          onClick={handleClick}
          className='text-black focus:outline-none lg:hidden'
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        <div
          className={`${
            active ? '' : 'hidden'
          } w-full lg:flex lg:items-center pt-4 lg:w-auto`}
        >
          <div className='flex flex-col items-start w-full leading-loose rounded-lg lg:bg-transparent lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto lg:items-center lg:h-auto'>
            <Link href='/ministries'>
              <a className='items-center justify-center w-full px-3 font-semibold transition duration-500 ease-in-out lg:text-lg lg:inline-flex lg:w-auto hover:text-blue-500'>
                {t('ministries')}
              </a>
            </Link>

            <Link href='/about'>
              <a className='items-center justify-center w-full px-3 font-semibold transition duration-500 ease-in-out lg:text-lg lg:inline-flex lg:w-auto hover:text-blue-500'>
                {t('about')}
              </a>
            </Link>

            <Link href='/listen'>
              <a className='items-center justify-center w-full px-3 font-semibold transition duration-500 ease-in-out lg:inline-flex lg:w-auto lg:text-lg hover:text-blue-500'>
                {t('listen')}
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

Navbar.getInitialProps = async () => ({
  namespacesRequired: ['navbar'],
});

export default withTranslation('navbar')(Navbar);
