function validation(values) {
    let error = {};
    //const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  
    if (values.name === "") {
      error.name = "Name should not be empty.";
    }  else {
      error.name = "";
    }

    if (values.email === "") {
        error.email = "Email should not be empty.";
      }  else {
        error.email = "";
      }
  
    if (values.password === "") {
      error.password = "Password should not be empty.";
    } else if (!password_pattern.test(values.password)) {
      error.password =
        "Your password must be at least 8 characters long, and include at least one uppercase letter, one lowercase letter, and one digit.";
    } else {
      error.password = "";
    }
    return error;
  }
  
  export default validation;
  