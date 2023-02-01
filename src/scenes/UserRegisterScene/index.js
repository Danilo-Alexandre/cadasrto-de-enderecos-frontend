import "./userRegisterScene.css";
import Header from "../../components/Header";
import CadastroUsuarios from "../../components/Cadastro-usuarios";

function UserRegisterScene() {
  

  return (
    <>
      <Header className="titulo" title="Cadastro de usuários" />
      <main>
        <CadastroUsuarios/>
      </main>
    </>
  );
}

export default UserRegisterScene;
