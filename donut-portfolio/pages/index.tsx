import Link from "next/link";
import Layout from "../src/components/layout";
import Carosel from "../src/components/Carosel";
import { mapCarosel, featured_projects, featured_shop_items, caroselItem } from "../src/library/featured_lists";


export default function Home() {

  function caroselComponent(title: string, list: caroselItem[], link: string, autoScrollSpeed?: number) {
    return (
      <div className="flex flex-col text-center ">
        <hr className='text-grape border' />
        <Link href={link}>
          <h1 className='py-2 text-amaranth hover:text-soda hover:opacity-75 duration-200'>{title}</h1>
        </Link>
        <hr className="mx-auto w-3/4 text-rose border-2 border-dotted rounded-2xl" />
        <div id='normal size' className='md:hidden'>
          <Carosel caroselItems={list} autoscrollSpeed={autoScrollSpeed} width={300}>
            {mapCarosel(list, 300)}
          </Carosel>
        </div>
        <div id="small screen size" className='md:block hidden'>
          <Carosel caroselItems={list} autoscrollSpeed={autoScrollSpeed}>
            {mapCarosel(list)}
          </Carosel>
        </div>

        <hr className='text-grape border' />
      </div>
    );
  }

  return (
    <Layout
      infoWidgetBelowContent={
        <></>
      }

      children={
        <div id='contentPart' className="flex basis-3/4 justify-center">
          <div id='portfolio section' className="flex-col">

            {caroselComponent("Featured Projects", featured_projects, '/portfolio', 4000)}

            {caroselComponent("Featured Shop Items", featured_shop_items, 'https://ko-fi.com/donuts4evry1/commissions', 3000)}

            <div id='blog stuff' className="flex flex-col items-center">
              <h1 className='py-2 text-amaranth text-center'>Recent Blog Posts</h1>
              <hr className="mx-auto w-3/4 text-rose border-2 border-dotted rounded-2xl" />
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
