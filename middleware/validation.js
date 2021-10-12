const { body, validationResult } = require("express-validator");

exports.registerValidation = async (req, res, next) => {
  const nameErrorMessage = "Please add name";
  const emailErrorMessage = "Please include a valid email";
  const passwordErrorMessage =
    "Please enter password with 6 or more characters";

  const validators = [
    body("name", nameErrorMessage).not().isEmpty(),
    body("email", emailErrorMessage).isEmail(),
    body("password", passwordErrorMessage).isLength({ min: 6 }),
  ];

  await Promise.all(validators.map((validation) => validation.run(req)));

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  next();
};

exports.loginValidation = async (req, res, next) => {
  const emailErrorMessage = "Please include a valid email";
  const passwordErrorMessage = "Password is required";

  const validators = [
    body("email", emailErrorMessage).isEmail(),
    body("password", passwordErrorMessage).exists({ checkFalsy: true }),
  ];

  await Promise.all(validators.map((validation) => validation.run(req)));

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  next();
};

exports.contactValidation = async (req, res, next) => {
  const nameErrorMessage = "Please include a name";

  const validators = [body("name", nameErrorMessage).not().isEmpty()];

  await Promise.all(validators.map((validation) => validation.run(req)));

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  next();
};
