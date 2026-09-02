import lieux from '@/data/lieux-events.json';
import PlaceService from '@/services/place.service';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function PlaceDetailPage({ params }) {

    const id = parseInt((await params).id);

    const place = await PlaceService.getById(id);
    if (!place) {
        notFound();
    }

    return (
        <main className='p-3'>
            <h1 className='text-green-600 text-3xl'>Information : {place.name}</h1>
            <address>
                {place.address.street} <br />
                {place.address.postalCode} {place.address.city} <br />
                {place.address.country}
            </address>

            <Link href='/lieux' className='text-green-400'>Retourner à la liste</Link>
        </main>
    );
}