import * as express from "express";
import { Application, NextFunction, Response, Request } from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as api from "./api";
const app: Application = express();

// cors middleware
app.use(cors());
// body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function (req: Request, res: Response, next: NextFunction) {
  res.status(200).sendFile(`${__dirname}/public/index.html`);
});

//  serve Static files
app.use(express.static("public"));
app.use("/v1", api);

// 404 Handler
app.get('*', (req: Request, res: Response) => res.status(404).send('Page Not found 404'));

// Error Handler
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(error)
  res.status((error as any).code < 600 ? (error as any).code : 500).send({ errors: error.message || (error as any).error || "Internal Server Error 500" })
});

export = app;