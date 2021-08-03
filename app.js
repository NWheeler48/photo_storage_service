import express from 'express';
import logger from './utils/logger.cjs';
import * as firebaseService from './services/firebaseService.cjs';
import { router } from './routes/routes.js';

const app = express();

// TODO: Configure port.
const port = 3000;
const host = 'localhost';

app.use('/', router);

app.listen(port, () => {
  console.log('Server started...');
  logger.info(`Server started and is listening on Port: ${port}`);
});

firebaseService.createUser("test@gmail.com", '1234567')
.then((userRecord) => {
  logger.info(`Created new user: ${userRecord.uid}`);
  console.log('Created new user: ', userRecord.uid);
}).catch((error) => {
  logger.info(`Error creating new user: ${error}`);
  console.log('Error creating new user: ', error);
});