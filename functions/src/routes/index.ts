// Registering All Application Routes
import * as express from 'express';
import email from './email';

const router = express.Router();

/** Initializing Email Module Routes */
router.use('/email', email);

export default router;
