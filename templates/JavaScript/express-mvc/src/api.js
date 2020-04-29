const express = require("express");
const userRouter = require("./user/router");
const auth = require("./utils/authenticate");
const app = express();

app.use("/user", auth, userRouter);

module.exports = app;
