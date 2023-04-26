const mongoose = require("mongoose");

const articleSchema = mongoose.Schema({
  author: String,
  title: String,
  description: String,
  url: String,
  urlToImage: String,
  publishedAt: Date,
  content: String,
});

const Article = mongoose.model("articles", articleSchema);

module.exports = Article;
