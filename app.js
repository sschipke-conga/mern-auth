const express = require("express");
const mongoose = require("mongoose")
const bodyParser = require("body-parser");
const passport = require("passport");

const users = require("./routes/api/users");

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

app.use(passport.initialize());

require("./config/passport")(passport);

app.use("/api/users", users);


module.exports = app;