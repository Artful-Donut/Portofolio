import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { GiHamburgerMenu } from "react-icons/gi";

import mizukurages from '../images/mizukurages.png'

// conditionally render based on viewport size
// https://stackoverflow.com/questions/46586165/conditionally-render-based-on-viewport-size

function NavigationBar() {
    const pages = ['home', 'portfolio', 'blog', 'contact']
    const [showNav, setShowNav] = useState(false);

    return (
        <div className='flex flex-col w-screen h-full'>
            <div id='nav image' className='relative w-full h-40'>
                <Link href='/'>
                    <Image src={mizukurages}
                        fill={true}
                        alt='An illustration of a bloom of Moon Jellyfish'
                        loading='eager'
                        style={{ objectFit: "cover" }} />
                </Link>
            </div>

            <div className='md:w-min w-screen mx-auto justify-center md:items-end text-grape'>
                {/* Nav image goes here */}
                <div id='collapsable nav bar' onClick={() => setShowNav((prev) => !prev)}className='flex flex-col items-center md:hidden'>
                    <GiHamburgerMenu className='text-grape text-4xl border-grape border-b-2 border-t-2 w-full
                                                    cursor-pointer hover:text-cream hover:bg-soda duration-200'/>
                    <div id='collapsable nav options'>
                        {showNav && pages.map((pageName, index) => {
                            const usedRef = pageName == 'home' ? ' ' : pageName;
                            const navBarName = pageName == 'contact' ? 'Contact + Socials' : pageName.charAt(0).toLocaleUpperCase() + pageName.slice(1);
                            return ((
                                <section key={index} className='py-2 w-screen text-xl text-center border-b
                                cursor-pointer hover:opacity-50 hover:px-5 duration-600'>
                                    <Link href={`/${usedRef}`} onClick={() => setShowNav(false)}>{navBarName}</Link>
                                </section>
                            ))
                        })}
                    </div>
                </div>

                <div id='page names' className='md:flex lg:flex-nowrap justify-center my-2 hidden'>
                    {pages.map((pageName, index) => {
                        const usedRef = pageName == 'home' ? ' ' : pageName;
                        const navBarName = pageName == 'contact' ? 'Contact + Socials' : pageName.charAt(0).toLocaleUpperCase() + pageName.slice(1);
                        return ((
                            <section key={index} className='flex w-min justify-between mx-10 text-2xl text-center text-nowrap
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