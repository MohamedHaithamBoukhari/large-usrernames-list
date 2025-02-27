const redis = require("redis");
require("dotenv").config();

// Create a Redis client
const client = redis.createClient({
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
});

// Connect to the Redis server
client.connect()
  .then(() => console.log("Redis connected"))
  .catch(err => console.error("Error connecting to Redis", err));

module.exports = client;