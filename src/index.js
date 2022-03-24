const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const colors = require('colors');

// Settings
app.set("port", process.env.PORT || 3000);

// Middlewares
app.use(express.json());
app.use(bodyparser.json());


//inicio
app.get('/',(req,res)=>{
  res.send('<html><body><center><b>Bienvenidos a la API de TWOT</B></center></body></html>')
});
// Routes
app.use(require("./routes/comprayventa"));
app.use(require("./routes/fabricante"));
app.use(require("./routes/enproduccion"));
app.use(require("./routes/descripcionproducto"));
app.use(require("./routes/distribucionproducto"));
app.use(require("./routes/personas"))
//app.use(require("./routes/reportcompra"));


// Starting the server
app.listen(app.get("port"), () => {
  console.log('');
    console.log('TTTTTTTTTTTTTTTTTTTTTTTWWWWWWWW                           WWWWWWWW     OOOOOOOOO     TTTTTTTTTTTTTTTTTTTTTTT'.yellow);
    console.log(`T:::::::::::::::::::::TW::::::W                           W::::::W   OO:::::::::OO   T:::::::::::::::::::::T`.yellow);
    console.log('T:::::::::::::::::::::TW::::::W                           W::::::W OO:::::::::::::OO T:::::::::::::::::::::T'.yellow);
    console.log('T:::::TT:::::::TT:::::TW::::::W                           W::::::WO:::::::OOO:::::::OT:::::TT:::::::TT:::::T'.yellow);
    console.log('TTTTTT  T:::::T  TTTTTT W:::::W           WWWWW           W:::::W O::::::O   O::::::OTTTTTT  T:::::T  TTTTTT'.yellow);
    console.log('        T:::::T          W:::::W         W:::::W         W:::::W  O:::::O     O:::::O        T:::::T        '.yellow);
    console.log('        T:::::T           W:::::W       W:::::::W       W:::::W   O:::::O     O:::::O        T:::::T        '.yellow);
    console.log('        T:::::T            W:::::W     W:::::::::W     W:::::W    O:::::O     O:::::O        T:::::T       '.yellow);
    console.log('        T:::::T             W:::::W   W:::::W:::::W   W:::::W     O:::::O     O:::::O        T:::::T       '.yellow);
    console.log('        T:::::T              W:::::W W:::::W W:::::W W:::::W      O:::::O     O:::::O        T:::::T      '.yellow);
    console.log('        T:::::T               W:::::W:::::W   W:::::W:::::W       O:::::O     O:::::O        T:::::T      '.yellow);
    console.log('        T:::::T                W:::::::::W     W:::::::::W        O::::::O   O::::::O        T:::::T      '.yellow);
    console.log('      TT:::::::TT               W:::::::W       W:::::::W         O:::::::OOO:::::::O      TT:::::::TT    '.yellow);
    console.log('      T:::::::::T                W:::::W         W:::::W           OO:::::::::::::OO       T:::::::::T   '.yellow);
    console.log('      T:::::::::T                 W:::W           W:::W              OO:::::::::OO         T:::::::::T  '.yellow);
    console.log('      TTTTTTTTTTT                  WWW             WWW                 OOOOOOOOO           TTTTTTTTTTT  '.yellow);
  

  console.log('');
    console.log('El servidor se esta ejecutando correctamente verifica en la url: '.green, `http://localhost:${app.get("port")}/`.yellow);
    console.log('Para leer datos ejecutar url con:'.bold,`http://localhost:${app.get("port")}/LeerV`.yellow);
    console.log('Para leer datos por id ejecutar url con:'.bold,`http://localhost:${app.get("port")}/LeerV/1`.cyan);
    console.log('Para insertar nueva venta ejecutar url con:'.bold,`http://localhost:${app.get("port")}/nuevaVenta`.yellow);
    console.log('Para actualizar Los datos ejecutar url con: '.bold,`http://localhost:${app.get("port")}/actualizarV/:id`.cyan);
    console.log('Para eliminar con id ejecutar url con: '.bold,`http://localhost:${app.get("port")}/borrarV/:id`.yellow);

});
