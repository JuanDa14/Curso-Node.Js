const express = require("express");

const initDB = require("./config/db"); //inicializacion de la base de datos

const app = express();
const port = 3001;
const userRouters = require("./app/routes/user");
const itemsRouter = require("./app/routes/items");
const friendsRouter = require("./app/routes/friends");
const uploadFile = require("./app/routes/upload");

//parsear datos en json
app.use(
  express.json({
    limit: "20mb",
  })
);

//parsear datos en x-ww-form-unlencoded
app.use(
  express.urlencoded({
    limit: "20mb",
    extended: true,
  })
);

app.use(userRouters);
app.use(itemsRouter);
app.use(friendsRouter);
app.use(uploadFile);

app.listen(port, () => {
  //para ejecutar en el puerto que has creado
  console.log("la aplicacion esta en linea");
});

initDB();
