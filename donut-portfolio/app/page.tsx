import Image from "next/image";

export default function Home() {
  return (
    <div className="flex bg-amaranth">
      <div id='infoPart' className="bg-rose h-screen">
        <h1> HAI </h1>
      </div>

      <div id='contentPart' className="bg-cream">
        <h1> BYE </h1>
      </div>
    </div>
  );
}
