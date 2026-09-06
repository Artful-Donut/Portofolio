import React from 'react'
import Link  from 'next/link'

function NavigationBar() {
    const pages = ['home', 'portfolio', 'blog', 'contact']

    return (
        <div className='flex flex-col w-min mx-auto items-center text-grape'>
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
    )
}

export default NavigationBar