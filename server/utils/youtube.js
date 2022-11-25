const { google } = require("googleapis");

require("dotenv").config();

const apiKey = process.env.YOUTUBE_API_KEY;

const youtube = google.youtube({
  version: "v3",
  auth: apiKey,
});

const search = async (req, res, next) => {
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

const videos = async (req, res, next) => {
  const params = {
    part: "snippet",
    id: req.body.id,
  };
  try {
    const response = await youtube.videos.list(params);
    res.send(response.data);
  } catch (err) {
    next(err);
  }
};

const commentThreads = async (req, res, next) => {
  const params = {
    part: "snippet",
    videoId: req.query.search_query,
  };
  try {
    const response = await youtube.commentThreads.list(params);
    res.send(response.data);
  } catch (err) {
    next(err);
  }
};

const videoDetailsAndComments = async (req, res, next) => {
  const videoParams = {
    part: "snippet",
    id: req.body.id,
  };

  const commentThreadParams = {
    part: "snippet,replies",
    videoId: req.body.id,
    maxResults: 100,
  };

  let response = [];
  try {
    const videoDetails = await youtube.videos.list(videoParams);
    response.push(videoDetails.data);
  } catch (err) {
    next(err);
  }
  try {
    const comments = await youtube.commentThreads.list(commentThreadParams);
    response.push(comments.data);
    res.send(response);
  } catch (err) {
    next(err);
  }
};

exports.search = search;
exports.videos = videos;
exports.commentThreads = commentThreads;
exports.videoDetailsAndComments = videoDetailsAndComments;
