
import express from "express"
import { moviesController } from "./movie.controller";
import { ReviewControllers } from "../Reviews/review.controller";
const router= express.Router();

// movies related route
router.post("/create-movie",moviesController.createMovie) //create movie
router.get("/",moviesController.getAllMovies) //get all movies
router.get("/:slug",moviesController.getOneMovie) //get single movies
router.patch("/:slug",moviesController.UpdateMovies) //update single movies


// review related routes
router.post("/:movieId/add-review",ReviewControllers.addReview) //create movie
router.get("/reviews",) //get all movies
router.get("/:movieId") //get single movies
router.patch("/:movieId",) //update single movies

export const MoviesRouter= router;

