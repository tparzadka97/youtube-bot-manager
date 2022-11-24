const express = require("express");
const router = express.Router();
const { search } = require("../utils/youtube");

router.get("/", (req, res) => {
  res.send("Hello from youtube route.");
});

router.get("/search", search);

module.exports = router;
