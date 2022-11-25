const express = require("express");
const router = express.Router();
const {
  search,
  videos,
  commentThreads,
  videoDetailsAndComments,
} = require("../utils/youtube");

router.get("/", (req, res) => {
  res.send("Hello from youtube route.");
});

router.get("/search", search);

router.post("/videos", videoDetailsAndComments);

router.post("/commentThreads", commentThreads);

module.exports = router;
