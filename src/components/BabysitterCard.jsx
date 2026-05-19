import { Link } from "react-router-dom";

function BabysitterCard({ sitter }) {
  return (
    <div className="card">
      <img src={sitter.image} alt={sitter.name} />

      <h3>{sitter.name}</h3>
      <p>{sitter.location}</p>
      <p>R{sitter.rate}/hour</p>

      <Link to={`/details/${sitter.id}`}>
        <button>View Profile</button>
      </Link>
    </div>
  );
}

export default BabysitterCard;