const express = require("express");
const router = express.Router();
const controller = require("../controllers/upload");
const path = "upload";
/**
 Ruta : /user Post - Agregar Archivos a la Base de Datos
 */

router.post(`/${path}`, controller.upload, controller.uploadFile);

module.exports = router;
