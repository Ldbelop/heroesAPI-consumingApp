import React from "react";
import { Link } from "react-router-dom";

export default function NavBar(){
    return (
      <nav className="bg-blackbg h-[113px] flex items-center">
        <ul className="flex items-center justify-between w-full px-[183px]">
          <div className="flex items-center">
            <li className="w-[67px] h-[67px] overflow-hidden rounded-[10px] mr-[36px] ">
                <img src="https://firebasestorage.googleapis.com/v0/b/superheroes-fakeapi.appspot.com/o/webpagelogo.png?alt=media&token=27c0ecb4-2a8f-4130-b794-30300b6e2e5d" alt="webPageLogo" />
            </li>
            <li className="flex justify-center items-center text-whiteTxt mr-[8px] font-semibold text-[24px] w-[99px] h-[41px] rounded-[5px] bg-greyishbg">
                <Link to="/">Inicio</Link>
            </li>
            <li className="flex justify-center items-center text-whiteTxt mr-[8px] font-semibold text-[24px] w-[99px] h-[41px] rounded-[5px] bg-greyishbg">
                <Link to="/marvel">Marvel</Link>
            </li>
            <li className="flex justify-center items-center text-whiteTxt mr-[8px] font-semibold text-[24px] w-[99px] h-[41px] rounded-[5px] bg-greyishbg">
                <Link to="/dc">Dc</Link>
            </li>
          </div>
          <li className="flex justify-center items-center text-whiteTxt font-semibold text-[24px] w-[99px] h-[55px] bg-redbg border-[1px] border-whiteTxt rounded-[10px]">
            <Link to="/entry">Salir</Link>
          </li>
        </ul>
      </nav>
    )
  }