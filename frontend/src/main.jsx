import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home'
import Cadastro from './pages/Pedido/Cadastro'

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div style={{ display: "flex" }}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
                  <Route path="/pedido/cadastro" element={<Cadastro />} />

        </Routes>
      </Router>
    </div>
  </StrictMode>
);
    