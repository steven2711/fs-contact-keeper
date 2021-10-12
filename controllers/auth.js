const User = require("../models/User");
const jwt = require("jsonwebtoken");

// @route GET api/v1/auth
// @desc Get logged in user
// @access Private

exports.getUserInfo = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);

    res.status(200).json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: "Server error" });
  }
};

// @route POST api/v1/auth
// @desc Auth user and get token
// @access Public

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    const token = user.getSignedJwtToken();

    if (!token) {
      return res.status(500).json({ msg: "Cannot create token" });
    }

    res.status(200).json({ token });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: "Server error" });
  }
};
