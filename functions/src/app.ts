'use strict';
// NPM 3rd Party Modules
import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// App Modules
import appRoutes from './routes';

const app = express();

// Allow Cross Origin Requests
app.use(cors());

// To parse application/json header.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Initialize Application APIs Routes
app.use('/api', appRoutes);

// Start the app by listening on the default Host port
app.listen(process.env.PORT || 3000, () => {
  console.log('Ready...');
});

export default app;
