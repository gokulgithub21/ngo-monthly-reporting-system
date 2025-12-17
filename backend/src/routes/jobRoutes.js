const express = require("express");
const db = require("../db/database");
const router = express.Router();

router.get("/job-status/:id", (req, res) => {
  db.get("SELECT * FROM jobs WHERE id=?", [req.params.id], (err, row) => {
    res.json(row);
  });
});

module.exports = router;
