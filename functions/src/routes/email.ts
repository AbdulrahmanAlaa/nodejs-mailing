import * as express from 'express';

import email from '../controllers/email.controller';
import emailValidation from './validation/email';
import validationErrorHandler from './validation';

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
