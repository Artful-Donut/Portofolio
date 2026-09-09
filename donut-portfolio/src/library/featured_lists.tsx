import React from 'react';

export interface caroselItem {
    title: string,
    image?: string,
    imageAlt?: string,
    imageRedirect?: string,
    description: string
}

export function mapCarosel(items: caroselItem[], width = 500) {

    return items.map((item, index) => {
        return (
            <div key={index} className={`${'flex-col items-center justify-center text-center whitespace-pre-wrap m-auto duration-300 hover:opacity-90'}`}
                style={{ width: width + 'px' }}>
                <div id='titleSpot' className=''>
                    <h2 className='text-2xl font-medium'>{item.title}</h2>
                </div>
                <div id='image part' className='flex justify-center items-center max-w-[80%] h-40 m-auto my-1 object-contain'>
                    {
                        item.imageRedirect && item.image ?
                            <a href={item.imageRedirect} className='flex items-center justify-center w-full h-full object-contain rounded-xl hover:opacity-50 duration-200'>
                                <img src={item.image} alt={item.imageAlt}  className='max-w-full max-h-full object-contain rounded-xl'/>
                            </a>
                            :
                            item.image &&
                            <img src={item.image} alt={item.imageAlt} className='max-w-full max-h-full object-contain rounded-xl' />
                    }
                </div>
                <p>{item.description}</p>
            </div>
        );
    });
}

export const featured_projects: caroselItem[] = [
    {
        title: "The Shinigami that is also a Jellyfish",
        image: "https://img.itch.zone/aW1nLzI5ODY4MDA0LnBuZw==/original/CpMR6t.png",
        imageAlt: "The Banner Image for the game. It features Shinigami-kun on the left and Shinki on the right, with a single candle illuminating the image in the middle.",
        imageRedirect: "https://donuts4evry1.itch.io/the-shinigami-that-is-also-a-jellyfish",
        description: "A simulation visual novel where you pretend to be a miracle doctor with the help of a shinigami. Who also happens to be a jellyfish.\nCurrently in development!"
    },
    {
        title: "Mahou Learning",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi41mdZ11ZPqoO7vNOTUH2NyKOvnpqygJwO9zgRyr6LPBSxMx00OEeMEOeF5gHkbgkszNrelyV8tYmB-3W_MCvLT_X7Ar7mrrOoZ1GhB2iM7hWmmYGKx2JhqDQICrcT_oij6yzsz8V3TMxgmwnt_1pGTIyVlovvKrrMbNhfWIpVKnsEexRl-9q5lsW8P8k/w320-h320/mahou%20learning%20icon.png",
        imageRedirect: 'mahou-learning.tumblr.com',
        description: "A Japanese Flashcard app with SRS and a Magical Girl Pet Simulator!\nAvailable on Android for Closed Testing! Contact me to get access."
    },
    {
        title: "Bedrot",
        image: 'https://img.itch.zone/aW1nLzE4MDk3NTk5LnBuZw==/315x250%23c/O290Jh.png',
        imageRedirect: "https://donuts4evry1.itch.io/bedrot",
        description: "You've been feeling mentally drained for weeks now. Luckily, you've been assigned a fairy to make you feel better!\nA renpy game, available on Itch.io!"
    },

]

export const featured_shop_items: caroselItem[] = [
    {
        title: "Small Doodle",
        image: 'https://storage.ko-fi.com/cdn/useruploads/display/5d59a043-4a3e-4e0d-a73c-e0e39666e62d_siriusgummybear.jpg',
        imageAlt: 'A white haired, yellow-eyed boy with horns and wings in a chibi style. An example of my small items commission',
        imageRedirect: 'https://ko-fi.com/c/168ea221d8',
        description: "$8 USD. I doodle a small and cute chibi character for you. See my Ko-Fi for details!"
    },
    {
        title: "PNGTuber Models",
        image: 'https://storage.ko-fi.com/cdn/useruploads/display/9e0a5d5f-17ea-46f5-9a2c-2360d189f1b1_moonblush.png',
        imageAlt: 'A moon jellyfish pngtuber',
        description: "$20-45 USD. I can make one from scratch or rig an existing model for you! Available on my Ko-Fi soon!"
    },
    {
        title: "Stream Overlays",
        image: 'https://static-cdn.jtvnw.net/jtv_user_pictures/5330dbb7-b578-4580-9aeb-ec4a1afddb2f-channel_offline_image-1920x1080.png',
        imageAlt: 'My offline image for twitch',
        description: "$30 USD. Let me make a custom overlay for your stream! Available on my Ko-Fi soon!"
    }
]