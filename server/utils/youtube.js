const { google } = require("googleapis");

require("dotenv").config();

const apiKey = process.env.YOUTUBE_API_KEY;

const youtube = google.youtube({
  version: "v3",
  auth: apiKey,
});

const search = async (req, res, next) => {
  console.log("apiKey youtube.js: ", apiKey);
  const params = {
    part: "snippet",
    q: req.query.search_query,
  };
  try {
    const response = await youtube.search.list(params);
    const titles = response.data.items.map((item) => item.snippet.title);
    res.send(titles);
  } catch (err) {
    next(err);
  }
};

exports.search = search;
