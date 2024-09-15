import express, { Request, Response } from "express";
import { MoviesRouter } from "./Modules/Movies/movie.route";
const app = express();
// parsers that must called in upperbody of a document
app.use(express.json())

// I will maintain here all the route but exicution will be in different file,

app.use('/api/movies',MoviesRouter);



// initial route controller
app.get('/', (req: Request, res: Response) => {
    res.send('Hello developer')
})


export default app;