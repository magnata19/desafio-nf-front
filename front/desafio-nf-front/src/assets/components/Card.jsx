import React from "react";
import styles from './Card.module.css'

const Tabela = ({vetor}) => {
  return (
    <div className={styles.card_container}>
      {vetor.map((nota, indice) => (
        <div key={indice} className={styles.card}>
          <p>Nome da empresa: {nota.nomeDaEmpresa}</p>
          <p>Razão Social: {nota.razaoSocial}</p>
          <p>CNPJ: {nota.cnpj}</p>
          <p>Descrição do produto: {nota.descricaoProduto}</p>
          <p>Valor: R$ {nota.valorNotaFiscal}</p>
        </div>
      ))}
    </div>
  );
};

export default Tabela;
