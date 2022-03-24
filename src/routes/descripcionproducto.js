//Actualizar datos

const express = require('express');
const mysql = require("../database");
const router = express.Router();


//Leer Descprod DATOS

router.get(["/descripcionproducto/","Leer"],(req, res)=>{
    const sql = `CALL PROC_DESCPRODUCT('?','?','?','?','?','?','?','?','?',4,'')`
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

router.get('/descripcionproducto/:cod',(req, res)=>{
    const {cod}= req.params
    const sql=`CALL PROC_DESCPRODUCT('?','?','?','?','?','?','?','?','?',5,${cod})`
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

//agregar
router.post('/descripcionproducto/nuevaDescprod',(req,res)=>{
    const objDescriprod ={
       
        COD_PRODUCTO  : req.body.COD_PRODUCTO ,
        COD_ARTICULO : req.body.COD_ARTICULO ,
        COD_INV : req.body.COD_INV ,
        NOM_PRODUCTO : req.body.NOM_PRODUCTO ,
        PRECIO : req.body.PRECIO  ,
        UNIDADES : req.body.UNIDADES ,
        COLOR : req.body.COLOR ,
        CANTIDAD : req.body.CANTIDAD ,
        TAMANO : req.body.TAMANO ,
        opcion : req.body.opcion ,
        fila : req.body.fila 
    }
    const sql = `CALL PROC_DESCPRODUCT(${objDescriprod.COD_PRODUCTO},${objDescriprod.COD_ARTICULO},${objDescriprod.COD_INV},${objDescriprod.NOM_PRODUCTO},${objDescriprod.PRECIO},${objDescriprod.UNIDADES},${objDescriprod.COLOR},${objDescriprod.CANTIDAD},${objDescriprod.TAMANO},${objDescriprod.opcion},${objDescriprod.fila})`
    mysql.query(sql, error=>{
        if(error) throw error;
        res.send('Los datos se insertaron correctamente')
    })
    console.log('Datos insertados correctamente');
});


//actualizar
router.put('/descripcionproducto/actualizar/:cod',(req,res)=>{
    const  {cod}= req.params;
    const objDescriprod ={
     
        COD_PRODUCTO  : req.body.COD_PRODUCTO ,
        COD_ARTICULO : req.body.COD_ARTICULO ,
        COD_INV : req.body.COD_INV ,
        NOM_PRODUCTO : req.body.NOM_PRODUCTO ,
        PRECIO : req.body.PRECIO  ,
        UNIDADES : req.body.UNIDADES ,
        COLOR : req.body.COLOR ,
        CANTIDAD : req.body.CANTIDAD ,
        TAMANO : req.body.TAMANO ,
        
    }
    const sql = `CALL PROC_DESCPRODUCT(${objDescriprod.COD_PRODUCTO},${objDescriprod.COD_ARTICULO},${objDescriprod.COD_INV},${objDescriprod.NOM_PRODUCTO},${objDescriprod.PRECIO},${objDescriprod.UNIDADES},${objDescriprod.COLOR},${objDescriprod.CANTIDAD},${objDescriprod.TAMANO},2,${cod})`
    mysql.query(sql, error=>{
        if(error) throw error;
        res.send('Los datos se actualizaron correctamente')
    })
    console.log('Datos actualizados correctamente');
});

//borrar
router.delete('/descripcionproducto/borrar/:cod',(req,res)=>{
    const{cod}= req.params;
    const sql=`CALL PROC_DESCPRODUCT('?','?','?','?','?','?','?','?','?',3,${cod})`
    mysql.query(sql, error=>{
        if(error) throw error;
        res.send('Los datos fueron borrados correctamente')
    })
    console.log('Datos borrados correctamente');
});

module.exports=router;