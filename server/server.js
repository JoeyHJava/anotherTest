const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(express.static("public"));

// ========================
// Routes
// ========================
app.use(cors());
app.get("/", (req, res) => {
  console.log("req", req);
  res.send({ message: "more............." });
});

app.post("/quotes", (req, res) => {
  console.log("/qoutes post", req.body);
  quotesCollection
    .insertOne(req.body)
    .then((result) => {
      res.redirect("/");
    })
    .catch((error) => console.error(error));
});

const port = 3000;
app.listen(port, function () {
  console.log(`listening on ${port}`);
});
