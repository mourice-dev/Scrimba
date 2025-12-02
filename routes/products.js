/**
 * Challenge 1:
 *
 *   - Use express.Router() to export a router called productsRouter
 *
 *    It should mount the '/api/products' and '/api/products/genres' routes.
 *    These should use the two functions from productsControllers.js: getProducts() and getGenres().
 *    Be careful here - what is the common pitfall?
 *
 *    hint.md for help!
 *
 * @format
 */

import express from "express";
import { getProducts, getGenres } from "../controllers/productersControllers.js";

const productsRouter = express.Router();

productsRouter.get("/", getProducts);
productsRouter.get("/genres", getGenres);

export default productsRouter;