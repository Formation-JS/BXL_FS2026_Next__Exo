import Link from 'next/link';

export default function NotFoundPage() {

    return (
        <main className='p-3'>
            <h1 className='text-green-600 text-3xl'>La page n'existe pas !</h1>
            
            <Link href='/' className='text-green-400'>Retourner à l'accueil</Link>
        </main>
    );
}