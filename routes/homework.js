const express = require("express");
const router = express.Router();
const Homework = require("../models/homework");

router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

router.get("/homeworks", (req, res) => {
  Homework.find({}).then((homeworks) => {
    res.send(homeworks);
  });
});

router.post("/homeworks", (req, res) => {
  let title = req.body.title;
  let details = req.body.details;
  let dueDate = req.body.dueDate;
  let priority = req.body.priority;
  let status = req.body.status;

  let newHomework = new Homework({
    title,
    details,
    dueDate,
    priority,
    status,
  });
  newHomework.save().then((homeworkDoc) => {
    res.send(homeworkDoc);
  });
});

router.patch("/homeworks/:id", (req, res) => {
  Homework.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: req.body,
    }
  ).then(() => {
    res.sendStatus(200);
  });
});

router.delete("/homeworks/:id", (req, res) => {
  Homework.findOneAndRemove({
    _id: req.params.id,
  }).then((removedHomeworkDoc) => {
    res.send(removedHomeworkDoc);
  });
});

router.put("/homeworks/:id", (req, res) => {
  Homework.findOneAndUpdate({
    _id: req.params.id,
  });
});

module.exports = router;
