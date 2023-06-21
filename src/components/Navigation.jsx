import Link from 'next/link';

const links = [
  {
    label: 'INICIO',
    route: '/',
  },
  {
    label: 'API',
    route: '/data',
  },
];

export function Navigation() {
  return (
    <header className='bg-Flamingo text-white'>
      <nav>
        <ul className='flex gap-10 justify-center font-black text-4xl p-4'>
          {links.map(({ label, route }) => (
            <li key={route}>
              <Link href={route}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
