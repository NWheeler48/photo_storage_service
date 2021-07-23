import express from 'express';
import logger from './utils/logger.cjs';

const app = express();

// TODO: Configure port.
const port = 3000;
const host = 'localhost';

app.listen(port, () => {
  console.log('Server started...');
  logger.info(`Server started and is listening on Port: ${port}`);
})