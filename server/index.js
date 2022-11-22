const express = require("express");
const app = express();
const apiKey = "";

const { google } = require("googleapis");
const youtube = google.youtube({
  version: "v3",
  auth: apiKey,
});

app.get("/", (req, res) => {
  res.send("Hello from our server.");
});

app.get("/search-with-googleapis", async (req, res, next) => {
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

app.get("/api", (req, res) => {
  res.json({ users: ["userOne", "userTwo"] });
});

app.listen(3030, () => console.log("server started on port 3030"));
