import React, { useState } from "react";
import "../styles/styles.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email === "user@example.com" && password === "password") {
      navigate("/home");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="login-left">
          <h2>YOUR WELCOME!</h2>
          <p>Timelessly chic and enduringly fashionable.</p>

          <button className="google-login">
            <i className="fab fa-google"></i> Log in with Google
          </button>

          <div className="divider">
            <span>or</span>
          </div>

          <form className="login-form" onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <div className="form-options">
              <div className="remember-me">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <a href="#">Forgot Password?</a>
            </div>

            <button type="submit" className="login-button">
              Log in
            </button>
          </form>

          <p className="signup-link">
            Don’t have an account? <a href="#">Sign up for free</a>
          </p>
        </div>

        <div className="login-right">
          <img src="login-photo (2).jpeg" alt="Fashion" />
        </div>
      </div>
    </div>
  );
};

export default Login;
