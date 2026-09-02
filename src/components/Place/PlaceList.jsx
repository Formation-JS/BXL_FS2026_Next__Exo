import PlaceService from '@/services/place.service';
import Link from 'next/link';
import Rating from '../Rating/Rating';


export default async function PlaceList({ page, nbElem }) {

    const places = await PlaceService.getByPagination(page, nbElem);

    return (
        <section className='flex flex-col gap-2'>
            {places.map(({ id, name, city, country, rating }) => (
                <article key={id}>
                    <p>{name} - {city} ({country})</p>
                    <Rating value={rating} />
                    <Link href={`/lieux/detail/${id}`} className='text-green-400'>Plus d'information sur ce lieu</Link>
                </article>
            ))}
        </section>
    );
}

export async function PlaceListSkeleton() {
    return (
        <section className='flex flex-col gap-2'>
            Chargement en cours ...
        </section>
    )
}