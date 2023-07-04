import "./zetEffect.scss"
import zetImage from "../../public/Assets/zetImage.webp"
import Image from "next/image";
export default function ZetEffects() {
    return<div className={"zet-bg "}>
        <div className={"zet-bg-transparent"}>
            <Image
                src={zetImage}
            />
            <div className={"zet-text"}>
                <h2>The Zet effect</h2>

            </div>
        </div>


    </div>
}