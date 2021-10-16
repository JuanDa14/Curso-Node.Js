const mongoose = require("mongoose");

const UserScheme = new mongoose.Schema({
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
});

//modelo(nombre, datos creados)
module.exports = mongoose.model("user", UserScheme);
