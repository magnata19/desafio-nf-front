import styles from './Formulario.module.css'

const Formulario = () => {
  return (
    <form className={styles.form_container}>
      <label>Nome da Empresa</label>
      <input type="text" placeholder='Nome da empresa'/>
      <label>Razão Social</label>
      <input type="text" placeholder='Razão Social'/>
      <label>CNPJ</label>
      <input type="number" placeholder='CNPJ'/>
      <label>Descrição do produto</label>
      <input type="text" placeholder='Descrição do produto'/>
      <label>Valor da nota fiscal</label>
      <input type="text" placeholder='R$'/>
      <button>Cadastrar</button>
    </form>
  
  )
}

export default Formulario

//     private Integer id;
//     private String nomeDaEmpresa;
//     private String razaoSocial;
//     private String cnpj;
//     private String descricaoProduto;
//     private double valorNotaFiscal;