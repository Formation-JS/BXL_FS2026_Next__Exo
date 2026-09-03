import ContactForm from '@/components/Contact/ContactForm';

export default function AboutPage() {
    return (
        <main className='p-3'>
            <h1 className='text-green-600 text-3xl'>A propos</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, commodi maiores. Non voluptates eaque alias quia iure optio. Error iure amet sint quaerat perferendis ullam perspiciatis explicabo recusandae asperiores quibusdam.</p>

            <h2 className='text-yellow-400 mt-3 mb-2 text-2xl'>Formulaire de contact</h2>
            <ContactForm />
        </main>
    );
}
