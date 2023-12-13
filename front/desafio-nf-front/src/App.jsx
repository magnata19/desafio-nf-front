import { useEffect, useState } from "react";

import "./App.css";
import Card from "./assets/components/Card";
import Formulario from "./assets/components/Formulario";

function App() {
  const [notasFiscais, setNotasFiscais] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/listar")
      .then((retorno) => retorno.json())
      .then((json) => setNotasFiscais(json));
  }, []);

  return (
    <>
    <Formulario />
      <Card vetor={notasFiscais}/>
    </>
  );
}

export default App;
