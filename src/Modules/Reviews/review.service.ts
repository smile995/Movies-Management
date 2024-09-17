/* eslint-disable @typescript-eslint/no-explicit-any */

import { startSession } from "mongoose";
import { Movies } from "../Movies/movie.model";
import { TReview } from "./review.interface"
import { Review } from "./review.model"


const createReview = async (movieId: any, payload: Partial<TReview>) => {
  const session = await startSession();
  try {
 session.startTransaction()
    payload.movie = movieId
    const result = (await Review.create(payload)).$session(session);
    const totalReview = await Review.countDocuments({ movie: movieId })
    await Movies.findOneAndUpdate([{ _id: movieId }, {
      totalRating: totalReview
    }, { new: true }, {session}])
    await session.commitTransaction();
  
    return result
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error("Review not added successfully")
  }
}


export const reviewService = {
  createReview,
}