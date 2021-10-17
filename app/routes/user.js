const express = require("express");

const controller = require("../controllers/user");
const uploadFile = require("../controllers/upload");
const router = express.Router(); //defines la ruta

const path = "user";

/**
 Ruta : /user Metodo Get
 */

router.get(`/${path}`, controller.getData);

/**
 Ruta : /user Metodo Post
 */

router.post(`/${path}`, controller.inserData);

/**
 Ruta : /user:id Metodo Put
 */

router.put(`/${path}/:id`, controller.updateSingle);

/**
 Ruta : /user Metodo delete
 */

router.delete(`/${path}/:id`, controller.deleteSingle);

module.exports = router;
