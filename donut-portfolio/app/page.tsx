import Image from "next/image";
import NavigationBar from "./src/components/NavigationBar";
import InfoWidget from "./src/components/InfoWidget";
import Carosel from "./src/components/Carosel";

export default function Home() {
  return (
    <div className="flex-col bg-cream">
      <NavigationBar></NavigationBar>
      <div id='pageContents' className="flex justify-items-start mt-10">
        <div id='infoPart' className="flex-1 justify-start h-screen">
          <InfoWidget/>
        </div>

        <div id='contentPart' className="flex-2 justify-start">
          <h1 className='text-amaranth text'> BYE </h1>
          <Carosel caroselItems={[1, 2, 3]} autoscrollSpeed={3000}/>
        </div>
      </div>

    </div>
  );
}
