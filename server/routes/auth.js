const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello from auth route.");
});

router.post("/", (req, res) => {
  process.env.YOUTUBE_API_KEY = req.body.apiKey;
  console.log("apiKey: ", process.env.YOUTUBE_API_KEY);
  res.send(req.body.apiKey);
});

module.exports = router;
