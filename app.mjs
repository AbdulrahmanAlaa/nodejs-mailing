'use strict';
// NPM 3rd Party Modules
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// App Modules
import appRoutes from './routes/index.mjs';

const app = express();

// Allow Cross Origin Requests
app.use(cors());

// To parse application/json header.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: '5mb', extended: true }));

// Initialize Application APIs Routes
app.use('/api', appRoutes);

// Start the app by listening on the default Host port
app.listen(process.env.PORT || 3000, () => {
  console.log('Ready...');
});
