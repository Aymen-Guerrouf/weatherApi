const redis = require("redis");
const hash = require("object-hash");
let redisClient;

async function initializeRedis() {
  const redisUrl = process.env.REDIS_URI;

  if (redisUrl) {
    redisClient = redis.createClient({ url: redisUrl }).on("error", (e) => {
      console.error("Failed to create the Redis client with error:", e);
    });

    try {
      await redisClient.connect();
      console.log("Connected to Redis successfully!");
      return redisClient;
    } catch (e) {
      console.error("Connection to Redis failed with error:", e);
      throw e;
    }
  } else {
    console.error("No REDIS_URI provided in environment variables.");
    throw new Error("REDIS_URI is not defined.");
  }
}

function requestToKey(req) {
  // build a custom object to use as part of the Redis key
  const reqDataToHash = {
    query: req.query,
    body: req.body,
  };

 
  
  return `${req.path}@${hash.sha1(reqDataToHash)}`;
}

function isRedisWorking() {
  // verify wheter there is an active connection
  // to a Redis server or not
  return !!redisClient?.isOpen;
}

async function writeData(key, data, options) {
  if (isRedisWorking()) {
    try {
      // write data to the Redis cache
      await redisClient.set(key, data, options);
    } catch (e) {
      console.error(`Failed to cache data for key=${key}`, e);
    }
  }
}

async function readData(key) {
  let cachedValue = undefined;
  if (isRedisWorking()) {
    // try to get the cached response from redis
    return await redisClient.get(key);
  }

  return cachedValue;
}

function redisCachingMiddleware(
  options = {
    EX: 21600, // 6h
  }
) {
  return async (req, res, next) => {
    if (isRedisWorking()) {
      const key = requestToKey(req);
      // if there is some cached data, retrieve it and return it
      const cachedValue = await readData(key);
      if (cachedValue) {
        try {
          // if it is JSON data, then return it
          return res.json(JSON.parse(cachedValue));
        } catch {
          // if it is not JSON data, then return it
          return res.send(cachedValue);
        }
      } else {
        
        // to introduce the caching logic
        const oldSend = res.send;
        res.send = function (data) {
          // set the function back to avoid the 'double-send' effect
          res.send = oldSend;

          // cache the response only if it is successful
          if (res.statusCode.toString().startsWith("2")) {
            writeData(key, data, options).then();
          }

          return res.send(data);
        };

        // continue to the controller function
        next();
      }
    } else {
      // proceed with no caching
      next();
    }
  };
}

module.exports = { initializeRedis, redisClient, redisCachingMiddleware };
