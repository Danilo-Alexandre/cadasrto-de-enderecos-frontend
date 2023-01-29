import "./adressCard.css"


function AdressCard({ 
    fk_usuario, 
    rua, 
    numero, 
    bairro, 
    cidade, 
    estado, 
    complemento
}){
    return (
        <div className="card-enderecos">
        <span>Usuario: {fk_usuario}</span>
        <span>Rua: {rua}</span>
        <span>Numero: {numero}</span>
        <span>Bairro: {bairro}</span>
        <span>Cidade: {cidade}</span>
        <span>Estado: {estado}</span>
        <span>Complemento: {complemento}</span>
      </div>
    )
}

export default AdressCard