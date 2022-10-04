import React from "react";
import heroApi from "../api/HeroesApi.js";
import { useState } from "react";
import { useEffect } from "react";

export default function MarvelPage(){
    const [heroes, setHeroes] = useState([])

    useEffect(() => {
        getHeroes()
    }, [])

    const getHeroes = async () => {
        try {
            const { data } = await heroApi.get("/marvel");
            setHeroes(data);
        } catch (error) {
            console.log(error)
        }
    }

    return <div className="grid grid-cols-[repeat(3,574px)] auto-rows-[minmax(890px,1fr)] gap-[37px] py-[62px] w-auto justify-center">
        { heroes.map((hero) => <div className="border-[1px] border-blackbg py-[15px] flex flex-col justify-between items-center bg-[length:100%_100%] max-w-[575px] max-h-[887px]" style={{"background-image": `url("${hero.imagen})`}}>
            <h1 className="border-2 border-marvelred italic max-w-[538px] max-h-[90px] bg-cardbg text-[47px] font-semibold p-[15px] pr-[25px] flex justify-center items-center">{hero.nombre}</h1>
            <div className="grid grid-cols-[197px_131px_197px] grid-rows-[145px_104px] gap-[8px]">
                <p className="overflow-x-hidden overflow-scroll  border-2 border-marvelred col-span-3 max-w-[538px] max-h-[100%] bg-cardbg text-[18px] font-medium italic p-[10px] flex justify-center items-start">{hero.descripcion}</p>
                <h2 className="border-2 border-marvelred items-center justify-baseline font-semibold flex flex-col max-w-[197px] h-[100%] bg-cardbg text-[32px]">PODERES <span className="text-[20px] font-medium italic">{hero.poderes}</span></h2>
                <h2 className="border-2 border-marvelred items-center justify-baseline font-semibold flex flex-col bg-cardbg max-w-[131px] h-[100%] text-[32px]">TOP <span className="text-[30px] font-medium italic">{hero.top}</span></h2>
                <h2 className="border-2 border-marvelred items-center justify-baseline font-semibold flex flex-col max-w-[197px] h-[100%] bg-cardbg text-[32px]">ESTRENO <span className="text-[20px] font-medium italic">{hero.estreno}</span></h2>
            </div>
        </div>
        
        )}
    </div>
}
