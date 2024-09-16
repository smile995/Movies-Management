/* eslint-disable @typescript-eslint/no-explicit-any */

import { TReview } from "./review.interface"
import { Review } from "./review.model"

const createReview = async (movieId:any, payload: Partial<TReview>) => {
  payload.movie = movieId
  const result = await Review.create(payload);
  return result
}


export const reviewService = {
  createReview,
}