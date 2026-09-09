import React, { useState } from 'react'
import Layout from '@/src/components/layout'

type socialsType = 'business' | 'art' | 'gamedev' | 'music'
const toggleSocials : socialsType[] = ['business', 'art', 'gamedev', 'music']
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
          <h1 className='text-amaranth text-center font-medium'>Contact Me!</h1>
          <hr className='w-1/2 mb-4 rounded-md text-grape border-2' />

          <div id='socials toggle' className='flex justify-between content-between w-min text-center'>
            {toggleSocials.map((social, index) => {
              const isToggled = social == curTab;

              return <span onClick={() => handleTabChange(social)} key={index}
                className={`mx-2 opacity-75 duration-200 cursor-pointer
                  ${isToggled ? 'text-amaranth font-semibold' : 'text-grape hover:text-amaranth hover:font-semibold hover:opacity-50 hover:mx-4'}`}>
                {handleHeaderName(social)}</span>
            })}
          </div>

          <div id='contact details' className='flex flex-col items-center content-around w-full'>
            {contact('From My Social Medias', [{ linkName: 'Bluesky', link: 'https://bsky.app/profile/donuts4evry1.bsky.social' },
            { linkName: 'Tumblr', link: 'https://donuts4evry1.tumblr.com/ask' },
            { linkName: 'Instagram (Art)', link: 'https://www.instagram.com/donuts4evry1/' }
            ])}
            <p className='my-2' />
            {contact('From My Storefront', [{ linkName: 'Ko-Fi', link: 'https://ko-fi.com/donuts4evry1' }
            ])}
            <p className='my-2' />
            {contact('From Email', [{ linkName: 'gastlyarts32@gmail.com', link: 'mailto:gastlyarts32@gmail.com' }
            ])}

          </div>

          <p className='my-2' />
          <p className='text-soda opacity-75 text-sm'>(I tend to check my email the most!)</p>
        </div>
      }
    />

  )
}

export default Contact