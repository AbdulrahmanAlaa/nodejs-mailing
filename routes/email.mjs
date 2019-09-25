import express from 'express';

import email from '../controllers/email.controller.mjs';
import emailValidation from './validation/email.mjs';
import validationErrorHandler from './validation/index.mjs';



const router = express.Router();

/** Email Module Routes */
router.post(
  '/',
  // TODO: expect some invalid parameters and remove them like joi stripeUnknown
  emailValidation.sendEmail,
  validationErrorHandler,
  email.send
);

export default router;
