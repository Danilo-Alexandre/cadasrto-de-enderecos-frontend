import "./userCard.css";

function UserCard({ id, name, email }) {
  return (
    <div className="card-usuario">
      <span>Id: {id} </span>
      <span>Nome: {name} </span>
      <span>Email: {email} </span>
    </div>
  );
}

export default UserCard;
