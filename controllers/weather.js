const axios = require("axios");
const ErrorResponse = require("../utils/errorResponse");

exports.getWeather = async (req, res, next) => {
  const { location, startDate, endDate } = req.query;

  if (req.query.startDate && req.query.endDate) {
    return getWeatherByDateRange(req, res, next);
  }

  try {
    const response = await axios.get(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/?key=${process.env.API_KEY}`
    );

    return res.status(200).json({
      success: true,
      data: response.data,
    });
  } catch (err) {
    // Remove 'return' and just use next()
    next(new ErrorResponse(err.message, 500));
  }
};

async function getWeatherByDateRange(req, res, next) {
  const { location, startDate, endDate } = req.query;

  try {
    const response = await axios.get(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}/${startDate}/${endDate}/?key=${process.env.API_KEY}`
    );

    return res.status(200).json({
      success: true,
      data: response.data,
    });
  } catch (err) {
    next(new ErrorResponse(err.message, 500));
  }
}
