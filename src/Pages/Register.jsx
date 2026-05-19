import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Create Account</h2>
        <p>Join to start booking babysitters</p>

        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email address" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />

        <button>Sign Up</button>

        <p className="auth-text">
          Already have an account? <Link to="/login">Login</Link>
        </p>

        <Link to="/">
          <button className="back-btn">Back to Home</button>
        </Link>
      </div>
    </div>
  );
}

export default Register;