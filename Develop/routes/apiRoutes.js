const express = require("express");
const routesApi = require("routesApi");

const PORT = 3001;
const app = express();

app.get("/", (req, res) => {
  res.send("Visit http://localhost:3001/index.html");
});

app.get("./index.html", (req, res) => res.json(routesApi));

app.listen(PORT, () =>
  console.log(`app listening at http://localhost:${PORT}`)
);
