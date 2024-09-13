
import express from "express"
import { moviesController } from "./movie.controller";
const router= express.Router();
// posting a movie data from this route
router.post("/",moviesController.createMovieController)
// getting all the movies
router.get("/",moviesController.getAllMovies)
// practicing route
router.get("/work",moviesController.taskPractice)
// find a movie
router.get("/:movieId",moviesController.getOneMovie)

export const MoviesRouter= router;

