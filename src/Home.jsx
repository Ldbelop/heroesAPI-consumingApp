import React, { useEffect } from "react";
import { useState } from "react";
import heroApi from "./HeroesApi";

export default function HomePage(){
    const [backgrounds, setBackgrounds] = useState([])
    
    useEffect(() => {
        getBackgrounds()
    }, [])

    const getBackgrounds = async () => {
        try {
            const response = await heroApi.get("/");
            setBackgrounds(response.data);
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <>
            <PageSelectionElement title="MARVEL" backgrounds={backgrounds} id="marvel-backgrnd"/>
            <PageSelectionElement title="DC" backgrounds={backgrounds} id="dc-backgrnd"/>
        </>
    )
}

function PageSelectionElement({ title, id, backgrounds }){
    let imageSrc;
    
    if(backgrounds.length != 0){
        imageSrc = backgrounds.filter((element) => element.id == id)[0].imagen;
    }
    // console.log(imageSrc)
    return (
        <div>
            <img src={imageSrc} alt="image background "/>
            <h1>{ title }</h1>
        </div>
    )
}