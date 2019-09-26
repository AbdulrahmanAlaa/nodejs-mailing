// ...rest of the initial code omitted for simplicity.
import * as expressValidator from 'express-validator';
const { check } = expressValidator;
export default {
  // POST /api/email
  sendEmail: [
    check('subject')
      .exists()
      .isString(),
    check('body')
      .exists()
      .isString(),
    check('to').isArray(),
    check('to.*')
      .isString()
      .isEmail()
  ]
};
