import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Card from "./assets/components/Card";
import Formulario from "./assets/components/Formulario";
import Header from "./assets/components/Header";

function App() {
  const [notasFiscais, setNotasFiscais] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/listar")
      .then((retorno) => retorno.json())
      .then((json) => setNotasFiscais(json));
  }, []);

  const notaFiscal = {};

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/listar" element={<Card vetor={notasFiscais} />} />
          <Route path="/cadastrar" element={<Formulario />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
