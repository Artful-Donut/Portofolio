import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import mizukurages from '../images/mizukurages.png'


function NavigationBar() {
    const pages = ['home', 'portfolio', 'blog', 'contact']

    return (
        <div className='flex flex-col w-full h-full'>
            <div id='nav image' className='relative w-full h-40'>
                <Link href='/'>
                    <Image src={mizukurages}
                        fill={true}
                        alt='An illustration of a bloom of Moon Jellyfish'
                        loading='eager'
                        style={{ objectFit: "cover" }} />
                </Link>
            </div>

            <div className='w-min mx-auto items-center text-grape'>
                {/* Nav image goes here */}

                <div id='page names' className='flex justify-center my-2'>
                    {pages.map((pageName, index) => {
                        const usedRef = pageName == 'home' ? ' ' : pageName;
                        const navBarName = pageName == 'contact' ? 'Contact + Socials' : pageName.charAt(0).toLocaleUpperCase() + pageName.slice(1);
                        return ((
                            <section key={index} className='flex w-min content-b mx-10 text-2xl text-center text-nowrap
                                cursor-pointer hover:opacity-50 hover:px-5 duration-600'>
                                <Link href={`/${usedRef}`}>{navBarName}</Link>
                            </section>
                        ))
                    })}
                </div>

                <hr className='mx-auto w-full text-grape border rounded-2xl' />
            </div>
        </div>

    )
}

export default NavigationBar