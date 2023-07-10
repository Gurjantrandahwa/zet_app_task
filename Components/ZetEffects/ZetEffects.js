"use client"

import React from 'react';
import "./zetEffect.scss";
import zetImage from "../../public/Assets/zetImage.webp";
import Image from "next/image";

const ZetEffects = () => {
    const slides = [
        'https://i.pinimg.com/564x/20/81/b1/2081b11cbc9009d885d1ee57b49e7240.jpg',
        'https://i.pinimg.com/564x/20/81/b1/2081b11cbc9009d885d1ee57b49e7240.jpg',
        'https://i.pinimg.com/564x/20/81/b1/2081b11cbc9009d885d1ee57b49e7240.jpg',
    ];

    return <div className="zet-bg">
        <div className="zet-bg-transparent">
            <Image src={zetImage}/>
            <div className="zet-text">
                <h2>The effect</h2>


            </div>
        </div>
    </div>
}

export default ZetEffects;
