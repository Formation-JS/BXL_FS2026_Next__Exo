import lieux from '@/data/lieux-events.json';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function LocationDetailPage({ params }) {

    const id = parseInt((await params).id);

    const lieu = lieux.find(l => l.id === id);
    if (!lieu) {
        notFound();
    }

    return (
        <main className='p-3'>
            <h1 className='text-green-600 text-3xl'>Information : {lieu.name}</h1>
            <address>
                {lieu.address.street} <br />
                {lieu.address.postalCode} {lieu.address.city} <br />
                {lieu.address.country}
            </address>

            <Link href='/lieux' className='text-green-400'>Retourner à la liste</Link>
        </main>
    );
}