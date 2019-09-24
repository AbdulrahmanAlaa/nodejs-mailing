// Registering All Application Routes
import express from 'express';
import email from './email.mjs';

const router = express.Router();

/** Initializing Email Module Routes */
router.use('/email', email);

export default router;
