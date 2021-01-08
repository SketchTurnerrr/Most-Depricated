import Link from 'next/link';

const links = [
  { href: 'https://github.com/vercel/next.js', label: 'GitHub' },
  { href: 'https://nextjs.org/docs', label: 'Docs' },
];

export default function Nav() {
  return (
    <div className='container mx-auto'>
      <nav className='flex md:justify-between'>
        <div className='flex flex-row items-center justify-start text-3xl font-bold text-black no-underline'>
          <Link href='/'>Bridge Church</Link>
        </div>
        <ul className='flex items-center p-8'>
          <li>
            <Link href='/ministries'>
              <a className='p-5 font-bold text-black no-underline'>
                Ministries
              </a>
            </Link>
          </li>
          <li>
            <Link href='/about'>
              <a className='p-5 font-bold text-black no-underline'>About</a>
            </Link>
          </li>
          <li>
            <Link href='/listen'>
              <a className='p-5 font-bold text-black no-underline '>Listen</a>
            </Link>
          </li>
        </ul>
        <ul className='flex items-center justify-end'>
          <li className='p-1 font-bold'>EN</li>
          <li className='p-1 font-bold'>UA</li>
          <li className='p-1 font-bold'>RU</li>
        </ul>
      </nav>
    </div>
  );
}
