const mysql = require("mysql");
const colors = require('colors');

// Cadena de conexión a la base de datos
const mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "twot",
  multipleStatements: true,
});

// Para verificar si la conexión es exitosa para Falló mientras se ejecuta el proyecto en la consola.
mysqlConnection.connect((err) => {
  if (!err) {
    console.log("Conexión Exitosa\nA la base de datos twot".bgMagenta);
  } else {
    console.log(
      "Conexión fallida en la base de datos twot \n Error :" + JSON.stringify(err, undefined, 2)
    );
  }
});

module.exports = mysqlConnection;
