'use client';

import { sendContactAction } from '@/actions/contact.action';
import { useActionState } from 'react';

const initialState = {
    data: null,
    error: null
};

export default function ContactForm() {

    const [state, handleSubmit, isPending] = useActionState(sendContactAction, initialState);

    return (
        <form className='flex flex-col gap-2' action={handleSubmit}>
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
    );
}