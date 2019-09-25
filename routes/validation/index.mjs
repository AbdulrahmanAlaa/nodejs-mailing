// ...rest of the initial code omitted for simplicity.
const { validationResult } = expressValidator;
import expressValidator from 'express-validator';
export default (req, res, next) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
  }