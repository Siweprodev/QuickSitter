import babysitters from "../Data/babysitters";
import BabysitterCard from "../components/BabysitterCard";

function Babysitters() {
  return (
    <div>
      <h1>Available Babysitters</h1>

      <div className="grid">
        {babysitters.map((sitter) => (
          <BabysitterCard key={sitter.id} sitter={sitter} />
        ))}
      </div>
    </div>
  );
}

export default Babysitters;