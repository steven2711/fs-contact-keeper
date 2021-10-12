const express = require("express");
const { registerUser } = require("../controllers/users");
const { registerValidation } = require("../middleware/validation");

const router = express.Router();

router.route("/").post(registerValidation, registerUser);

module.exports = router;
