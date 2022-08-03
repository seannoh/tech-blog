const express = require("express");

const homeRoutes = require("./home-routes");
const dashboardRoutes = require("./dashboard-routes");
const apiRoutes = require("./api");

const router = express.Router();

router.use("/", homeRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/api", apiRoutes);

module.exports = router;