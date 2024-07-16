const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

const posts = [
  {
    id: "01",
    username: "mahnoorliaquat",
    content: "I love coding!",
  },
  {
    id: "02",
    username: "mudasarliaquat",
    content: "Hard work is important to achieve success",
  },
  {
    id: "03",
    username: "muzammilliaquat",
    content: "I got selected for my 1st internship",
  },
  {
    id: "04",
    username: "mohsinliaquat",
    content: "I got selected for my job",
  },
];
app.get("/", (req, res) => {
  res.send("Welcome to my Quora post website....");
});

app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});

app.get("/posts/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/posts", (req, res) => {
  let { username, content } = req.body;
  posts.push({ username, content });
  res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === path.id);
  console.log(post);
  res.send("request working");
});

app.listen(port, () => {
  console.log("listening to port : 8080");
});
