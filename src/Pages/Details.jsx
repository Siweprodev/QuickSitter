import { useParams } from "react-router-dom";
import babysitters from "../Data/babysitters";

function Details() {
  const { id } = useParams();

  const sitter = babysitters.find(
    (item) => item.id === parseInt(id)
  );

  if (!sitter) {
    return <h2>Babysitter not found</h2>;
  }

  return (
    <div>
      <h1>{sitter.name}</h1>
      <img src={sitter.image} width="200" />

      <p>Location: {sitter.location}</p>
      <p>Experience: {sitter.experience}</p>
      <p>Rate: R{sitter.rate}/hour</p>

      <button>Book Now</button>
    </div>
  );
}

export default Details;