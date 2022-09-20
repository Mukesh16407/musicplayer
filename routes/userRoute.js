const express = require("express");
const router = express.Router();

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/user");
const authMiddleWare = require("../middleware/authMiddleware");


router.post('/register',async(req,res)=>{

  try{
   
    const password = req.body.password;
    const salt = await bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hashSync(password, salt);
    req.body.password = hashedPassword;

    const user = new User(req.body);
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return res
        .status(200)
        .send({ message: "User already exists", success: false });
    } else {
      await user.save();
      return res
        .status(200)
        .send({ message: "User registered successfully", success: true });
    }
  }catch(error){
    return res.status(500).send({ message: error.message, success: false });
  }

})
router.post('/login', async(req,res)=>{

  try{
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res
        .status(200)
        .send({ message: "User does not exist", success: false });
    }
     
    const passwordsMatched = await bcrypt.compareSync(
      req.body.password,
      user.password
    );
    if (passwordsMatched) {
      const token = jwt.sign({ userId: user._id }, process.env.JWTPRIVATEKEY, {
        expiresIn: "1d",
      });
      return res.status(200).send({
        message: "User logged in successfully",
        success: true,
        data: token,
      });
    }else {
      return res
        .status(200)
        .send({ message: "Password is incorrect", success: false });
    }
  }catch(error){
    return res.status(500).send({ message: error.message, success: false });
  }

})

module.exports = router;