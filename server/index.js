const cors = require('cors')
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');

const db = mysql.createPool({
    host: "localhost",
    user: "user",
    password: "Tonelero146!",
    database: "cruddatabase",
    insecureAuth: true,
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/get",(req,res)=>{
    const  sqlSelect = "SELECT  * FROM movies_reviews "
    db.query(sqlSelect,(err,resut)=>{
        console.log(result)
    })

})
app.post("/api/insert", (req, res) => {
    const movieName = req.body.movieName;
    const movieReview = req.body.review;

    const sqlInsert = "INSERT INTO movie_reviews(movieName, movieRev) VALUES(?,?) "
    db.query(sqlInsert, [movieName, movieReview], (err, result) => {
        console.log(result)
    })
})

app.listen(3001, () => {
    console.log('running port 3001');
})