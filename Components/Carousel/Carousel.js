"use client"

import {useEffect, useState} from 'react';
import './carousel.scss';

export default function Carousel() {
    const [postIndex, setPostIndex] = useState(0);
    const posts = [
        {
            tag: 'News',
            published: '16 August 2019',
            title: "New McLaren wind tunnel 'critical' to future performance, says Tech Director Key",
            image: 'https://www.formula1.com/content/dam/fom-website/manual/Misc/2019-Races/Monaco2019/McLarenMonaco19.jpg.transform/9col/image.jpg',
            link: '#',
        },
        {
            tag: 'Video',
            published: '12 August 2019',
            title: 'What To Watch For in the 2019 Hungarian Grand Prix',
            image: 'https://www.formula1.com/content/dam/fom-website/sutton/2019/Hungary/Saturday/1017645792-LAT-20190803-_2ST5188.jpg.transform/9col-retina/image.jpg',
            link: '#',
        },
        {
            tag: 'News',
            published: '08 August 2019',
            title: 'Hamilton wants harder championship fight from Leclerc and Verstappen',
            image: 'https://www.formula1.com/content/dam/fom-website/manual/Misc/2019-Races/Austria-2019/Top3Austria2019.jpg.transform/9col-retina/image.jpg',
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
                        <p className="post__published">{post.published}</p>
                    </header>
                    <h2 className="post__title">{post.title}</h2>
                </article>
            ))}
        </div>
    </div>
}
