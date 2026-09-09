import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import InfoWidget from "../components/InfoWidget";

export default function Layout({ children, infoWidgetBelowContent }) {
    return (
        <div className="flex flex-col min-h-dvh bg-cream">
            <NavigationBar />
            <div id='pageContents' className="flex flex-col flex-1 lg:items-baseline items-center lg:flex-row lg:mt-10">
                <div id='infoPart' className="flex flex-col lg:basis-1/4 items-center-safe ml-5 lg:w-1/4 w-min lg:sticky lg:top-10">

                    <div id='info small screen wrap' className="lg:block lg:relative w-min absolute top-0">
                        <InfoWidget />
                    </div>
                    {infoWidgetBelowContent}


                </div>

                <div id='contentPart' className="flex basis-3/4 justify-center">
                    {children}
                </div>
            </div>
            <div className="flex justify-center relative bottom-0">
                <Footer />
            </div>
        </div>
    )
}