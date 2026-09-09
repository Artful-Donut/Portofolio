import React, { useState } from 'react'
import Layout from '@/src/components/layout'

type socialsType = 'business' | 'art' | 'gamedev' | 'music';
const toggleSocials: socialsType[] = ['business', 'art', 'gamedev', 'music'];

const socialLinks: { social: string, url: string }[] = [
  { social: "Ko-Fi", url: 'https://ko-fi.com/donuts4evry1' },
  { social: 'Bluesky', url: 'https://bsky.app/profile/donuts4evry1.bsky.social' },
  { social: 'Tumblr', url: 'https://donuts4evry1.tumblr.com/tagged/my art' },
  { social: 'Twitch', url: 'https://www.twitch.tv/donuts4evry1' },
  { social: 'Youtube', url: 'https://www.youtube.com/@donuts4evry1' },
  { social: 'Itch.io', url: 'https://donuts4evry1.itch.io/' },
  { social: 'Instagram', url: 'https://www.instagram.com/donuts4evry1/' },
  { social: 'Instagram (Piano)', url: 'https://www.instagram.com/piano_timbit/' },
  { social: 'Twitter', url: 'https://twitter.com/donuts4evry1' },
]

function Contact() {
  const [curTab, setTab] = useState<socialsType>('business')

  const contact = (type: string, links: { linkName: string, link: string }[]) => {
    return (
      <div className='flex flex-col text-center text-grape'>
        <p className='mr-4 text-xl font-medium'>{type}: </p>
        {links.map((link) => {
          return (
            <a className='mr-2 text-lg text-rose hover:opacity-50 duration-100' href={link.link}> {link.linkName}</a>
          )
        })}
      </div>
    )
  }
  const handleTabChange = (newTab: socialsType) => {
    setTab((prevTab) => prevTab != newTab ? newTab : prevTab);
  }
  const handleHeaderName = (tab: socialsType) => {
    switch (tab) {
      case 'art':
        return 'Art Socials';
      case 'gamedev':
        return 'Game Dev Socials';
      case 'music':
        return 'Music Socials';
      default:
        return 'Contact Me!';
    }
  }


  return (
    <Layout
      infoWidgetBelowContent={<></>}
      children={
        <div className='flex flex-col w-full items-center'>
          <h1 className='text-amaranth text-center font-medium duration-200'>{handleHeaderName(curTab)}</h1>
          <hr className='w-1/2 mb-4 rounded-md text-grape border-2' />

          <div id='socials toggle' className='flex flex-row justify-between content-between lg:w-1/2 w-3/4 mb-8 text-center'>
            {toggleSocials.map((social, index) => {
              const isToggled = social == curTab;

              return <span onClick={() => handleTabChange(social)} key={index}
                className={`mx-2 opacity-75 duration-200 cursor-pointer
                  ${isToggled ? 'text-amaranth font-semibold' : 'text-grape hover:text-amaranth hover:font-semibold hover:opacity-50 hover:mx-4'}`}>
                {handleHeaderName(social)}</span>
            })}
          </div>
          <div id='contact details' className='flex flex-col items-center content-around w-full'>
            {curTab == 'business' &&
              <>
                {contact('From Email', [{ linkName: 'gastlyarts32@gmail.com', link: 'mailto:gastlyarts32@gmail.com' }
                ])}
                <p className='my-2' />
                {contact('From My Social Medias', [{ linkName: 'Bluesky', link: 'https://bsky.app/profile/donuts4evry1.bsky.social' },
                { linkName: 'Tumblr', link: 'https://donuts4evry1.tumblr.com/ask' },
                { linkName: 'Instagram (Art)', link: 'https://www.instagram.com/donuts4evry1/' }
                ])}
                <p className='my-2' />
                {contact('My Linktree', [{ linkName: 'Linktree (Official)', link: 'linktr.ee/donuts4evry1' }
                ])}
                <p className='my-2' />

                <p className='text-soda opacity-75 text-center text-sm'>(I tend to check my email the most!)</p>
              </>
            }

            {curTab == 'art' &&
              <>
                {contact('Professional Art Socials', [
                  { linkName: 'Blogger', link: 'https://donuts4evry1.blogspot.com/search/label/art' },
                  { linkName: 'Ko-Fi (Gallery)', link: 'https://ko-fi.com/donuts4evry1/gallery' },
                  { linkName: 'Tumblr (Former Professional)', link: 'https://gastlyarts.tumblr.com/tagged/digital art taggle' }
                ])}
                <p className='my-2' />
                {contact('General Art Socials', [
                  { linkName: 'Tumblr (Personal)', link: 'https://donuts4evry1.tumblr.com/tagged/my art' },
                  { linkName: 'Bluesky (Personal)', link: 'https://bsky.app/profile/donuts4evry1.bsky.social' },
                  { linkName: 'Instagram', link: 'https://www.instagram.com/donuts4evry1/' },
                  { linkName: 'Youtube (Fun/Personal)', link: 'https://www.youtube.com/@notgastlyarts2071' }
                ])}
                <p className='my-2' />
                {contact('Fandom', [{ linkName: 'The Jellydex (Mostly jellyfish, not art)', link: 'https://the-jellydex.tumblr.com/' },
                { linkName: 'Ask Sanyou Trio', link: 'https://ask-sanyou-trio.tumblr.com/' },
                { linkName: 'Ask Colress', link: 'https://askcolress.tumblr.com/' },
                { linkName: 'Ask Gastly (Pokemon OC)', link: 'https://ask-gastly.tumblr.com/' }
                ])}
                <p className='my-2' />

                <p className='text-soda opacity-75 text-center text-sm'>(My Fandom Blogs are mostly abandoned, but they're nice to look at and certainly a labour of love!)</p>
              </>
            }

            {curTab == 'gamedev' &&
              <>
                {contact('Game StoreFront', [
                  { linkName: 'Itch.io', link: 'https://donuts4evry1.itch.io' }
                ])}
                <p className='my-2' />
                {contact('Game Development Updates', [
                  { linkName: 'Tumblr (Game Development)', link: 'https://jellydonut-studios.tumblr.com/tagged/my art' },
                  { linkName: 'Bluesky (Personal)', link: 'https://bsky.app/profile/donuts4evry1.bsky.social' },
                  { linkName: 'Twitter', link: 'https://twitter.com/donuts4evry1' },
                  { linkName: 'TikTok', link: 'https://www.tiktok.com/@donuts4evry1' }
                ])}
                <p className='my-2' />
                {contact('Game Streaming', [
                  { linkName: 'Twitch', link: 'https://twitch.tv/donuts4evry1' },
                  { linkName: 'Youtube', link: 'https://youtube.com/@donuts4evry' }
                ])}
                <p className='my-2' />
                <p className='text-soda opacity-75 text-center text-sm'>(Note: some pages are mostly blank because I didn't want anyone else to steal the URL)</p>
              </>
            }

            {curTab == 'music' &&
              <>
                {contact('Piano', [
                  { linkName: 'Instagram (Music)', link: 'https://www.instagram.com/piano_timbit/' }
                ])}
              </>
            }

          </div>

        </div>
      }
    />

  )
}

export default Contact