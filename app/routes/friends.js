const express = require("express");

const router = express.Router();

const controller = require("../controllers/friends");

const path = "/friend";

router.get(path, controller.getData);

module.exports = router;
