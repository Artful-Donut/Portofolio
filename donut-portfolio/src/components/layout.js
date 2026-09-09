import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import InfoWidget from "../components/InfoWidget";

export default function Layout({ children, infoWidgetBelowContent }) {
    return (
        <div className="flex flex-col min-h-screen bg-cream static">
            <NavigationBar />
            <div id='pageContents' className="relative top-0 flex flex-1 mt-10">
                <div id='infoPart' className="flex flex-col basis-1/4 items-center-safe ml-5 w-1/2 relative">
                    <div id='infoPart Sticky' className="sticky top-24">
                        <InfoWidget />
                        {infoWidgetBelowContent}
                    </div>

                </div>

                <div id='contentPart' className="flex basis-3/4 justify-center">
                    {children}
                </div>
            </div>
           <div className="relative bottom-0 left-0 right-0">
            <Footer />
           </div>
        </div>
    )
}