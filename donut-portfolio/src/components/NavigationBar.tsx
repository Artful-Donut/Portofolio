import React from 'react'
import Link  from 'next/link'
import Image from 'next/image'
import mizukurages from '../images/mizukurages.png'


function NavigationBar() {
    const pages = ['home', 'portfolio', 'blog', 'contact']

    return (
        <div className='flex flex-col w-full h-full'>
            <div id='nav image' className='relative w-full h-40'>
                <Image src={mizukurages} 
                fill={true}
                objectFit='cover'
                alt='An illustration of a bloom of Moon Jellyfish' />
            </div>

            <div className=' w-min mx-auto items-center text-grape'>
            {/* Nav image goes here */}
            
            <div id='page names' className='flex justify-center my-2'>
                {pages.map((pageName, index) => (
                <section key={index} className='mx-10 text-2xl
                cursor-pointer hover:opacity-50 hover:px-5 duration-200'>
                    <Link href={`/${pageName == 'home' ? ' ' : pageName}`}>{pageName.charAt(0).toLocaleUpperCase() + pageName.slice(1)}</Link>
                </section>
            ))}
            </div>

            <hr className='mx-auto w-full text-grape border rounded-2xl'/>
        </div>
        </div>
        
    )
}

export default NavigationBar