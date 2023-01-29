import "./userAdressScene.css";
import Header from "../../components/Header";
import AdressCard from "../../components/AdressCard";


    
    function AdressScene() {
        const usuario = [{
            idEndereco: 1,
            fk_usuario: 3,
            rua: "General Galvão",
            numero: 58,
            bairro: "Vila Mariana",
            cidade:"São Paulo",
            estado: "SP",
            complemento:""
        },
        {
            idEndereco: 2,
            fk_usuario: 5,
            rua: "Araurari",
            numero: 42,
            bairro: "Penha",
            cidade:"São Paulo",
            estado: "SP",
            complemento:"casa 4"
        },
        {
            idEndereco: 3,
            fk_usuario: 7,
            rua: "Gabriel Covelli",
            numero: 420,
            bairro: "Santana",
            cidade:"São Paulo",
            estado: "SP",
            complemento:"apto 601"
        }
        
        
        ]
    
        return (
        <>
            <Header title="Endereco do usuário" />
            <main>
                <div className="info-enderecos">
                {usuario.map((user) => (
                    <AdressCard fk_usuario={user.fk_usuario} rua={user.rua} numero={user.numero} bairro={user.bairro} cidade={user.cidade} estado={user.estado} complemento={user.complemento} />
                ))}

                </div>
            </main>
        </>
    )
                }

export default AdressScene