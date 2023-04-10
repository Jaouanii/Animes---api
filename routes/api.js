import express from "express";
import { index, details } from "../controllers/apiController.js";

const apiRouter = express.Router();

apiRouter.get('/', index );
apiRouter.get('/:id', details);

export default apiRouter;