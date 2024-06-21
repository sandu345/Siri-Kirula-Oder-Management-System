const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "register",
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to the database');
  }
});

app.post("/signup", (req, res) => {
  const checkEmailSql = "SELECT * FROM login WHERE email = ?";
  db.query(checkEmailSql, [req.body.email], (err, data) => {
    if (err) {
      console.error('Error checking email:', err);
      return res.json("Error");
    }
    if (data.length > 0) {
      console.log('User already exists:', req.body.email);
      return res.json("User already exists");
    } else {
      const sql = "INSERT INTO login (name, email, password) VALUES (?)";
      const values = [req.body.name, req.body.email, req.body.password];
      db.query(sql, [values], (err, data) => {
        if (err) {
          console.error('Error inserting user:', err);
          return res.json("Error");
        }
        console.log('User inserted:', values);
        return res.json("Success");
      });
    }
  });
});

app.post("/login", (req, res) => {
  const sql = "SELECT * FROM login WHERE email = ? AND password = ?";
  console.log('Login request received:', req.body.email, req.body.password); // Debugging log
  db.query(sql, [req.body.email, req.body.password], (err, data) => {
    if (err) {
      console.error('Error during login:', err);
      return res.json("Error");
    }
    if (data.length > 0) {
      console.log('Login success:', req.body.email);
      return res.json("Success");
    } else {
      console.log('Login failed:', req.body.email);
      return res.json("Fail");
    }
  });
});

app.listen(3001, () => {
  console.log("Running the backend server...");
});
