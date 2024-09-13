/* eslint-disable @typescript-eslint/no-explicit-any */
import { Movies } from "../Movies/movie.model";
import { TReview } from "./review.interface";
import { Review } from "./review.model";

const addReview = async (
  slug: string,
  reviewData: Partial<TReview>
): Promise<TReview | any> => {
  const session = await Movies.startSession();

  const movie = await Movies.findOne({ slug });

  if (!movie) {
    throw new Error("Movie not found");
  }

  try {
    session.startTransaction();

    const review = await Review.create(
      [
        {
          movie: movie._id,
          ...reviewData,
        },
      ],
      { session }
    );

    const reviewsCount = await Review.countDocuments({
      movie: movie._id,
    }).session(session);

    // throw new Error("Movie not found");

    await Movies.updateOne({ slug }, { totalRating: reviewsCount }, { session });

    await session.commitTransaction();

    return review[0];
  } catch (error) {
    await session.abortTransaction();
    throw error;
  }

  session.endSession();
};

export const ReviewServices = {
  addReview,
  
};