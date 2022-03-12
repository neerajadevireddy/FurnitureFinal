const express = require("express");
const { userSignup } = require("../controllers/user");
const userRoutes = express.Router();
userRoutes.post("/:user/signup",userSignup)
userRoutes.post("/:user/signin",userSignin)

module.exports=userRoutes

