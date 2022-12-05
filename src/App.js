import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from "./Commponen/Header";
import Home from "./pages/Home";
import Kabasaran from "./pages/Kabasaran";
import MasamperPage from "./pages/Masamper";
import MaengketPage from "./pages/Maengket";
import MaselaiPage from "./pages/Maselai";
import KolintangPage from "./pages/Kolintang";
import MusikBambuPage from "./pages/MusikBambu";
import RumahAdatPage from "./pages/RumahAdat";
import WarugaPage from "./pages/Waruga";

function App() {
  return (
     <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/kabasaran' element={<Kabasaran />} />
          <Route path='/Masamper' element={<MasamperPage/>} />
          <Route path='/Maengket' element={<MaengketPage/>} />
          <Route path='/Maselai' element={<MaselaiPage/>} />
          <Route path='/Kolintang' element={<KolintangPage/>} />
          <Route path='/MusikBambu' element={<MusikBambuPage/>} />
          <Route path='/RumahAdat' element={<RumahAdatPage/>} />
          <Route path='/Waruga' element={<WarugaPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
