const router = require("express").Router();
let db = require("../db/db.json");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

router.get("/notes", (req, res) => {
  //   console.log(uuidv4());
  res.json(db);
});

router.post("/notes", (req, res) => {
  //   console.log(req.body);
  req.body.id = uuidv4();
  //   console.log("after");
  //   console.log(req.body);
  // push req.body in to db variable
  db.push(req.body);
  // fs write file method - rewrite db.json file - use db variable line 16
  fs.writeFile("./db/db.json", JSON.stringify(db), (writeErr) =>
    writeErr
      ? console.error(writeErr)
      : console.info("Successfully updated notes!")
  );
  res.json(req.body);
});

// router.get("./api/index.html", (req, res) => res.json(routesApi));

// router.post("/notes.html", (req, res) =>
//   console.info(`${req.method} request received to add a note`)
// );
router.delete("/notes/:id", (req, res) => {
  let noteID = req.params.id;
  db = db.filter((note) => note.id !== noteID);
  fs.writeFile("./db/db.json", JSON.stringify(db), (writeErr) =>
    writeErr
      ? console.error(writeErr)
      : console.info("Successfully updated notes!")
  );
  res.json({ message: "Successfully Deleted!" });
});
module.exports = router;
