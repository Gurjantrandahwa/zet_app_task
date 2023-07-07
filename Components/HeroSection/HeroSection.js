import "./heroSection.scss";


export default function HeroSection() {
    return <div className={"hero-container"}>
        <div className={"hero-text"}>
            <h1>Become a  Advisor <span>Earn Up To Rs.2 Lakh/Month</span></h1>
            <p>No investment required</p>
            <img src={"/Assets/playstore.svg"} alt={"playstore"} className={"hero-playstore"}/>
        </div>
        <img src={"/Assets/banner.jpg"} alt={"hero-image"} className={"hero-img"}/>
    </div>
}