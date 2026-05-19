import { Link } from "react-router-dom";
import { getUser, logoutUser } from "../auth/auth";
import { useState, useEffect } from "react";

function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(getUser());
  }, []);

  const handleLogout = () => {
    logoutUser();
    setUser(null);
  };

  return (
    <nav className="navbar">
      <h2>QuickSitter</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/babysitters">Babysitters</Link>
      </div>

      <div>
        {user ? (
          <div>
            <span>Hi, {user.name}</span>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;