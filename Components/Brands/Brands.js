
import "./Brands.scss";

export default function Brands() {

    const brandImages=[
        {
            img:"/Axis.png"
        },
        {
            img:"/Bajaj.webp"
        },
    ]
    return<section className={"brand-wrapper"}>
        <h1 className={"title"}>
            Top Brands on ZET
        </h1>
        <p className={"subtitle"}>We are trusted by best brand in the country</p>

        <div>
            {brandImages.map( (value, index) => {
                return<img src={value.img} key={index}/>
            })}
        </div>
    </section>
}