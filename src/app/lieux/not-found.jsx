import Link from 'next/link';

export default function NotFoundLieuxPage() {

    return (
        <main className='p-3'>
            <h1 className='text-green-600 text-3xl'>Le lieu n'a pas été trouvé !</h1>
            
            <Link href='/lieux' className='text-green-400'>Retourner à la liste des lieux</Link>
        </main>
    );
}