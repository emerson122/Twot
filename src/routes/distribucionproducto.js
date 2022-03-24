const express = require('express');
const mysql = require("../database");
const router = express.Router();
//app.use(bodyparser.json());

//Primera Ruta por el metodo get
/*app.get('/',(req,res)=>{
    res.send('Bienvenidos a la API de TWOT')
});*/

////////LEER DATOS DE LA TABLA DISTRIBPRODUCT///////////////

router.get(["/distribucionproducto/","/leer"],(req, res)=>{
    const sql = `CALL PROC_DISTRIBPRODUCT('?','?','?',4,'')`
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


////////LEER DATOS POR ID O FILA DE LA TABLA DISTRIBPRODUCT///////////////

router.get('/distribucionproducto/:cod',(req, res)=>{
    const {cod}= req.params
    const sql= `CALL PROC_DISTRIBPRODUCT('?','?','?',5,${cod})`
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

////////INSERTAR DATOS DE LA TABLA DISTRIBPRODUCT///////////////


router.post('/distribucionproducto/nuevo',(req,res)=>{
    const objdistrib ={
         nombreDepart: req.body.nombreDepart,
         lugar_entrega: req.body.lugar_entrega,
         nombre: req.body.nombre,
       
         
         OPERACION: req.body.OPERACION,
         FILA: req.body.FILA
    }
    const sql = `CALL PROC_DISTRIBPRODUCT(${objdistrib.nombreDepart},${objdistrib.lugar_entrega},${objdistrib.nombre},${objdistrib.OPERACION},${objdistrib.FILA})`
    mysql.query(sql, error=>{
        if(error) throw error;
        res.send('Los datos se insertaron correctamente')
    })
    console.log('Datos insertados correctamente');
    });


    ////////AUTIALIZAR DATOS DE LA TABLA DISTRIBPRODUCT///////////////


router.put('/distribucionproduct/actualizar/:cod',(req,res)=>{
    const  {cod}= req.params;
    const objdistrib ={
       
        nombreDepart: req.body.nombreDepart,
        lugar_entrega: req.body.lugar_entrega,
        nombre: req.body.nombre,
       
    }
    const sql = `CALL PROC_DISTRIBPRODUCT(${objdistrib.nombreDepart},${objdistrib.lugar_entrega},${objdistrib.nombre},2,${cod})`
    mysql.query(sql, error=>{
        if(error) throw error;
        res.send('Los datos se actualizaron correctamente')
    })
    console.log('Datos actualizados correctamente');
    });

      ////////BORRAR DATOS DE LA TABLA DISTRIBPRODUCT///////////////

      router.delete('/distribucionproduct/borrar/:cod',(req,res)=>{
        const{cod}= req.params;
        const sql= `CALL PROC_DISTRIBPRODUCT('?','?','?',3,${cod})`
        mysql.query(sql, error=>{
            if(error) throw error;
            res.send('Los datos fueron borrados correctamente')
        })
        console.log('Datos borrados correctamente');
    });
    



module.exports=router; 