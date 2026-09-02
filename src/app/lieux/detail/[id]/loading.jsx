export default async function PlaceLoadingPage() {

    return (
        <main className='p-3'>
            <h1 className='text-green-600 text-3xl'>Chargement du lieux en cours...</h1>

            <object type="image/svg+xml" data="/place-loading.svg">loading-animation</object>
        </main>
    );
}