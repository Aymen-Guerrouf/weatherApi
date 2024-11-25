const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const path = require("path");
const rateLimit = require("express-rate-limit");
const colors = require("colors"); // Assuming you're using colors for red text
const {
  initializeRedis,
  redisCachingMiddleware,
} = require("./middleware/redis");

// Route files
const weather = require("./routes/weather");

// load env variables
dotenv.config({ path: "./config/config.env" });

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: {
    success: false,
    message: "Too many requests, please try again later.",
  },
});

async function initializeExpressServer() {
  const app = express();

  // apply rate limiter
  app.use(limiter);

  // body parser
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Connect to Redis
  await initializeRedis();

  // Dev logging middleware
  if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
  }

  // mount routers
  app.use("/api/weather", redisCachingMiddleware(), weather);

  const PORT = process.env.PORT || 5000;
  const server = app.listen(PORT, () =>
    console.log(
      `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
    )
  );

  return server;
}


// Main execution
initializeExpressServer()
  .then()
  .catch((e) => console.error(e));
