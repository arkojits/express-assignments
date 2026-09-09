import {body, validationResult} from 'express-validator';

const validateUser = [
  body('name')
    .notEmpty()
    .withMessage('Name is required'),

  body('username')
    .notEmpty()
    .withMessage('Username is required'),

  body('email')
    .isEmail()
    .withMessage('Valid email is required'),

  body('password')
    .isLength({min: 5})
    .withMessage('Password must be at least 5 characters'),

  body('role')
    .notEmpty()
    .withMessage('Role is required'),
];

const validateLogin = [
  body('username')
    .notEmpty()
    .withMessage('Username is required'),

  body('password')
    .notEmpty()
    .withMessage('Password is required'),
];

const validationErrors = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      errors: errors.array(),
    });
  }

  next();
};

export {
  validateUser,
  validateLogin,
  validationErrors,
};