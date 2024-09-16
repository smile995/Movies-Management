
import { Request, Response } from "express";
import { reviewService } from "./review.service";


const addReview = async (req: Request, res: Response) => {
    const { movieId } = req.params;
    const reviewData = req.body;
    const result =await reviewService.createReview(movieId, reviewData)
    res.status(200).json({
        success: true,
        message:'Review added successfully',
        data:result

    })

}

// const getAllReviews = async (req: Request, res: Response) => {
//     try {
//         const result = await ReviewServices

//         res.status(200).json({
//             success: true,
//             message: "Reviews are fetched successfully !",
//             data: result,
//         });
//     } catch (err: any) {
//         res.status(500).json({
//             success: false,
//             message: "Could not fetch reviews!",
//             error: err,
//         });
//     }
// };

// const getReviewById = async (req: Request, res: Response) => {
//     try {
//         const { slug } = req.params;
//         const result = await ReviewServices

//         res.status(200).json({
//             success: true,
//             message: "Reviews are fetched successfully !",
//             data: result,
//         });
//     } catch (err: any) {
//         res.status(500).json({
//             success: false,
//             message: "Could not fetch reviews!",
//             error: err,
//         });
//     }
// };

// const updateReview = async (req: Request, res: Response) => {
//     try {
//         const { slug } = req.params;
//         const result = await ReviewServices.updateReview(slug, req.body);

//         res.status(200).json({
//             success: true,
//             message: "Reviews are fetched successfully !",
//             data: result,
//         });
//     } catch (err: any) {
//         res.status(500).json({
//             success: false,
//             message: "Could not fetch reviews!",
//             error: err,
//         });
//     }
// };

// const deleteReview = async (req: Request, res: Response) => {
//     try {
//         const { slug } = req.params;
//         const result = await ReviewServices.deleteReview(slug);

//         res.status(200).json({
//             success: true,
//             message: "Reviews are fetched successfully !",
//             data: result,
//         });
//     } catch (err: any) {
//         res.status(500).json({
//             success: false,
//             message: "Could not fetch reviews!",
//             error: err,
//         });
//     }
// };

export const ReviewControllers = {
    addReview,
};