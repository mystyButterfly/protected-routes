import React, {useState} from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/register", {
        email,
        password,
      });
      setMessage(response.data.message); // Set the message after the response is received
      navigate("/login");
    } catch (error) {
      setMessage("An error occurred."); // Optionally handle errors here
      console.error(error); // Log the error for debugging
    }
  };

  return (
    <form onSubmit={handleRegister} className='form'>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Register</button>
      <div>{message}</div>
    </form>
  );
};

export default Register


