// 
import express from "express";

import { details, index } from "../controllers/publicController.js";

const publicRouter = express.Router();


publicRouter.get('/', index);
publicRouter.get('/animes/:id', details);

export default publicRouter ;
