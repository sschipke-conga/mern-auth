const express = require("express");
const mongoose = require("mongoose")
const bodyParser = require("body-parser");

const app = express();

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(bodyParser.json());

//db config 
const db =require("./config/keys").mongoURI;

console.log('Testing! --->',require("./config/keys").test)

mongoose.connect(
  db,
  { useNewUrlParser: true, useUnifiedTopology: true  }
)
.then(() => console.log('Mongo successfully connected!'))
.catch(err => console.error(err));

module.exports = app;