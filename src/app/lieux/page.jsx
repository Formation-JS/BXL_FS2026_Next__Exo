import PlaceList, { PlaceListSkeleton } from '@/components/Place/PlaceList';
import Rating from '@/components/Rating/Rating';
import lieux from '@/data/lieux-events.json';
import Link from 'next/link';
import { Suspense } from 'react';

export default function PlaceListPage() {

  return (
    <main className='p-3'>
      <h1 className='text-green-600 text-3xl'>Liste des lieux</h1>
      <Suspense fallback={<PlaceListSkeleton />}>
        <PlaceList page={1} nbElem={10} />
      </Suspense>
    </main>
  );
}
