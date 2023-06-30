import HeroSection from "../Components/HeroSection/HeroSection";
import Brands from "../Components/Brands/Brands";
import ProductCards from "../Components/ProductCards/ProductCards";
import ZetEffects from "../Components/ZetEffects/ZetEffects";

export default function Home() {
    return <div>
        <div className={"container xl mx-auto xl:px-36 2xl:px-4"}>
            <HeroSection/>
            <Brands/>
        </div>

        <ProductCards/>
        <ZetEffects/>
    </div>
}
