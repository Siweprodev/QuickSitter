import { Link, useNavigate } from "react-router-dom";
import { getUser, logoutUser } from "../auth/auth";
import { useState, useEffect } from "react";

function Navbar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setUser(getUser());
  }, []);

  const handleLogout = () => {
    logoutUser();
    setUser(null);
  };

  return (
    <nav className="navbar">
      <h2 className="logo">QuickSitter</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/babysitters">Babysitters</Link>
        <Link to="/booking">Booking</Link>
      </div>

      <div className="nav-right">
        {user ? (
          <div className="user-box">
            <span>Hi, {user.name}</span>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <button onClick={() => navigate("/login")}>
            Login
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;