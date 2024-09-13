
export type Review ={
    email: string;
    rating: number;
    comment: string;
  }

  export type TMovie = {
    title: string;
    description: string;
    releaseDate: Date;
    genre: string;
    viewCount: number;
    totalRating: number;
    reviews:[Review]
    isDeleted?: boolean;
  };
 
  
   
  
