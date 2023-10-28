const express = require("express");
const cors = require("cors");
const app = express();

const port = process.env.PORT || 5000;
const categories = require("./data/categories.json");
const news = require("./data/news.json");
app.use(cors());
app.get("/", (req, res) => {
  res.send("Dragon is Running");
});
app.get("/categories", (req, res) => {
  res.send(categories);
});
app.get("/news", (req, res) => {
  res.send(news);
});
app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  const selectedNews = news.find((n) => n._id == id);
  res.send(selectedNews);
});
app.get("/categories/:id", (req, res) => {
  const id = req.params.id;
  const categoryNews = id > 0 ? news.filter((n) => n.category_id == id) : news;
  res.send(categoryNews);
});

app.listen(port);
