import Link from 'next/link';

const navLinks = [
    { target: '/', name: 'Accueil' },
    { target: '/events', name: 'Events' },
    { target: '/lieux', name: 'Lieux' },
    { target: '/apropos', name: 'A propos' }
];

export default function NavBar() {

    return (
        <nav>
            <ul className='flex flex-row gap-2 text-yellow-400'>
                {navLinks.map(({ name, target }) => (
                    <li key={target} className='hover:text-pink-200'>
                        <Link href={target}>{name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}