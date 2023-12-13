import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Card from "./assets/components/Card";
import Formulario from "./assets/components/Formulario";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";

function App() {
  const notaFiscal = {
    id: 0,
    nomeDaEmpresa: "",
    razaoSocial: "",
    cnpj: "",
    descricaoProduto: "",
    valorNotaFiscal: "",
  };

  //usestate para obeter dados das nfs
  const [notasFiscais, setNotasFiscais] = useState([]);

  //usestate para cadastrar nota fiscal
  const [objNotaFiscal, setObjNotaFiscal] = useState(notaFiscal);

  //soma das notas
  const [somaValores, setSomaValores] = useState(0);

  useEffect(() => {
    fetch("http://localhost:8080/listar")
      .then((retorno) => retorno.json())
      .then((json) => {
        setNotasFiscais(json);
        const valores = json.map((nota) => nota.valorNotaFiscal);
        const soma = valores.reduce(
          (acc, valorNotaFiscal) => acc + valorNotaFiscal,
          0
        );
        setSomaValores(soma);
      });
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
        if (json.mensagem !== undefined) {
          alert(json.mensagem);
        } else {
          setObjNotaFiscal([...notasFiscais, json]);
          alert("Nota fiscal cadastrada com sucesso!");
        }
      });
  };

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/listar" element={<Card vetor={notasFiscais} valor={somaValores}/> } />
          <Route
            path="/cadastrar"
            element={
              <Formulario eventoTeclado={aoDigital} cadastrar={cadastrar} />
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
