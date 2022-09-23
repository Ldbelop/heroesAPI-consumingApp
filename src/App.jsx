import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./Home";

function NavBar(){
  return (
    <nav>
      <ul>
        <li>
          <img src="" alt="" />
        </li>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/marvel">Marvel</Link>
        </li>
        <li>
          <Link to="/dc">Dc</Link>
        </li>
      </ul>
    </nav>
  )
}

export default function App(){
    return (
        <BrowserRouter>
          <main className="flex flex-col">
            <header className="h-[60%]">
              <NavBar />
            </header>
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
          </main>
      </BrowserRouter>
    )
}

