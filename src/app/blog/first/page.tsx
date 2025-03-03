import Image from 'next/image';
import brayo from '@/app/brayo.jpg'

export default function FirstBlog() {
    return (
        <div className='p-8'>
            <h1>First Blog Post</h1>
            <Image
            src={brayo} 
            alt="Brayo" 
            width={500} 
            height={500} 
            className='rounded-full'
            />
        </div>
    )

}