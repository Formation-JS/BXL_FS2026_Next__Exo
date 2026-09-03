import Link from 'next/link';

export default function CustomLink({href, disable, children}) {

    if(disable) {
        return <span className='text-gray-300 select-none'>{children}</span>
    }

    return (
        <Link href={href} className='text-amber-500 select-none'>{children}</Link>
    )
}