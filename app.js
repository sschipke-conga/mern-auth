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

if (process.env.NODE_ENV === "production") {
  app.user(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "client", "build", "index.html")
    );
  });
}

//db config 
const db =process.env.MONGO_URI

mongoose.connect(
  db,
  { useNewUrlParser: true, useUnifiedTopology: true  }
)
.then(() => console.log('Mongo successfully connected!'))
.catch(err => console.error(err));

app.use(passport.initialize());

require("./config/passport")(passport);

app.use("/api/users", users);

app.get("/", (req, res) => {
  return res.status(200).json("MERN")
})


module.exports = app;