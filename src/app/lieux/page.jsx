import PlaceList, { PlaceListSkeleton } from '@/components/Place/PlaceList';
import PlaceService from '@/services/place.service';
import CustomLink from '@/ui/CustomLink/CustomLink';
import Link from 'next/link';
import { Suspense } from 'react';

export default async function PlaceListPage({ searchParams }) {

  const { page, nbElem } = await searchParams;

  const pageValue = (!isNaN(page)) ? parseInt(page) : 1;
  const nbElemValue = (!isNaN(nbElem)) ? parseInt(nbElem) : 5;

  const nextPage = await PlaceService.haveNextPage(pageValue, nbElemValue);

  return (
    <main className='p-3'>
      <h1 className='text-green-600 text-3xl'>Liste des lieux</h1>
      <Suspense fallback={<PlaceListSkeleton />}>
        <PlaceList page={pageValue} nbElem={nbElemValue} />
        <div className='flex flex-col gap-1'>
          <CustomLink href={`/lieux?page=${pageValue - 1}&nbElem=${nbElemValue}`} disable={page <= 1}>
            Page précédente
          </CustomLink>
          <CustomLink href={`/lieux?page=${pageValue + 1}&nbElem=${nbElemValue}`} disable={!nextPage}>
            Page suivante
          </CustomLink>
        </div>
      </Suspense>
    </main>
  );
}
