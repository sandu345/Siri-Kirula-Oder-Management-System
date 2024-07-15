// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import './registerdetails.css'; // Import the custom CSS
// import logo from './images/logo.jpg';

// function Register() {
//   const [values, setValues] = useState({
//     name: "",
//     contactNumber: "",
//     email: "",
//     address: "",
//   });
//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate();

//   const handleInput = (event) => {
//     setValues((prev) => ({
//       ...prev,
//       [event.target.name]: event.target.value,
//     }));
//   };

//   const validate = () => {
//     const errors = {};
//     if (!values.name) errors.name = "Name is required";
//     if (!values.contactNumber.match(/^\d{10}$/))
//       errors.contactNumber = "Contact number must be 10 digits";
//     if (!values.email.match(/^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/))
//       errors.email = "Invalid email format";
//     if (!values.address) errors.address = "Address is required";
//     return errors;
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const validationErrors = validate();
//     setErrors(validationErrors);

//     if (Object.keys(validationErrors).length === 0) {
//       alert("Registration successful!");
//       navigate("/home");
//     }
//   };

//   return (
//     <div className="full-height-center">
//       <div className="form-container">
//         <img src={logo} alt="Logo" className="logo-left" onClick={() => navigate("/home")} />
//         <div className="form-content">
//           <h2 className="register-title">Customer Registration</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-3">
//               <label htmlFor="name" className="input-field-names">
//                 <strong>Name</strong>
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter your Name"
//                 name="name"
//                 onChange={handleInput}
//                 className="form-control"
//               />
//               {errors.name && <span className="text-danger">{errors.name}</span>}
//             </div>
//             <div className="mb-3">
//               <label htmlFor="contactNumber" className="input-field-names">
//                 <strong>Contact Number</strong>
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter your Contact Number"
//                 name="contactNumber"
//                 onChange={handleInput}
//                 className="form-control"
//               />
//               {errors.contactNumber && (
//                 <span className="text-danger">{errors.contactNumber}</span>
//               )}
//             </div>
//             <div className="mb-3">
//               <label htmlFor="email" className="input-field-names">
//                 <strong>Email</strong>
//               </label>
//               <input
//                 type="email"
//                 placeholder="Enter your Email"
//                 name="email"
//                 onChange={handleInput}
//                 className="form-control"
//               />
//               {errors.email && (
//                 <span className="text-danger">{errors.email}</span>
//               )}
//             </div>
//             <div className="mb-3">
//               <label htmlFor="address" className="input-field-names">
//                 <strong>Courier Address</strong>
//               </label>
//               <input
//                 type="text"
//                 placeholder="Enter your Courier Address"
//                 name="address"
//                 onChange={handleInput}
//                 className="form-control"
//               />
//               {errors.address && (
//                 <span className="text-danger">{errors.address}</span>
//               )}
//             </div>
//             <div className="form-footer">
//               <button type="submit" className="btn-success">
//                 Register
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Register;







// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import VerticalNav from './VerticalNav'; // Import the navigation component
// import './registerdetails.css'; // Import the custom CSS

// function Register() {
//   const [values, setValues] = useState({
//     name: "",
//     contactNumber: "",
//     email: "",
//     address: "",
//   });
//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate();

//   const handleInput = (event) => {
//     setValues((prev) => ({
//       ...prev,
//       [event.target.name]: event.target.value,
//     }));
//   };

//   const validate = () => {
//     const errors = {};
//     if (!values.name) errors.name = "Name is required";
//     if (!values.contactNumber.match(/^\d{10}$/))
//       errors.contactNumber = "Contact number must be 10 digits";
//     if (!values.email.match(/^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/))
//       errors.email = "Invalid email format";
//     if (!values.address) errors.address = "Address is required";
//     return errors;
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const validationErrors = validate();
//     setErrors(validationErrors);

//     if (Object.keys(validationErrors).length === 0) {
//       alert("Registration successful!");
//       navigate("/home");
//     }
//   };

