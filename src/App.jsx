import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import MarvelPage from "./pages/MarvelPage";
import DcPage from "./pages/DcPage";
import EntryPage from "./pages/EntryPage";


export default function App(){
    return (
        <BrowserRouter>
          <main className="flex flex-col h-full">
            <header>
              <NavBar />
            </header>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/marvel" element={<MarvelPage />}/>
                <Route path="/dc" element={<DcPage />}/>
                <Route path="/entry" element={<EntryPage />}/>
            </Routes>
          </main>
      </BrowserRouter>
    )
}

