const express = require("express");
const cors = require("cors");

const reportRoutes = require("./routes/reportRoutes");
const uploadRoutes = require("./routes/uploadRoutes");
const jobRoutes = require("./routes/jobRoutes");
const dashboardRoutes = require("./routes/dashboardRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("NGO Reporting API is running");
});

app.use("/", reportRoutes);
app.use("/", uploadRoutes);
app.use("/", jobRoutes);
app.use("/", dashboardRoutes);

module.exports = app;
