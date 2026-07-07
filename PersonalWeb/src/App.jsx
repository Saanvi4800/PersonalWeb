import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Bottom from "./components/bottom";
import './index.css';

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Diy from "./pages/Diy";
import Photography from "./pages/Photography";

function App() {
  return (
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/diy" element={<Diy />} />
          <Route path="/photography" element={<Photography />} />
        </Routes>
        <Bottom />
     </BrowserRouter>
  );
}

export default App;