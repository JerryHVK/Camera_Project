import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login({onLogin}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add login logic here
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    };
    fetch("http://127.0.0.1:3001/api/v1/customers/login", requestOptions).then(
      (response) => {
        if (response.ok) {
          const customerId = response.json()["_id"];
          console.log(customerId);
          if (onLogin) {
            onLogin(customerId);
          }
        } else {
          // notify login fail
          const element = document.getElementById("login-error");
          element.textContent = "Wrong email or password, please try again";
        }
      }
    );
  };

  const navigate = useNavigate();

  const handleSignup = () => {
    navigate("/signup"); // Redirect to the Signup page
  };
    
  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-image">
          <img
            src="/web_logo.jpg" // Replace with your image URL
            alt="Logo"
          />
        </div>
        <h1 className="login-title">Login</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="login-input"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="login-input"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div>
            <p id="login-error" style={{ color: "red" }}></p>
          </div>
          <div className="button-container">
            <button
              type="button"
              className="login-button secondary"
              onClick={handleSignup}
            >
              Create new account
            </button>
            <button type="submit" className="login-button primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
