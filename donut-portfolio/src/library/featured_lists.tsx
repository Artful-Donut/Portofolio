import React from 'react';

export interface caroselItem {
    title: string,
    image?: string,
    imageAlt?: string,
    imageRedirect?: string,
    description: string
}

export function mapCarosel(items : caroselItem[], width = 500) {

    return items.map((item, index) => {
        return (
            <div key={index} className='flex-col items-center justify-center text-center whitespace-pre-wrap'
                style={{ width: width + 'px' }}>
                <div id='titleSpot' className=''>
                    <h2 className='text-2xl'>{item.title}</h2>
                </div>
                {
                    item.imageRedirect && item.image ?
                        <a href={item.imageRedirect}>
                            <img src={item.image} alt={item.imageAlt} />
                        </a>
                        :
                        item.image &&
                        <img src={item.image} alt={item.imageAlt} />
                }
                <p>{item.description}</p>
            </div>
        );
    });
}

export const featured_projects: caroselItem[] = [
    {
        title: "The Shinigami that is also a Jellyfish",
        description: "A simulation visual novel where you pretend to be a miracle doctor with the help of a shinigami. Who also happens to be a jellyfish.\nCurrently in development!"
    },
    {
        title: "Mahou Learning",
        description: "A Japanese Flashcard app with SRS and a Magical Girl Pet Simulator!\nAvailable on Android for Closed Testing! Contact me to get access."
    },
    {
        title: "Bedrot",
        description: "You've been feeling mentally drained for weeks now. Luckily, you've been assigned a fairy to make you feel better!\nA renpy game, available on Itch.io!"
    },

]

export const featured_shop_items: caroselItem[] = [
    {
        title: "Small Doodle",
        description: "$8 USD. I doodle a small and cute chibi character for you. See my Ko-Fi for details!"
    },
    {
        title: "PNGTuber Models",
        description: "$20-45 USD. I can make one from scratch or rig an existing model for you! See my Ko-Fi for details!"
    },
    {
        title: "Stream Overlays",
        description: "$30 USD. Let me make a custom overlay for your stream! See my Ko-Fi for details!"
    }
]