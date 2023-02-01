import "./cadastro-endereco.css";
import api from "../../services/api"
import { useState} from "react"

function CadastroEnderecos() {
    const [usuario, setUsuario] = useState()
    const [rua, setRua] = useState()
    const [numero, setNumero] = useState()
    const [bairro, setBairro] = useState()
    const [cidade, setCidade] = useState()
    const [estado, setEstado] = useState()
    const [complemento, setComplemento] = useState()
    
    
    async function handleSubmit(event) {
        event.preventDefault();
        
  
      await  api.post("/enderecos", {
            fk_usuario: usuario,
            rua,
            numero,
            bairro,
            cidade,
            estado,
            complemento
        })
        setComplemento("")
        setEstado("")
        setCidade("")
        setBairro("")
        setNumero("")
        setRua("")
        setUsuario("")
        
      }
     
  return (
        <form className="cadastro-endereco" onSubmit={handleSubmit}>
          <label name="usuario">usuario:</label>  
          <input value={usuario} onChange={(event)=> setUsuario(event.target.value)} name="usuario" type="number"/>
          <label name="rua">rua:</label>  
          <input value={rua} onChange={(event)=> setRua(event.target.value)} name="rua" type="text"/>
          <label name="numero">numero:</label>  
          <input value={numero} onChange={(event)=> setNumero(event.target.value)} name="numero" type="number"/>
          <label name="bairro">Bairro:</label>  
          <input value={bairro} onChange={(event)=> setBairro(event.target.value)} name="bairro" type="text"/>
          <label name="cidade">Cidade:</label>  
          <input value={cidade} onChange={(event)=> setCidade(event.target.value)} name="cidade" type="text"/>
          <label name="estado">Estado:</label>  
          <input value={estado} onChange={(event)=> setEstado(event.target.value)} name="estado" type="text"/>
          <label name="complemento">Complemento:</label>  
          <input value={complemento} onChange={(event)=> setComplemento(event.target.value)} name="complemento" type="text"/>
          <button  type="submit">Salvar</button>
        </form>
  );
}

export default CadastroEnderecos;