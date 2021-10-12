const express = require("express");
const { getUserInfo, loginUser } = require("../controllers/auth");

const router = express.Router();

// Middleware
const { loginValidation } = require("../middleware/validation");
const auth = require("../middleware/auth");

router.route("/").get(auth, getUserInfo).post(loginValidation, loginUser);

module.exports = router;
