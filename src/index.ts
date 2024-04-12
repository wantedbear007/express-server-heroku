import express, {Express, Request, Response} from "express";
import { sampleData } from "./data";
import { config } from "./config";
// import cors from "cors";

const app: Express = express();

const port = process.env.PORT || 3000

app.use("/health", (req: Request, res: Response) => {
    res.status(200).json({
      health: new Date() + " working"
    })
})


app.use("/get", (req: Request, res: Response) => {
  res.status(200).json(
    sampleData
  )
})
app.listen(config.server.port, () => {
  return console.log(`[server]: Server is running on ${config.server.port}`);
})