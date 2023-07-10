"use client"
import React, { useState, useEffect } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import "./progress.scss"

const ProgressBarSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [progress, setProgress] = useState(0);

    const handleSlideChange = (index) => {
        setCurrentIndex(index);
        setProgress(0);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => prevProgress + 1);
        }, 100);

        return () => {
            clearInterval(timer);
        };
    }, [currentIndex]);

    const slides = [
        <h3>Slide 1</h3>,
        <h3>Slide 2</h3>,
        <h3>Slide 3</h3>,
    ];

    return     <div className={"progress-caro"}>
        <AliceCarousel
            items={slides}
            activeIndex={currentIndex}
            onSlideChanged={handleSlideChange}
            autoPlay={true}
            autoPlayInterval={8000}
        />
        <div style={{ width: `${progress}%`, height: '5px', backgroundColor: 'blue' }} />
    </div>
}

export default ProgressBarSlider;
