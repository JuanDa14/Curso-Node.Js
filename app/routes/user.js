const express = require("express");

const controller = require("../controllers/user");

const router = express.Router(); //defines la ruta

const path = "user";

/**
 Ruta : /user
 */

router.get(`/${path}`, controller.getData);

module.exports = router;

