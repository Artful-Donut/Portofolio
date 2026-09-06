import Image from "next/image";
import NavigationBar from "../src/components/NavigationBar";
import InfoWidget from "../src/components/InfoWidget";
import Carosel from "../src/components/Carosel";
import { mapCarosel, featured_projects, featured_shop_items, caroselItem } from "../src/library/featured_lists";
import Footer from "../src/components/Footer";

export default function Home() {

  function caroselComponent(title: string, list: caroselItem[], autoScrollSpeed?: number) {
    return (
      <div className="flex flex-col text-center">
        <h1 className='py-2 text-amaranth'>{title}</h1>
        <hr className="mx-auto w-3/4 text-rose border-2 rounded-2xl" />
        <Carosel caroselItems={list} autoscrollSpeed={autoScrollSpeed}>
          {mapCarosel(list)}
        </Carosel>
      </div>
    );
  }

  return (
    <div className="flex-col bg-cream">
      <NavigationBar></NavigationBar>
      <div id='pageContents' className="flex mt-10">
        <div id='infoPart' className="flex-1 justify-start h-screen">
          <InfoWidget />
        </div>

        <div id='contentPart' className="flex-2 justify-self-center">
          <div id='portfolio section' className="flex-col">

            {caroselComponent("Featured Projects", featured_projects, 4000)}

            {caroselComponent("Featured Shop Items", featured_shop_items, 3000)}

            <div id='blog stuff' className="flex flex-col items-center">
              <h1 className='text-amaranth text-center'>Recent Blog Posts</h1>
              <hr className="mx-auto w-3/4 text-rose border-2 rounded-2xl" />
              <div id='featured blog post' className="flex justify-center content-center my-3 p-3 w-1/2 rounded-sm border-2 border-soda">
                <p className="text-rose text-center">Blogging TBD</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
