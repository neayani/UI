import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(username);
      console.log(password);
      const response = await axios.post(
        "https://localhost:7101/api/User/login",
        {
          username,
          password,
        }
      );

      if (response.status === 200) {
        setMessage("Login successful!");
        onLogin(true);
        const token = response.data.token;
        localStorage.setItem("token", token);

        navigate("/"); // Redirect to the home page after successful login
      } else {
        setMessage(response.data.message || "Invalid email or password");
      }

      console.log(response);
    } catch (error) {
      setMessage("An error occurred. Please try again.");
      console.log(error);
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="registration-form">
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="input"
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="input"
          />
        </div>
        <br></br>
        <button className="submit-button" type="submit">
          Login
        </button>
      </form>
      <br></br>
      {message && <p className="error-message">{message}</p>}
    </div>
  );
};

export default LoginPage;
