"use client"

import {useState} from "react";
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai";
import Link from "next/link";
import "./Navbar.scss";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return <div className="nav-container">
        <nav className="nav-wrapper container mx-auto xl:px-36 px-4 py-6">
            <Link href="/">
                <img src={"/Assets/logo.jpg"}
                     className={"logo"}
                     alt={"logo"}
                />
            </Link>

            <div className={`menu-icon ${isMenuOpen ? "open" : ""}`} onClick={toggleMenu}>
                {isMenuOpen ? <AiOutlineClose/> : <AiOutlineMenu/>}
            </div>

            <ul className={`menu ${isMenuOpen ? "open" : ""}`}>
                <li>
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/About">
                        About Us
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        Partner With Us
                    </Link>
                </li>
                <li>
                    <Link href="/">
                        Blog
                    </Link>
                </li>
                <li>
                    <button className={"download-btn"}>Download ZET</button>

                </li>

                <li className="playstore">
                    <img src={"/Assets/playstore.svg"} alt={"playstore"}/>
                </li>
            </ul>
        </nav>
    </div>
}
