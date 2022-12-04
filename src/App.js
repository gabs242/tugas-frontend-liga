import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Header from "./Commponen/Header";
import Home from "./pages/Home";
import Kabasaran from "./pages/Kabasaran";

function App() {
  return (
     <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/kabasaran' element={<Kabasaran />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
