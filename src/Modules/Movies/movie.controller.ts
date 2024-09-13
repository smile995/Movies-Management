import { Request, Response } from "express"
import { MovieServices } from "./movie.serve"

const createMovieController = async (req: Request, res: Response) => {
    const result = await MovieServices.createMovie(req.body)
    res.json(
        {
            success: true,
            message: "Data inserted successfully",
            data: result
        }
    )

}

const getAllMovies = async (req: Request, res: Response) => {
    const allMovies = await MovieServices.AllMovies();
    res.json({
        success: true,
        message: "Successfully fetch data from database",
        data: allMovies
    })
}
// get a movie by id that come from  params
const getOneMovie = async (req: Request, res: Response) => {
    const { movieId } = req.params;
    const oneMovie = await MovieServices.getSingleMovie(movieId);
    res.json({
        success: true,
        data: oneMovie
    })
}
// practicing task
const taskPractice = async (req: Request, res: Response) => {
    const result = await MovieServices.practiceTask("practice keep going");
    res.json({
        success: true,
        data: result
    })
}
export const moviesController = {
    createMovieController,
    getAllMovies,
    taskPractice,
    getOneMovie
}