import React from "react";
import {AiFillSetting, AiOutlineCloudDownload, AiOutlinePhone} from "react-icons/ai";

export default function EvolvedYears() {
    const services = [
        {
            icon: <AiFillSetting/>,
            header: "Corporate Solution",
            description: "I will create and design a branded and professional high-converting store to help you generate the best sales."
        },
        {
            icon: <AiOutlinePhone/>,
            header: "Corporate Solution",
            description: "I will create and design a branded and professional high-converting store to help you generate the best sales."
        },
        {
            icon: <AiOutlineCloudDownload/>,
            header: "Corporate Solution",
            description: "I will create and design a branded and professional high-converting store to help you generate the best sales."
        },
    ]
    return <div className={"bg-blue-100 py-16"}>
        <div className={"text-center"}>
            <p className={"uppercase text-[13px] text-blue-500 mb-1 tracing-wide"}>
                Are As what we serv
            </p>
            <h2 className={"font-semibold text-3xl text-blue"}>
                Our Services
            </h2>
        </div>
        <div className={"flex flex-wrap gap-4 md:px-16 mt-8 px-4"}>
            {
                services.map((value, index) => {
                    return <div key={index} className={"border flex-1 border drop-shadow border-blue-900 rounded-md p-4 text-center "}>
                       <div className={"mx-auto justify-center flex flex-col items-center"}>
                           <div className={"mb-4 bg-blue-500 text-white w-[50px] h-[50px] flex items-center justify-center rounded-full text-2xl"}>
                               {value.icon}
                           </div>
                           <h2 className={"font-semibold mb-2"}>{value.header}</h2>
                       </div>
                        <p className={"text-[13px]"}>
                            {value.description}
                        </p>
                    </div>
                })
            }
        </div>
    </div>
}