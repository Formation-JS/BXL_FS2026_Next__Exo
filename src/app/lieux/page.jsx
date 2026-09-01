import Rating from '@/components/Rating/Rating';
import lieux from '@/data/lieux-events.json';
import Link from 'next/link';

export default function LocationListPage() {
  return (
    <main className='p-3'>
      <h1 className='text-green-600 text-3xl'>Liste des lieux</h1>
      <section className='flex flex-col gap-2'>
      {lieux.map(({ id, name, address, averageRating }) => (
        <article key={id}>
          <p>{name} - {address.city} ({address.country})</p>
          <Rating value={averageRating} />
          <Link href={`/lieux/detail/${id}`} className='text-green-400'>Plus d'information sur ce lieu</Link>
        </article>
      ))}
      </section>

    </main>
  );
}
