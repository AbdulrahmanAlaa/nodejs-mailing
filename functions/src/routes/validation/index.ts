import * as expressValidator from 'express-validator';

const { validationResult } = expressValidator;
export default (req: any, res: any, next: any) => {
  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  next();
};
