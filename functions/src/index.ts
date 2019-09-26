import * as functions from 'firebase-functions';
import all from './app';

export const app = functions.https.onRequest(all);
