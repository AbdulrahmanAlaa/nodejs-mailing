import express from 'express';
import expressValidator from 'express-validator';

import email from '../controllers/email.controller.mjs';
import emailValidation from './validation/email.mjs';

// ...rest of the initial code omitted for simplicity.
const { check, validationResult } = expressValidator;

const router = express.Router();

/** Email Module Routes */
router.post(
  '/',
  emailValidation.sendEmail,
  (req, res,next) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next()
  },
  email.send
);

export default router;
