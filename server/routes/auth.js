const express = require("express");
const router = express.Router();

let apiKey = "";

const { google } = require("googleapis");
const youtube = google.youtube({
  version: "v3",
  auth: apiKey,
});

router.get("/", (req, res) => {
  res.send("Hello from our auth.");
});

router.post("/", (req, res) => {
  apiKey = JSON.stringify(req.body);
  console.log(req.body.apiKey);
  res.send(req.body.apiKey);
});

router.get("/search-with-googleapis", async (req, res, next) => {
  const params = {
    parentId: req.query.parentId,
    part: "snippet",
  };
  try {
    // const searchQuery = req.query.parentId;
    const response = await youtube.comments.list(params);

    const titles = response.data.items.map((item) => item.snippet.textDisplay);
    res.send(titles);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
