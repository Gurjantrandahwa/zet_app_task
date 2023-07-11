"use client"

import React from 'react';
import "./zetEffect.scss";
import zetImage from "../../public/Assets/zetImage.webp";
import Image from "next/image";
import ProgressBarSlider from "../ProgressbarSlider/ProgressBarSlider";

const ZetEffects = () => {


    return<>
        <div className="zet-bg">
            <div className="zet-bg-transparent">
                <Image src={zetImage}/>
                <div className="zet-text">
                    <h2>The Effect</h2>
                </div>
            </div>

        </div>
        <ProgressBarSlider/>
    </>
}

export default ZetEffects;
