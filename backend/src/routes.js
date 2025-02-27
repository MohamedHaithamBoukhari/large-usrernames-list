const express = require("express");
const { getUsersByLetter } = require("./controllers");

const router = express.Router();

// Retrieve users by first letter with pagination
// Endpoint: GET /users/:letter?page=:page
router.get("/users/:letter", getUsersByLetter);

module.exports = router;