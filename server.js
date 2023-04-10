import * as fs from 'node:fs/promises';
import express from 'express';
import https from 'node:https';
import apiRouter from './routes/api.js';
import publicRouter from './routes/public.js';

const options = {
    key: await fs.readFile('ca/key.pem'),
    cert: await fs.readFile('ca/cert.pem'),
};
 
const app = express();

const router = express.Router();

// les routes privées:

app.use('/', router);

app.use('/api/animes', apiRouter);


//route public 
app.use('/', publicRouter);

router.use(express.static('public'));

const server = https.createServer(options, app);

export default server;
