import React, { useState } from "react";
import { Link } from "react-router-dom";
import validation from "./SignupValidation";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './styles.css'; 
import logo from './images/logo.jpg'

function Signup() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState(""); // New state for server error

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validation(values);
    setErrors(validationErrors);
    setServerError(""); // Reset server error
    if (!validationErrors.name && !validationErrors.email && !validationErrors.password) {
      axios.post('http://localhost:3001/signup', values)
        .then(res => {
          if (res.data === "User already exists") {
            setServerError("User with this email already exists."); // Set server error
          } else {
            navigate('/');
          }
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <div className="full-height-center">
      
        <div className="form-container">
          <img src={logo} alt="Logo" className="logo"/>
          <h2 className="signup-title">Sign Up</h2>
          <form action="" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="input-field-names">
                <strong>Name</strong>
              </label>
              <input
                type="text"
                placeholder="Enter your Name"
                name="name"
                onChange={handleInput}
                className="form-control"
              />
              {errors.name && <span className="text-danger">{errors.name}</span>}
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="input-field-names">
                <strong>Email</strong>
              </label>
              <input
                type="email"
                placeholder="Enter your Email"
                name="email"
                onChange={handleInput}
                className="form-control"
              />
              {errors.email && (
                <span className="text-danger">{errors.email}</span>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="input-field-names">
                <strong>Password</strong>
              </label>
              <input
                type="password"
                placeholder="Enter your Password"
                name="password"
                onChange={handleInput}
                className="form-control"
              />
              {errors.password && (
                <span className="text-danger">{errors.password}</span>
              )}
            </div>
            {serverError && (
              <div className="mb-3">
                <span className="text-danger">{serverError}</span>
              </div>
            )}
            <button type="submit" className="btn-success">
              Signup
            </button>
            <p className="input-field-names">You agree to our terms and policies.</p>
            <Link
              to={"/"}
              className="btn-default"
            >
              Login
            </Link>
          </form>
        </div>
      </div>
  );
}

export default Signup;
