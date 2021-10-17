const mongoose = require("mongoose");
const model = require("../models/user");
//variable como 2 argumento para la paginacion
const options = {
  page: 1,
  limit: 3,
};

//traer datos
exports.getData = (req, res) => {
  //model.find({"si no le especificas trae todos los datos"},(err,docs))
  //model.paginate({},valor por pagina,(err.docs))
  model.paginate({}, options, (err, docs) => {
    res.send({
      datos: docs,
    });
  });
};

//insertar datos con post
exports.inserData = (req, res) => {
  const datos = req.body;
  model.create(datos, (err, docs) => {
    if (err) {
      res.send(
        {
          error: "Error",
        },
        422
      );
    } else {
      res.send({
        datos: docs,
      });
    }
  });
};

//conversion del id en un objeto id

const parseId = (id) => {
  return mongoose.Types.ObjectId(id);
};

//Actualizar datos con put

exports.updateSingle = (req, res) => {
  const id = req.params.id;
  const body = req.body;
  //model.updateOne(_id:"id",datos para actualizar,(err,docs))
  model.updateOne({ _id: parseId(id) }, body, (err, docs) => {
    if (err) {
      res.send({
        error: err,
      });
    } else {
      res.send({
        datos: docs,
      });
    }
  });
};

//Elmimar registros
exports.deleteSingle = (req, res) => {
  const id = req.params.id;
  const body = req.body;
  model.deleteOne({ _id: parseId(id) }, body, (error, datos) => {
    if (error) {
      res.send({
        //como se llaman error ambos no es necesario poner error:error si no solo
        error,
      });
    } else {
      res.send({
        datos,
      });
    }
  });
};
