const express = require("express");
const auth = require("../routes/auth");
const youtube = require("../routes/youtube");

module.exports = function (app) {
  app.use(express.json());
  app.use("/api/auth", auth);
  app.use("/api/youtube", youtube);
};
