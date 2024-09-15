import { Request, Response } from "express"
import { MovieServices } from "./movie.serve"

const createMovie = async (req: Request, res: Response) => {
    const movieData=req.body
    const result = await MovieServices.createMovie(movieData)
    res.json(
        {
            success: true,
            message: "Data inserted successfully",
            data: result
        }
    )

}

const getAllMovies = async (req: Request, res: Response) => {
    const allMovies = await MovieServices.getAllMovies()
    res.json({
        success: true,
        message: "Successfully fetch data from database",
        data: allMovies
    })
}
const UpdateMovies = async (req: Request, res: Response) => {
    const UpdateData= req.body
    const {movieId}=req.params
    const result = await MovieServices.updateMovie(movieId,UpdateData)
    res.json({
        success: true,
        message: "Successfully Update the data into database",
        data: result
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

export const moviesController = {
    createMovie,
    getAllMovies,
    getOneMovie,
    UpdateMovies
}