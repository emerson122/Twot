const express = require('express');
const mysql = require("../database");
const router = express.Router();
//app.use(bodyparser.json());

//Primera Ruta por el metodo get
/*app.get('/',(req,res)=>{
    res.send('Bienvenidos a la API de TWOT')
});*/

////////LEER DATOS DE LA TABLA FENPRODUCCION///////////////

router.get(["/enproduccion/", "/leer"],(req, res)=>{
    const sql = `CALL PROC_ENPRODUCCION('?','?','?','?',4,'')`
    mysql.query(sql,(error,results)=>{
        if(error) throw error;
        if(results.length>0){
            res.json(results[0]);
        }else{
            res.send('No se pudo obtener resultados')
        }
    });  
    console.log('Datos leidos correctamente');
});

////////LEER DATOS POR ID O FILA DE LA TABLA FABRICANTE///////////////

router.get('/enproduccion/:cod',(req, res)=>{
    const {cod}= req.params
    const sql=`CALL PROC_ENPRODUCCION('?','?','?','?',5,${cod})`
    mysql.query(sql,(error,results)=>{
        if(error) throw error;
        if(results.length>0){
            res.json(results[0]); //SE LE AGREGA UN 0
        }else{
            res.send('No se pudo obtener resultados')
        }
    });
    console.log('Datos leidos correctamente con el id');
});

////////INSERTAR DATOS DE LA TABLA FABRICANTE///////////////


router.post('/enproduccion/insertar',(req,res)=>{
    const objenproduccion ={
         COD_EMPRESA: req.body.COD_EMPRESA,
         NOM_PROD_EN: req.body.NOM_PROD_EN,
         CAN_PRODUCTO: req.body.CAN_PRODUCTO,
         COS_PROD_EN: req.body.COS_PROD_EN,
         OPERACION: req.body.OPERACION,
         FILA: req.body.FILA,
         
    }
    const sql = `CALL PROC_ENPRODUCCION(${objenproduccion.COD_EMPRESA},${objenproduccion.NOM_PROD_EN},${objenproduccion.CAN_PRODUCTO},${objenproduccion.COS_PROD_EN},${objenproduccion.OPERACION},${objenproduccion.FILA})`
    mysql.query(sql, error=>{
        if(error) throw error;
        res.send('Los datos se insertaron correctamente')
    })
    console.log('Datos insertados correctamente');
    });

     ////////ACTUALIZAR DATOS DE LA TABLA FABRICANTE///////////////


router.put('/enproduccion/actualizar/:cod',(req,res)=>{
    const  {cod}= req.params;
    const objenproduccion ={
       
         COD_EMPRESA: req.body.COD_EMPRESA,
         NOM_PROD_EN: req.body.NOM_PROD_EN,
         CAN_PRODUCTO: req.body.CAN_PRODUCTO,
         COS_PROD_EN: req.body.COS_PROD_EN,
       
    }
    const sql = `CALL PROC_ENPRODUCCION(${objenproduccion.COD_EMPRESA},${objenproduccion.NOM_PROD_EN},${objenproduccion.CAN_PRODUCTO},${objenproduccion.COS_PROD_EN},2,${cod})`
    mysql.query(sql, error=>{
        if(error) throw error;
        res.send('Los datos se actualizaron correctamente')
    })
    console.log('Datos actualizados correctamente');
    });

 ////////BORRAR DATOS DE LA TABLA EMPRODUCCION///////////////

 router.delete('/enproduccion/borrar/:cod',(req,res)=>{
    const{cod}= req.params;
    const sql= `CALL PROC_ENPRODUCCION('?','?','?','?',3,${cod})`
    mysql.query(sql, error=>{
        if(error) throw error;
        res.send('Los datos fueron borrados correctamente')
    })
    console.log('Datos borrados correctamente');
});

module.exports=router;