import React from "react";
import { Link } from "react-router-dom";

export default function PageSelectionElement({ title, id, backgrounds, children, link }){
    let imageSrc;
    
    if(backgrounds.length != 0){
        imageSrc = backgrounds.filter((element) => element.id == id)[0].imagen;
    }
    // console.log(imageSrc)
    return (
        <div className={`flex justify-between ${children}`}>
            <Link to={link}>
                <div className="max-w-[620px] max-h-[738px] overflow-hidden border-[1px] border-blackbg">
                    <img className="max-w-[620px]" src={imageSrc} alt="image background "/>
                </div>
                <h1 className="mt-[11px] flex justify-center items-center max-w-[620px] max-h-[74px] bg-greyishbg font-semibold text-whiteTxt text-[64px] rounded-br-[30px] rounded-bl-[30px] border-[1px] border-blackbg">{ title }</h1>
            </Link>
        </div>
    )
}