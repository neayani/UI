import "../style/registerUser.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  //Declare Object
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    userName: "",
    password: "",
    isActive:true,
    isAdmin:true
  });

  const navigate = useNavigate();
  // const headers = {

  //   'Access-Control-Allow-Origin':'*',
  //   'Access-Control-Allow-Credentials':true,
  //   'Access-Control-Allow-Methods':'GET, POST',
  //   'Access-Control-Allow-Headers':' Content-Type, Depth, User-Agent, X-File-Size, X-Requested-With, If-Modified-Since, X-File-Name, Cache-Control'
  // };

  //Post Data To API
  const handleSubmit = (e) => {
    e.preventDefault();

     axios

      .post("https://localhost:7101/api/User", formData)
      .then((response) => {
        navigate("/ListUsers");
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //Change Object When TextBox Changed
  const handleChange = (e) => {
    const { name, value,type,checked } = e.target;

    if(type==="checkbox")
    {
      setFormData({
        ...formData,
        [name]: checked,
      });
      console.log(formData);
    }
    else
    {
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  };

  return (
    <>
      <div className="form-container">
        <h2>User Registration</h2>
        <form className="registration-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
          
            <input
              type="text"
              id="username"
              name="username"
              required
              value={formData.username}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="name">name:</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              vaule={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="family">family:</label>
            <input
              type="text"
              id="family"
              name="family"
              required
              value={formData.family}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="isActive">IsActive:</label>
            <input
              type="checkbox"
              id="isActive"
              name="isActive"
             
              value={formData.isActive}
              onChange={handleChange}
            />
          </div>

          <div className="form-group" >
            <label htmlFor="isAdmin">IsAdmin:</label>
            <input
              type="checkbox"
              id="isAdmin"
              name="isAdmin"
          
              value={formData.isAdmin}
              onChange={handleChange}
            />
          </div>
          <button
            className="submit-button"
            type="submit"
            onSubmit={handleSubmit}
          >
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
