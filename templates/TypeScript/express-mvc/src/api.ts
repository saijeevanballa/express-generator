import * as express from "express";
import * as userRouter from "./user/router";
import { authenticate } from "./utils/authenticate";
const app = express();

app.use("/user", authenticate, userRouter);

export = app;