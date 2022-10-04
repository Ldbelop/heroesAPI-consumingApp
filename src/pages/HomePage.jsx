import React, { useEffect } from "react";
import { useState } from "react";
import heroApi from "../api/HeroesApi.js";
import PageSelectionElement from "../components/PageSelectionElement.jsx";

export default function HomePage(){
    const [backgrounds, setBackgrounds] = useState([])
    
    useEffect(() => {
        getBackgrounds()
    }, [])

    const getBackgrounds = async () => {
        try {
            const { data } = await heroApi.get("/backgrounds");
            setBackgrounds(data);
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div className="flex justify-center items-center h-full">
            <div className="flex max-w-[1420px] justify-between">
                <PageSelectionElement title="MARVEL" backgrounds={backgrounds} id="marvel-backgrnd" link="/marvel">mr-[179px]</PageSelectionElement>
                <div className=""></div>
                <PageSelectionElement title="DC" backgrounds={backgrounds} id="dc-backgrnd" link="/dc"> </PageSelectionElement>
            </div>
        </div>
    )
}


