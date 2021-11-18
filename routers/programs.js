const router = require("express").Router();
let programs = require("../models/programs.model");
router.get("/", (req, res) => {
  programs
    .find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      if (err) throw err;
    });
});
// ------------------------ ROUTER FOR (GET PROGRAM BY ID)
router.get("/getProgram/:id", (req, res) => {
  programs
    .findById(req.params.id)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      if (err) throw err;
    });
});
// ------------------------ ROUTER FOR (ADD NEW PROGRAM)
router.post("/add", (req, res) => {
  const title = req.body.title;
  const exercises = req.body.exercises;
  const background = req.body.background;

  const newProgram = new programs({
    title,
    exercises,
    background,
  });
  newProgram
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      if (err) throw err;
    });
});
// ------------------------ ROUTER FOR (EDIT PROGRAM BY ID)
router.put("/edit/:id", (req, res) => {
  programs.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
    if (err) console.log(err);
    res.json("program updated!!");
  });
});
// ------------------------ ROUTER FOR (DELETE PROGRAM BY ID)
router.delete("/delete/:id", (req, res) => {
  programs
    .findByIdAndDelete(req.params.id)
    .then(() => {
      programs
        .find()
        .then((data) => {
          res.json(data);
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
