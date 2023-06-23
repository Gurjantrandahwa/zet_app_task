import "./Brands.scss";
import axis from "../../public/Assets/Brands/Axis.png"
import bjaj from "../../public/Assets/Brands/Bajaj.webp"
import icici from "../../public/Assets/Brands/Icici.webp"
import BOB from "../../public/Assets/Brands/BOB.webp"
import IDFC from "../../public/Assets/Brands/Idfc.webp"
import indus from "../../public/Assets/Brands/IndusInd.webp"
import yesBank from "../../public/Assets/Brands/YesBank.webp"
import standard from "../../public/Assets/Brands/StandardChartered.webp"
import american from "../../public/Assets/Brands/Amex.webp"
import AU from "../../public/Assets/Brands/Aufin.webp"
import Image from "next/image";

export default function Brands() {

    const brandImages = [
        {
            img: axis
        },
        {
            img: bjaj
        },
        {
            img: icici
        },
        {
            img: BOB
        },
        {
            img: IDFC
        },
        {
            img: indus
        },
        {
            img: yesBank
        },
        {
            img: standard
        },
        {
            img: american
        },
        {
            img: AU
        },
    ]
    return <section className={"brand-wrapper"}>
        <h1 className={"title"}>
            Top Brands on ZET
        </h1>
        <p className={"subtitle"}>We are trusted by best brand in the country</p>

        <div className={"brand-images"}>
            {brandImages.map((value, index) => {
                return <Image
                    key={index}
                    src={value.img}
                    alt={"brands"}

                />
            })}
        </div>
    </section>
}