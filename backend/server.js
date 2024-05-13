const express = require("express");
const bodyParser = require('body-parser');
const mysql2 = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

const pool = mysql2.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'Fat@2021#ima',
    database: 'signup',
});

app.post('/signup', (req, res) => {
    const insertQuery = "INSERT INTO login (`name`, `email`, `password`) VALUES (?, ?, ?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ];
    pool.query(insertQuery, values, (err, data) => {
        if (err) {
            return res.status(500).json({ error: "Error signing up" });
        }
        return res.status(200).json({ success: "Signed up successfully" });
    });
});

app.post('/login', (req, res) => {
    const selectQuery = "SELECT * FROM login WHERE `email` = ? AND `password` = ?";
    pool.query(selectQuery, [req.body.email, req.body.password], (err, data) => {
        if (err) {
            return res.status(500).json({ error: "Error logging in" });
        }
        if (data.length > 0) {
            return res.status(200).json({ success: "Logged in successfully" });
        } else {
            return res.status(401).json({ error: "Invalid credentials" });
        }
    });
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});



// const express = require("express");
// const mysql2 = require("mysql2");
// const cors = require("cors");

// const app = express();
// app.use(cors());
// app.use(express.json());

// const db = mysql2.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'Fat@2021#ima',
//     database: 'signup',
// });

// db.connect((err) => {
//     if (err) {
//         console.error('Error connecting to MySQL database:', err);
//         return;
//     }
//     console.log('Connected to MySQL database');
// });

// app.post('/signup', (req, res) => {
//     const { name, email, password } = req.body;
//     console.log(name,email,password)
//     const insertQuery = "INSERT INTO login (name, email, password) VALUES (?, ?, ?)";
//     db.query(insertQuery, [name, email, password], (err, result) => {
//         if (err) {
//             console.error('Error executing MySQL query:', err);
//             return res.status(500).json({ error: "Error signing up" });
//         }
//         console.log('Data inserted successfully:', result);
//         return res.status(200).json({ success: "Signed up successfully" });
//     });
// });

// app.post('/login', (req, res) => {
//         console.log(req.body);
//         const selectQuery = "SELECT * FROM login WHERE `email` = ? AND `password` = ?";
//         pool.query(selectQuery, [req.body.email, req.body.password], (err, data) => {
//             if (err) {
//                 return res.status(500).json({ error: "Error logging in" });
//             }
//             if (data.length > 0) {
//                 return res.status(200).json({ success: "Logged in successfully" });
//             } else {
//                 return res.status(401).json({ error: "Invalid credentials" });
//             }
//         });
//     });
// app.get("/",(req,res)=>{
//     res.send("Hello")
// })
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
    