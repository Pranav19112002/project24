const express = require('express');
const router = express.Router();
const User = require("../model/user");

router.post("/register", async (req, res) => {
  try {
    const newUser = new User(req.body);
    // Hash the password before saving (using bcrypt, for example)
    // newUser.password = await bcrypt.hash(newUser.password, 10);
    const savedUser = await newUser.save();
    res.status(201).json({ message: "User registered successfully", user: savedUser });
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(400).json({ error: "Registration failed" });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Hash the password before querying the database
    // const hashedPassword = await bcrypt.hash(password, 10);
    const foundUser = await User.findOne({ email, password });
    
    if (foundUser) {
      const { name, email, isAdmin, _id } = foundUser;
      res.json({ name, email, isAdmin, _id });
    } else {
      res.status(400).json({ message: "Login failed" });
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
