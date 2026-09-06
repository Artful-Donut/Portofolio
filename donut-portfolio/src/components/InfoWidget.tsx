import React from 'react'

function InfoWidget() {
    return (
        <div className='flex-col ml-5 sm:w-xsm md:w-50'>
            <div id='name' className='p-2 m-2 mb-6 w-3/4 rounded-sm bg-rose shadow-md shadow-amaranth'>
                <h2 className='text-amaranth text-xl font-medium'>Donuts4evry1</h2>
            </div>
            <div id='about' className='p-4 m-2 rounded-sm bg-rose shadow-md shadow-amaranth'>
                <section id='qualifications' className='mb-2'>
                    <p className='font-bold text-amaranth'>
                        Digital Artist | Graphic Designer | Game Developer | Streamer</p>
                </section>
                <section className='mb-2'>
                    <p className='text-amaranth'>
                        Programmer by trade. People know me for jellyfish, though.
                    </p>
                </section>
                <section className=''>
                    <p className=' text-amaranth'>
                        Sometimes I draw and make games. I hope to get lots of people to make their own games, too!
                    </p>
                </section>
                {/**
                 <section className=''>
                    <p className=' text-amaranth'>
                        Commission me on my Ko-Fi!!
                    </p>
                </section>
                 */}

            </div>
        </div>
    )
}

export default InfoWidget