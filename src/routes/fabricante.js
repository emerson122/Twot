const express = require('express');
const mysql = require("../database");
const router = express.Router();
//app.use(bodyparser.json());

//Primera Ruta por el metodo get
/*app.get('/',(req,res)=>{
    res.send('Bienvenidos a la API de TWOT')
});*/

////////LEER DATOS DE LA TABLA FABRICANTE///////////////

router.get(["/fabricante/", "/leer"],(req, res)=>{
    const sql = `CALL PROC_FABRICANTE('?','?','?','?','?','?','?',4,'')`
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

router.get('/fabricante/:cod',(req, res)=>{
    const {cod}= req.params
    const sql= `CALL PROC_FABRICANTE('?','?','?','?','?','?','?',5,${cod})`
    mysql.query(sql,(error,results)=>{
        if(error) throw error;
        if(results.length>0){
            res.json(results[0]); //SE LE AGREGA UN 0
        }else{
            res.send('No se pudo obtener resultados')
        }
    })
    console.log('Datos borrados correctamente');
});

////////INSERTAR DATOS DE LA TABLA FABRICANTE///////////////


router.post('/fabricante/insertar',(req,res)=>{
    const objfabricante ={
         PROVEEDORES: req.body.PROVEEDORES,
         DIR_EMPRESA: req.body.DIR_EMPRESA,
         TEL_EMPRESA: req.body.TEL_EMPRESA,
         COR_EMPRESA: req.body.COR_EMPRESA,
         NOM_PRODUCTO: req.body.NOM_PRODUCTO,
         UNIDADES: req.body.UNIDADES,
         COS_PRODUCTO: req.body.COS_PRODUCTO,
         OPERACION: req.body.OPERACION,
         FILA: req.body.FILA
    }
    const sql = `CALL PROC_FABRICANTE(${objfabricante.PROVEEDORES},${objfabricante.DIR_EMPRESA},${objfabricante.TEL_EMPRESA},${objfabricante.COR_EMPRESA},${objfabricante.NOM_PRODUCTO},${objfabricante.UNIDADES},${objfabricante.COS_PRODUCTO},${objfabricante.OPERACION},${objfabricante.FILA})`
    mysql.query(sql, error=>{
        if(error) throw error;
        res.send('Los datos se insertaron correctamente')
    })
    console.log('Datos insertados correctamente');
    });

////////AUTIALIZAR DATOS DE LA TABLA FABRICANTE///////////////


router.put('/fabricante/actualizar/:id',(req,res)=>{
    const  {id}= req.params;
    const objfabricante ={
       
        PROVEEDORES: req.body.PROVEEDORES,
        DIR_EMPRESA: req.body.DIR_EMPRESA,
        TEL_EMPRESA: req.body.TEL_EMPRESA,
        COR_EMPRESA: req.body.COR_EMPRESA,
        NOM_PRODUCTO: req.body.NOM_PRODUCTO,
        UNIDADES: req.body.UNIDADES,
        COS_PRODUCTO: req.body.COS_PRODUCTO,
       
    }
    const sql = `CALL PROC_FABRICANTE(${objfabricante.PROVEEDORES},${objfabricante.DIR_EMPRESA},${objfabricante.TEL_EMPRESA},${objfabricante.COR_EMPRESA},${objfabricante.NOM_PRODUCTO},${objfabricante.UNIDADES},${objfabricante.COS_PRODUCTO},2,${id})`
    mysql.query(sql, error=>{
        if(error) throw error;
        res.send('Los datos se actualizaron correctamente')
    })
    console.log('Datos actualizados correctamente');
    });

    ////////BORRAR DATOS DE LA TABLA FABRICANTE///////////////

    router.delete('/fabricante/borrar/:id',(req,res)=>{
        const{id}= req.params;
        const sql= `CALL PROC_FABRICANTE('?','?','?','?','?','?','?',3,${id})`
        mysql.query(sql, error=>{
            if(error) throw error;
            res.send('Los datos fueron borrados correctamente')
        })
        console.log('Datos borrados correctamente');
    });
    

    module.exports=router;