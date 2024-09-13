import { Schema, model } from "mongoose";
import { Review, TMovie, } from "./movie.interface";

// schema that define the data type of interface
const reviewSchema = new Schema<Review>({
    email: { type: String,unique:true, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },

});
const movieSchema = new Schema<TMovie>({
    title: { type: String, required: [true, "Title is required"] },
    description: { type: String, required: [true, "Description is required"] },
    releaseDate: { type: Date, required: [true, "Date is required"] },
    genre: { type: String, required: [true, "Genre is required"] },
    reviews: { type: [reviewSchema] },
    isDeleted: { type: Boolean, default: false },
    viewCount: { type: Number, default: 0 },
    totalRating: { type: Number, default: 0 }


});

//  model is a collection of data. model take two perameter,example given below:
// model<interface>("collectionName",schema)
export const Movies = model<TMovie>("Movies", movieSchema)



