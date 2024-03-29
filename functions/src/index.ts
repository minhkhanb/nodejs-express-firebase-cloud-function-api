import * as express from 'express';
import * as cors from 'cors';

import * as functions from 'firebase-functions';

// The Firebase Admin SDK to access Firestore.

import * as routes from './routes';

const app = express();

// Automatically allow cross-origin requests
app.use(cors({ origin: true }));

// Add middleware to authenticate requests
// app.use(myMiddleware);

app.use('/v1', routes.userRoutes);

// Expose Express API as a single Cloud Function:
export const api = functions.https.onRequest(app);
