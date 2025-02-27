const pool = require("./db");
const cache = require("./cache");
require("dotenv").config();

// Retrieve users whose names start with a specific letter
const getUsersByLetter = async (req, res) => {
  const letter = req.params.letter.toUpperCase();
  const page = parseInt(req.query.page) || 1;

  // Pagination settings
  const limit = process.env.PAGINATION_LIMIT;
  const offset = (page - 1) * limit;

  // Unique cache key for request
  const cacheKey = `users:${letter}:${page}`;

  // Check if data is in cache
  const cachedData = await cache.get(cacheKey);
  if (cachedData) {
    return res.json(JSON.parse(cachedData));
  }

  // If data is not in cache, query DB
  try {
    const { rows } = await pool.query(
      "SELECT * FROM users WHERE first_letter = $1 ORDER BY name LIMIT $2 OFFSET $3",
      [letter, limit, offset]
    );
    
    // Store the retrieved data in cache
    cache.setEx(cacheKey, 3600, JSON.stringify(rows));

    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getUsersByLetter };