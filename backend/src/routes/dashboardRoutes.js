const express = require("express");
const db = require("../db/database");

const router = express.Router();

router.get("/dashboard", (req, res) => {
  const { month } = req.query;

  if (!month) {
    return res.status(400).json({ error: "Month is required" });
  }

  db.get(
    `
    SELECT 
      COUNT(DISTINCT ngo_id) AS ngos,
      SUM(people_helped) AS people,
      SUM(events_conducted) AS events,
      SUM(funds_utilized) AS funds
    FROM reports
    WHERE month = ?
    `,
    [month],
    (err, row) => {
      if (err) {
        return res.status(500).json({ error: "Database error" });
      }
      res.json(row);
    }
  );
});

module.exports = router;
