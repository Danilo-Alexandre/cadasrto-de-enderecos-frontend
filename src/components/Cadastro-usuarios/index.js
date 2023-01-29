import "./cadastroUsuarios.css";

function CadastroUsuarios() {
    function handleSubmit(event) {
        event.preventDefault();
    
        // Vamos chamar o backend feito na aula de quinta-feira para cadastrar o usuário
        // Ao chamar o backend, vamos passar o NAME, EMAIL, PASSWORD
      }
  return (
        <form className="cadastro" onSubmit={handleSubmit}>
          <label name="nome">Nome:</label>  
          <input name="nome" type="text" placeholder="Digite o nome completo" />
          <label name="email">Email:</label>  
          <input name="email" type="email" placeholder="Digite o email" />
          <label name="senha">Senha:</label>  
          <input name="senha" type="password" placeholder="Digite a senha" />
          <button type="submit">Salvar</button>
        </form>
  );
}

export default CadastroUsuarios;