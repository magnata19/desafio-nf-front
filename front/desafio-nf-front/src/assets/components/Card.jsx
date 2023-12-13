import React from "react";
import styles from './Card.module.css'

const Tabela = ({vetor}) => {
  return (
      <div className={styles.card_container}>
    <div className={styles.card_modelo}>
      <h1>NF Validadas</h1>
      {vetor.map((nota, indice) => (
        <div key={indice} className={styles.card}>
          <p>Nome da empresa: <strong>{nota.nomeDaEmpresa}</strong></p>
          <p>Razão Social: <strong>{nota.razaoSocial}</strong></p>
          <p>CNPJ: <strong>{nota.cnpj}</strong></p>
          <p>Descrição do produto: <strong>{nota.descricaoProduto}</strong></p>
          <p>Valor: R$ <strong>{nota.valorNotaFiscal}</strong></p>
        </div>
      ))}
    </div>
      </div>
  );
};

export default Tabela;
