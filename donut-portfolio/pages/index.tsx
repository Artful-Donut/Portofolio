import Link from "next/link";
import Layout from "../src/components/layout";
import Carosel from "../src/components/Carosel";
import { mapCarosel, featured_projects, featured_shop_items, caroselItem } from "../src/library/featured_lists";


export default function Home() {
  const socials: { social: string, url: string }[] = [
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

  function caroselComponent(title: string, list: caroselItem[], link: string, autoScrollSpeed?: number) {
    return (
      <div className="flex flex-col text-center">
        <hr className='text-grape border' />
        <Link href={link}>
          <h1 className='py-2 text-amaranth hover:text-soda hover:opacity-75 duration-200'>{title}</h1>
        </Link>
        <hr className="mx-auto w-3/4 text-rose border-2 border-dotted rounded-2xl" />
        <Carosel caroselItems={list} autoscrollSpeed={autoScrollSpeed}>
          {mapCarosel(list)}
        </Carosel>

        <hr className='text-grape border' />
      </div>
    );
  }

  return (
    <Layout
      infoWidgetBelowContent={
        <div id='socials' className='flex flex-col items-center my-2 mt-4'>
          <h3 className='pb-1 text-grape font-bold text-lg'> Official Socials!</h3>
          {socials.map((social, index) => {
            return (
              <div id='social link' key={index} className='w-full'>
                {index == 0 && <hr className="border-2 rounded-xl text-soda" />}
                <div id='social name' className='m-4 mx-8 text-soda text-center text-md hover:opacity-75 duration-200'>
                  <a href={social.url}>{social.social}</a>
                </div>
                <hr className="border-2 rounded-xl text-soda" />
              </div>

            )
          })}
        </div>
      }

      children={
        <div id='contentPart' className="flex basis-3/4 justify-center">
          <div id='portfolio section' className="flex-col">

            {caroselComponent("Featured Projects", featured_projects, '/portfolio', 4000)}

            {caroselComponent("Featured Shop Items", featured_shop_items, 'https://ko-fi.com/donuts4evry1/commissions', 3000)}

            <div id='blog stuff' className="flex flex-col items-center">
              <h1 className='py-2 text-amaranth text-center'>Recent Blog Posts</h1>
              <hr className="mx-auto w-3/4 text-rose border-2 rounded-2xl" />
              <div id='featured blog post' className="flex justify-center content-center my-3 p-3 w-1/2 rounded-sm border-2 border-soda">
                <Link href='/blog'>
                  <p className="text-rose text-center hover:opacity-50 duration-100">Blogging TBD</p>
                </Link>
              </div>
            </div>
          </div>

        </div>
      }>

    </Layout>



  );
}
