import express, { Express, Request, Response } from "express";
import { sampleData } from "./data";

const app: Express = express();

const port =  3001;

app.get("/", (req: Request, res: Response) => {
  res.status(200).json(
    {
      health: new Date() + " server is active"
    }
  )
});

app.get("/registeredProducts", (req: Request, res: Response) => {
  res.status(200).json(
    sampleData
  )
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;