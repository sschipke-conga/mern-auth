const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");

const User = require("../../models/User");

router.post("/register", (req, res) => {
  
  const { errors, isValid } = validateRegisterInput(re.body);

  if(!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then(user => {
    if(user) {
      return res.status(400).json({ email: "Email already exists."})
    } else {
      const { name, email, password } = req.body
      const newUser = new User({
        name,
        email,
        password
      });
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if(err) throw err;
          newUser.password = hash;
          newUser.save()
          .then(user => res.json(user))
          .catch(err => { 
            console.error(err)
            throw err });
        });
      });
    }
  });
});