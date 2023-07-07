"use client"
import React from 'react';
import "./Brands.scss";
import Image from "next/image";
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';

import axis from "../../public/Assets/Brands/Axis.png";
import bjaj from "../../public/Assets/Brands/Bajaj.webp";
import icici from "../../public/Assets/Brands/Icici.webp";
import BOB from "../../public/Assets/Brands/BOB.webp";
import IDFC from "../../public/Assets/Brands/Idfc.webp";
import indus from "../../public/Assets/Brands/IndusInd.webp";
import yesBank from "../../public/Assets/Brands/YesBank.webp";
import standard from "../../public/Assets/Brands/StandardChartered.webp";
import american from "../../public/Assets/Brands/Amex.webp";
import AU from "../../public/Assets/Brands/Aufin.webp";

SwiperCore.use([Autoplay]);

const Brands = () => {
    const brandImages = [
        axis,
        bjaj,
        icici,
        BOB,
        IDFC,
        indus,
        yesBank,
        standard,
        american,
        AU,
    ]

    return  <section className="brand-wrapper">
        <h1 className="title">Top Brands</h1>
        <p className="subtitle">We are trusted by the best brands in the country</p>

        <div className="brand-images">
            <Swiper
                slidesPerView={5}
                spaceBetween={40}
                autoplay={{ delay: 2000 }}
                className="brand-slider"
            >
                {brandImages.map((img, index) => (
                    <SwiperSlide key={index}>
                        <Image src={img} alt="brands" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </section>
};

export default Brands;
