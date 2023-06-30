import "./productCards.scss";

export default function ProductCards() {

    const cardData = [
        {
            img: "",
            title: "CREDIT CARDS",
            description: "100% Contactless Application Process with Instant Approval From Top Banks."
        },
        {
            img: "",
            title: "Loans",
            description: "100% online process. Instant offers. Affordable Rate of Interest on loans."
        },
        {
            img: "",
            title: "BUY NOW PAY LATER",
            description: "Short-term financing that allows consumers to make purchases and pay for them over time."
        },
        {
            img: "",
            title: "SAVING ACCOUNTS",
            description: "ZET offers range of savings account that suits your personal needs for the banking."
        },
    ]
    return <div className={"product-wrapper container xl mx-auto xl:px-36 2xl:px-4"}>
        <h2 className={"title"}>
            Products on ZET
        </h2>
        <p className={"subtitle"}>We are trusted by best brand in the country</p>
        <div className={"product-cards"}>
            {
                cardData.map((value, index) => {
                    return <div key={index} className={"product-single-card"}>
                        <img key={value.img} alt={"cards"}/>
                        <div>
                            <h3>{value.title}</h3>
                            <p>{value.description}</p>
                        </div>
                    </div>
                })
            }
        </div>
    </div>
}