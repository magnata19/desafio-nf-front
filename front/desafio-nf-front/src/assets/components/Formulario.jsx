import styles from "./Formulario.module.css";

const Formulario = ({ eventoTeclado, cadastrar }) => {
  return (
    <form className={styles.form_container}>
      <div className={styles.form_filho}>
        <h1>Cadastrar NF</h1>
        <label>Nome da Empresa</label>
        <input type="text" placeholder="Nome da empresa" onChange={eventoTeclado} name='nomeDaEmpresa'/>
        <label>Razão Social</label>
        <input type="text" placeholder="Razão Social" onChange={eventoTeclado} name='razaoSocial'/>
        <label>CNPJ</label>
        <input type="text" placeholder="00.000.000/0000-00" onChange={eventoTeclado} name='cnpj'/>
        <label>Descrição do produto</label>
        <input type="text" placeholder="Descrição do produto" onChange={eventoTeclado} name='descricaoProduto'/>
        <label>Valor da nota fiscal</label>
        <input type="text" placeholder="R$" onChange={eventoTeclado} name='valorNotaFiscal'/>
        <button onClick={cadastrar}>Cadastrar</button>
      </div>
    </form>
  );
};

export default Formulario;

//     private Integer id;
//     private String nomeDaEmpresa;
//     private String razaoSocial;
//     private String cnpj;
//     private String descricaoProduto;
//     private double valorNotaFiscal;
