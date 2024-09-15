import { Schema, model } from "mongoose";
import { TMovie } from "./movie.interface";

const movieSchema = new Schema<TMovie>({
    title: { type: String, required: [true, "Title is required"] },
    description: { type: String, required: [true, "Description is required"] },
    releaseDate: { type: Date, required: [true, "Date is required"] },
    genre: { type: String, required: [true, "Genre is required"] },
    slug:{type:String},
    isDeleted: { type: Boolean, default: false },
    viewCount: { type: Number, default: 0 },
    totalRating: { type: Number, default: 0 }


});

//  model is a collection of data. model take two perameter,example given below:
// model<interface>("collectionName",schema)
export const Movies = model<TMovie>("Movies", movieSchema)



