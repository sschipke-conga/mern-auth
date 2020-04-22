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
const db = proccess.env.MONGO_URI;

console.log(process.env.TEST_VAR)

mongoose.connect(
  db,
  {useNewUrlParser: true}
)
.then(() => console.log('Mongo successfully connected!'))
.catch(err => console.error(err));

