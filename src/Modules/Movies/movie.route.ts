
import express from "express"
import { moviesController } from "./movie.controller";
const router= express.Router();
// posting a movie data from this route
router.post("/create-movie",moviesController.createMovie)
// getting all the movies
router.get("/",moviesController.getAllMovies)
// practicing route

// find a movie
router.get("/:slug",moviesController.getOneMovie)
router.patch("/:slug",moviesController.UpdateMovies)

export const MoviesRouter= router;

