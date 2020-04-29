import * as express from "express";
import { Application, NextFunction, Response, Request } from "express";
const app: Application = express();

app.get("/", function(req: Request, res: Response, next: NextFunction ) {
  res.send("Hello World");
});

app.use(express.static("public"));

export = app;
