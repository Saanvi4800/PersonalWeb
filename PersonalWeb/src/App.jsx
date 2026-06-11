import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import './index.css';

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Diy from "./pages/Diy";

function App() {
  return (
     <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/diy" element={<Diy />} />
        </Routes>
     </BrowserRouter>
  );
}

export default App;