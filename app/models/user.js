const mongoose = require("mongoose");

//Paginacion
const mongoosePaginate = require("mongoose-paginate-v2");

const UserScheme = new mongoose.Schema(
  {
    nombre: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    avatar: {
      type: String,
      default: "http://image.com",
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

//Le decimos al esquema que lo use
UserScheme.plugin(mongoosePaginate);

//modelo(nombre, datos creados)
module.exports = mongoose.model("user", UserScheme);
