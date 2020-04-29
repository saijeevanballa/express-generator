const express = require("express");
const app = express();

app.get("/", function(req, res) {
  res.send("Hello World");
});

app.use(express.static("public"));

module.exports = app;
