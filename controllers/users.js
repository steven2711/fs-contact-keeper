const User = require("../models/User");
const jwt = require("jsonwebtoken");

// @route POST api/v1/users
// @desc Register a user
// @access Public

exports.registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }

    user = new User({ name, email, password });

    // Password is hashed at model level

    await user.save();

    const token = user.getSignedJwtToken();

    if (!token) {
      return res.status(500).json({ msg: "Cannot create token" });
    }

    res.status(201).json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Server error" });
  }
};
