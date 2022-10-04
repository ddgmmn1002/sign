import express from 'express';
import { readPosting, getPosting, home, postPosting, readOnePosting, deletePosting, getEditPosting, postEditPosting } from '../controller/rootController';

const rootRouter = express.Router();

rootRouter.get("/", home);

rootRouter.get("/post", getPosting);
rootRouter.post("/post", postPosting);

rootRouter.get("/read", readPosting);

rootRouter.get("/read/:id", readOnePosting);

rootRouter.get("/delete/:id", deletePosting);

rootRouter.get("/edit/:id", getEditPosting);
rootRouter.post("/edit/:id", postEditPosting);

export default rootRouter;