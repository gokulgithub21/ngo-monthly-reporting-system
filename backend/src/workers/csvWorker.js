const fs = require("fs");
const csv = require("csv-parser");
const db = require("../db/database");

module.exports = function (filePath, jobId) {
  let total = 0;
  let processed = 0;
  let failed = 0;

  fs.createReadStream(filePath)
    .pipe(csv())
    .on("data", (row) => {
      total++;
      const { ngo_id, month, people_helped, events_conducted, funds_utilized } = row;

      db.run(
        `INSERT OR IGNORE INTO reports VALUES (NULL, ?, ?, ?, ?, ?)`,
        [ngo_id, month, people_helped, events_conducted, funds_utilized],
        (err) => {
          if (err) failed++;
          processed++;
        }
      );
    })
    .on("end", () => {
      db.run(
        `UPDATE jobs SET status=?, total_rows=?, processed_rows=?, failed_rows=? WHERE id=?`,
        ["COMPLETED", total, processed, failed, jobId]
      );
      fs.unlinkSync(filePath);
    });
};
