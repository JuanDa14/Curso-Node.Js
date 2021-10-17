const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads"); //guadaras todos los archivos en una carpeta llamada uploads
  },
  filename: function (req, file, cb) {
    console.log(file);
    cb(null, `${Date.now()}-${file.originalname}`); //el nombre del archivo sera el nombre + el tiempo
  },
});

const upload = multer({ storage: storage }); //crea variable y le decimos la configuracion hecha en el storage

exports.upload = upload.single("myFile"); //exportamos

exports.uploadFile = (req, res) => {
  res.send({
    datos: "File Save",
  });
};
