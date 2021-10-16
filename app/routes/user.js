const express = require("express");

const controller = require("../controllers/user");
const router = express.Router(); //defines la ruta

const path = "user";

/**
 Ruta : /user Metodo Get
 */

router.get(`/${path}`, controller.getData);

/**
 Ruta : /user Metodo Post
 */

router.post(`/`, controller.inserData);

module.exports = router;
