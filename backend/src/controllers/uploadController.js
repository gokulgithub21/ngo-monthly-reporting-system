const { v4: uuidv4 } = require("uuid");
const db = require("../db/database");
const processCSV = require("../workers/csvWorker");

exports.uploadCSV = (req, res) => {
  const jobId = uuidv4();

  db.run(
    "INSERT INTO jobs VALUES (?, ?, ?, ?, ?)",
    [jobId, "PROCESSING", 0, 0, 0]
  );

  processCSV(req.file.path, jobId);

  res.json({ job_id: jobId });
};
