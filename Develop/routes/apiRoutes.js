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
  req.body.push(db);
  // fs write file method - rewrite db.json file - use db variable line 16
  fs.writeFile(
    ".db/notes.html.json",
    JSON.stringify(req.body, null, 4),
    (writeErr) =>
      writeErr
        ? console.error(writeErr)
        : console.info("Successfully updated notes!")
  );
  //  res.json req.body
});

// router.get("./api/index.html", (req, res) => res.json(routesApi));

// router.post("/notes.html", (req, res) =>
//   console.info(`${req.method} request received to add a note`)
// );

module.exports = router;
