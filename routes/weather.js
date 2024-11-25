const express = require("express");
const router = express.Router();
const { getWeather } = require("../controllers/weather");

// Route to get weather data
router.route("/").get(getWeather);

exports = module.exports = router;
