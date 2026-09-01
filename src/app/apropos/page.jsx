export default function AboutPage() {
    return (
        <main className='p-3'>
            <h1 className='text-green-600 text-3xl'>A propos</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, commodi maiores. Non voluptates eaque alias quia iure optio. Error iure amet sint quaerat perferendis ullam perspiciatis explicabo recusandae asperiores quibusdam.</p>

            <h2 className='text-yellow-400 mt-3 mb-2 text-2xl'>Formulaire de contact</h2>
            <form className='flex flex-col gap-2'>
                <div className='flex flex-row gap-1'>
                    <label htmlFor="input-email">Email</label>
                    <input id='input-email' name='email' type="email"
                        className='border border-green-600 p-0.5' />
                </div>
                <div className='flex flex-row gap-1'>
                    <label htmlFor="input-content">Message</label>
                    <textarea id='input-content' name='content' 
                        className='border border-green-600 p-0.5 resize-none' />
                </div>
                <div>
                    <button type="submit" className='bg-green-600 text-yellow-400 rounded-md px-2 py-1'>Envoyer</button>
                </div>
            </form>
        </main>
    );
}
