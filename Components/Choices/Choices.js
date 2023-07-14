import React from "react";
import "./Choices.scss";
import Image from "next/image";
import zBg from "../../public/Assets/bgImg.webp";
import whyUsHero from "../../public/Assets/whyUsHero.webp";
import choice1 from "../../public/Assets/choices/choice1.svg";
import choice2 from "../../public/Assets/choices/choice2.svg";
import choice3 from "../../public/Assets/choices/choice3.svg";
import choice4 from "../../public/Assets/choices/choice4.svg";
import choice5 from "../../public/Assets/choices/choice5.svg";
import choice6 from "../../public/Assets/choices/choice6.svg";


export default function Choices() {
    const choiceCards = [
        {
            image: choice1,
            header: "Zero Investment",
            description: "Build your business without any investment"
        },
        {
            image: choice2,
            header: "Quick Payout",
            description: "Receive payout directly in your bank account in shortest time"
        },
        {
            image: choice3,
            header: "Limitless Earnings",
            description: "No cap on your earnings & growth opportunity"
        },
        {
            image: choice4,
            header: "Training & Upskilling",
            description: "Get trained by finance and sales experts for free"
        },
        {
            image: choice5,
            header: "Customer Support",
            description: "Access tools and content to build relationship"
        },
        {
            image: choice6,
            header: "Zero Investment",
            description: "Trustworthy and high-rated financial products & categories to choose from"
        },

    ]

    return <div className="choice-container">
        <div className="z-image-wrapper">
            <Image src={zBg} alt={"background"} className={"z-bg"}/>
            <div className={"z-image"}>
                <p>Why is <span>ZET</span> the right choice for you?</p>
                <Image src={whyUsHero} alt="z-image" className={"z-image-img"}/>
            </div>
        </div>
        <div className={"choice-cards"}>
            {
                choiceCards.map((value, index) => {
                    return <div key={index} className={"single-choice-card"}>
                        <Image src={value.image} alt={value.header}/>
                        <h5>{value.header}</h5>
                        <p>{value.description}</p>
                    </div>
                })
            }
        </div>

    </div>
}
