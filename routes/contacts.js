const express = require("express");
const {
  getUserContacts,
  updateContact,
  addNewContact,
  deleteContact,
} = require("../controllers/contacts");

const router = express.Router();

// Middleware
const { contactValidation } = require("../middleware/validation");
const auth = require("../middleware/auth");

router.use(auth);

router.route("/").get(getUserContacts).post(contactValidation, addNewContact);
router.route("/:id").put(updateContact).delete(deleteContact);

module.exports = router;
