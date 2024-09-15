import { TMovie } from "./movie.interface";
import { Movies } from "./movie.model";
import slugify from 'slugify';

const createMovie = async (payLoad: TMovie) => {
  const {title,releaseDate}=payLoad
  const makeSlug=`${title}${releaseDate}`;
  const slugifyString=slugify(makeSlug,"_")
  payLoad.slug=slugifyString
    const result = await Movies.create(payLoad);
    return result
}

const getAllMovies = async () => {
    const result = await Movies.find()
    return result
}

// get a single movie
const getSingleMovie = async (id: string) => {
    const singleMovie = await Movies.findById({ _id: id })
    return singleMovie;
}
const updateMovie = async (id: string, payLoad: Partial<TMovie>) => {
    const updateMovie = await Movies.findOneAndUpdate({ _id: id }, payLoad, { new: true })
    return updateMovie;
}

export const MovieServices = {
    createMovie,
    getAllMovies,
    getSingleMovie,
    updateMovie
}