//   return (
//     <div className="register-page">
//       <VerticalNav links={[
//         { name: "All Orders", path: "/orders" },
//         { name: "Add New Customer", path: "/register" },
//         { name: "LogOut", path: "/logout" }
//       ]} />
//       <div className="register-content">
//         <div className="form-container">
//           <div className="form-content">
//             <h2 className="register-title">Customer Registration</h2>
//             <form onSubmit={handleSubmit}>
//               <div className="mb-3">
//                 <label htmlFor="name" className="input-field-names">
//                   <strong>Name</strong>
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Enter your Name"
//                   name="name"
//                   onChange={handleInput}
//                   className="form-control"
//                 />
//                 {errors.name && <span className="text-danger">{errors.name}</span>}
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="contactNumber" className="input-field-names">
//                   <strong>Contact Number</strong>
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Enter your Contact Number"
//                   name="contactNumber"
//                   onChange={handleInput}
//                   className="form-control"
//                 />
//                 {errors.contactNumber && (
//                   <span className="text-danger">{errors.contactNumber}</span>
//                 )}
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="email" className="input-field-names">
//                   <strong>Email</strong>
//                 </label>
//                 <input
//                   type="email"
//                   placeholder="Enter your Email"
//                   name="email"
//                   onChange={handleInput}
//                   className="form-control"
//                 />
//                 {errors.email && (
//                   <span className="text-danger">{errors.email}</span>
//                 )}
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="address" className="input-field-names">
//                   <strong>Courier Address</strong>
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Enter your Courier Address"
//                   name="address"
//                   onChange={handleInput}
//                   className="form-control"
//                 />
//                 {errors.address && (
//                   <span className="text-danger">{errors.address}</span>
//                 )}
//               </div>
//               <div className="form-footer">
//                 <button type="submit" className="btn-success">
//                   Register
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Register;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import VerticalNav from './VerticalNav'; // Import the navigation component
import './registerdetails.css'; // Import the custom CSS
// import logo from './images/logo.jpg';

function Register() {
  const [values, setValues] = useState({
    name: "",
    contactNumber: "",
    email: "",
    address: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const validate = () => {
    const errors = {};
    if (!values.name) errors.name = "Name is required";
    if (!values.contactNumber.match(/^\d{10}$/))
      errors.contactNumber = "Contact number must be 10 digits";
    if (!values.email.match(/^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/))
      errors.email = "Invalid email format";
    if (!values.address) errors.address = "Address is required";
    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Registration successful!");
      navigate("/home");
    }
  };

  return (
    <div className="register-page">
      <VerticalNav links={[
        { name: "All Orders", path: "/orders" },
        { name: "Add New Customer", path: "/register" },
        { name: "LogOut", path: "/logout" }
      ]} />
      <div className="register-content">
        <div className="form-container">
          {/* <img src={logo} alt="Logo" className="logo-left" onClick={() => navigate("/home")} /> */}
          <div className="form-content">
            <h2 className="register-title">Customer Registration</h2>
            <form onSubmit={handleSubmit}>
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
                <label htmlFor="contactNumber" className="input-field-names">
                  <strong>Contact Number</strong>
                </label>
                <input
                  type="text"
                  placeholder="Enter your Contact Number"
                  name="contactNumber"
                  onChange={handleInput}
                  className="form-control"
                />
                {errors.contactNumber && (
                  <span className="text-danger">{errors.contactNumber}</span>
                )}
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
                <label htmlFor="address" className="input-field-names">
                  <strong>Courier Address</strong>
                </label>
                <input
                  type="text"
                  placeholder="Enter your Courier Address"
                  name="address"
                  onChange={handleInput}
                  className="form-control"
                />
                {errors.address && (
                  <span className="text-danger">{errors.address}</span>
                )}
              </div>
              <div className="form-footer">
                <button type="submit" className="btn-success">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
