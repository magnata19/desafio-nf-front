import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Card from "./assets/components/Card";
import Formulario from "./assets/components/Formulario";
import Header from "./assets/components/Header";

function App() {
  const [notasFiscais, setNotasFiscais] = useState([]);

  const notaFiscal = {
    id: 0,
    nomeDaEmpresa: "",
    razaoSocial: "",
    cnpj: "",
    descricaoProduto: "",
    valorNotaFiscal: "",
  };

  const [objNotaFiscal, setObjNotaFiscal] = useState(notaFiscal);

  useEffect(() => {
    fetch("http://localhost:8080/listar")
      .then((retorno) => retorno.json())
      .then((json) => setNotasFiscais(json));
  }, []);

  //Obtendo dados do formulario
  const aoDigital = (e) => {
    
    setObjNotaFiscal({ ...objNotaFiscal, [e.target.name]: e.target.value });
  };

  //Cadastrar produto
  const cadastrar = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/cadastrar", {
      method: "POST",
      body: JSON.stringify(objNotaFiscal),
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    })
      .then((retorno) => retorno.json())
      .then((json) => {
        if(json.mensagem !== undefined){
          alert(json.mensagem)
        } else {
          setObjNotaFiscal([...notasFiscais, json])
          alert('Nota fiscal cadastrada com sucesso!')
        }
      });
  };

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/listar" element={<Card vetor={notasFiscais} />} />
          <Route
            path="/cadastrar"
            element={<Formulario eventoTeclado={aoDigital} cadastrar={cadastrar}/>}
          />
        </Routes>
        <h1> Davidson &copy; 2023</h1>
      </BrowserRouter>
    </>
  );
}

export default App;
