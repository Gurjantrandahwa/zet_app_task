"use client"

import {useEffect, useState} from 'react';
import './carousel.scss';

export default function Carousel() {
    const [postIndex, setPostIndex] = useState(0);
    const posts = [
        {
            tag: 'Financial Freedom',
            title: "Financial Freedom Awaits: Unlock Your Potential, Grow Wealth, and Secure Your Future.",
            image: 'https://i.pinimg.com/564x/20/81/b1/2081b11cbc9009d885d1ee57b49e7240.jpg',
            link: '#',
        },
        {
            tag: 'Invest',
            title: 'Invest. Grow. Thrive: Expert Guidance for Building Wealth and Achieving Financial Success.',
            image: 'https://i.pinimg.com/564x/b4/86/e1/b486e1c969a42280031e9ca3dde2d157.jpg',
            link: '#',
        },
        {
            tag: 'Smart Money',
            title: 'Smart Money, Smart Life: Make Informed Choices, Grow Wealth, and Live Your Dreams.',
            image: 'https://i.pinimg.com/564x/71/07/fb/7107fbe7c855d62994740f9b020a0877.jpg',
            link: '#',
        },
    ];

    useEffect(() => {
        const progressInterval = setInterval(progress, 3000);
        return () => clearInterval(progressInterval);
    }, [postIndex]);

    function progress() {
        setPostIndex((prevIndex) => (prevIndex + 1) % posts.length);
    }

    return <div className="carousel">
        {/* Progress bar */}
        <div className="progress-bar progress-bar--primary hide-on-desktop">
            <div className="progress-bar__fill"/>
        </div>

        {/* Main post wrapper */}
        <header className="main-post-wrapper">
            <div className="slides">
                {posts.map((post, index) => (
                    <article
                        key={index}
                        className={`main-post ${index === postIndex ? 'main-post--active' : 'main-post--not-active'}`}
                    >
                        <div className="main-post__image">
                            <img src={post.image} alt={post.title}/>
                        </div>
                        <div className="main-post__content">
                            <div className="main-post__tag-wrapper">
                                <span className="main-post__tag">{post.tag}</span>
                            </div>
                            <h1 className="main-post__title">{post.title}</h1>
                            <a className="main-post__link" href={post.link}>
                                <span className="main-post__link-text">find out more</span>
                                <svg
                                    className="main-post__link-icon main-post__link-icon--arrow"
                                    width="37"
                                    height="12"
                                    viewBox="0 0 37 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M0 6H36.0001M36.0001 6L31.0001 1M36.0001 6L31.0001 11" stroke="white"/>
                                </svg>
                            </a>
                        </div>
                    </article>
                ))}
            </div>
        </header>

        {/* Posts wrapper */}
        <div className="posts-wrapper hide-on-mobile">
            {posts.map((post, index) => (
                <article key={index} className={`post ${index === postIndex ? 'post--active' : ''}`}>
                    <div className="progress-bar">
                        <div className="progress-bar__fill"/>
                    </div>
                    <header className="post__header">
                        <span className="post__tag">{post.tag}</span>
                    </header>
                    <h2 className="post__title">{post.title}</h2>
                </article>
            ))}
        </div>
    </div>
}
