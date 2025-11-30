/** @format */

import express from "express";
import { getAllData } from "../controllers/getAllData.js";
import { getDataByPathParams } from "../controllers/getDataByPathParams.js";

export const apiRouter = express.Router();

apiRouter.get("/", getAllData);

apiRouter.get("/:field/:term", getDataByPathParams);
// /** @format */
// import express from "express";

// import { productersController } from "../controllers/productersController.js";

// const apiRoute = express.Router();
// apiRoute.get("/", productersController);

// export { apiRoute };
