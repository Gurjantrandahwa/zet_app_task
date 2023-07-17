import Image from "next/image";
import about from "../../public/Assets/about-bg.webp";

export default function About() {
    return <div
        className={"w-full h-[90vh] flex justify-center mx-auto items-center overflow-x-hidden relative"}>
        <Image
            className={"absolute top-0 left-0 z-[-1] bg-center"}
            src={about}
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            quality={100}
        />
        <div className={"container text-center max-w-lg px-2 text-white "}>
            <h1 className={"text-4xl font-semibold mb-2"}>
                Our Mission
            </h1>
            <p className={"mb-2 text-[14px]"}>
                Enabling financial inclusion for the next billion Indians<br/>
                & making their Zindagi Set. Building a platform that enables you to sell
                financial products & earn up to Rs. 1 lakh every month.
            </p>
            <p className={"uppercase font-bold text-[15px] tracking-[3px]"}>
                EARN BETTER. LIVE BETTER.
            </p>
        </div>


    </div>
}