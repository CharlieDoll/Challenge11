const express = require("express");

const app = express();
const PORT = process.env.PORT || 3001;
const htmlRoutes = require("./routes/htmlRoutes");
const apiRoutes = require("./routes/apiRoutes");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);
app.listen(PORT, () => {
  console.log(`app listening on PORT ${PORT}`);
  app.delete("/", (req, res) => {
    console.log(req.method); // "DELETE"
  });
});
