const express = require("express");
const router = express.Router();
const { submitReport } = require("../controllers/reportController");

router.post("/report", submitReport);

module.exports = router;
