const model = require("../models/user");

//traer datos
exports.getData = (req, res) => {
  //model.find({"si no le especificas trae todos los datos"},(err,docs))
  model.find({}, (err, docs) => {
    res.send({
      datos: docs,
    });
  });
};

//insertar datos con post
exports.inserData = (req, res) => {
  const data = req.body;
  model.create(data, (err, docs) => {
    res.send({
      data: docs,
    });
  });
};
