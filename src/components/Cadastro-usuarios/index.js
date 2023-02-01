import "./cadastroUsuarios.css";
import api from "../../services/api"
import { useState} from "react"

function CadastroUsuarios() {
  const [nome, setNome] = useState()
  const [email, setEmail] = useState()
  const [senha, setSenha] = useState()
  
  
  async function handleSubmit(event) {
    event.preventDefault();
    
    // Ao chamar o backend, vamos passar o NAME, EMAIL, PASSWORD
    // Vamos chamar o backend feito na aula de quinta-feira para cadastrar o usuário
    await api.post("/usuarios", {
      nome,
      email,
      senha
    })
    setEmail("")
    setNome("")
    setSenha("")
    
      

      }
     
  return (
        <form className="cadastro" onSubmit={handleSubmit}>
          <label name="nome">Nome:</label>  
          <input value={nome} onChange={(event)=> setNome(event.target.value)} name="nome" type="text" placeholder="Digite o nome completo" />
          <label name="email">Email:</label>  
          <input value={email} onChange={(event)=> setEmail(event.target.value)} name="email" type="text" placeholder="Digite o email" />
          <label name="senha">Senha:</label>  
          <input value={senha} onChange={(event)=> setSenha(event.target.value)} name="senha" type="password" placeholder="Digite a senha" />
          <button  type="submit">Salvar</button>
        </form>
  );
}

export default CadastroUsuarios;