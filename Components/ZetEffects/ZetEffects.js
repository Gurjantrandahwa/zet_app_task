"use client"

import React from 'react';
import "./zetEffect.scss";
import Image from "next/image";
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';

import zetImage from "../../public/Assets/zetImage.webp";

SwiperCore.use([Autoplay]);

const text = [
    { sliderText: <>Invest in your dreams, plan for tomorrow, and enjoy the peace of mind that comes with a <span>secure financial future</span></>},
    { sliderText: <><span>Wealth management redefined - </span> combining cutting-edge technology with expert advice to optimize your financial journey</>},
    { sliderText: <>Experience the <span>freedom of financial security,</span> with our tailored solutions designed to meet your unique needs and aspirations.</>},
]

const ZetEffects = () => {
    return   <div className="zet-bg">
        <div className="zet-bg-transparent">
            <Image src={zetImage} alt="Zet" />
            <div className="zet-text">
                <h2>The Effect</h2>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={0}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                >
                    {text.map((value, index) => (
                        <SwiperSlide key={index}>
                            <h3>{value.sliderText}</h3>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    </div>
}

export default ZetEffects;
