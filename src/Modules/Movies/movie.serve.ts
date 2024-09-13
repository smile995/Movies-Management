import { TMovie } from "./movie.interface";
import { Movies } from "./movie.model";

const createMovie=async(payLoad:TMovie)=>{
    const result= await Movies.create(payLoad);
    return result
}
const AllMovies=async()=>{
    const result= await Movies.find()
    return result
}
const practiceTask=async(a:string)=>{
    const result= a;
    return result;

}

// get a single movie
const getSingleMovie=async(id:string)=>{
const singleMovie= await Movies.findById({_id:id});
console.log("service",singleMovie);

return singleMovie;
}

export const MovieServices={
    createMovie,
    AllMovies,
    practiceTask,
    getSingleMovie
}