const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const port = 5000;

const app = express();

//middlewares

app.use(cors());
app.use(express.json());

// making connection with mysql server

var db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'postbook2',
    port: 3377
  });

  db.connect((err) => {
    if(err){
    console.log("something went worng while connecting to the database: ",err);
    throw err;    
    }else{
      console.log("Mysql server connected.....");  
    }
  });
//getting user data from server

app.post("/getUserInfo",(req,res) => {
 console.log(req.body);
});

app.listen(port, () =>{
  console.log('server is runninh on port ${port}');
});