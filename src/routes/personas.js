const express = require('express');
const mysql = require("../database");
const router = express.Router();
//app.use(bodyparser.json());

//Primera Ruta por el metodo get
/*app.get('/',(req,res)=>{
    res.send('Bienvenidos a la API de TWOT')
});*/

//Leer persona DATOS

router.get(["/Persona", "/Leer"],(req, res)=>{
    const sql = `CALL PROC_PERSONAS('?', '?', '?', '?', '?', '?', '?', 4, '')`
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

router.get(["/Persona/Leer/:cod"],(req, res)=>{
    const {cod}= req.params
    const sql=`CALL PROC_PERSONAS('?', '?', '?', '?', '?', '?', '?', 5, ${cod})`
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

router.post('/persona/agregar',(req,res)=>{
    const objPersona ={
        
        NOM_PERSONA: req.body.NOM_PERSONA,
        SEX_PERSONA: req.body.SEX_PERSONA,
        EDAD_PERSONAL: req.body.EDAD_PERSONAL,
        TIP_PERSONA: req.body.TIP_PERSONA,
        Num_Identidad: req.body.Num_Identidad,
        IND_CIVIL: req.body.IND_CIVIL,
        IND_PERSONA: req.body.IND_PERSONA,
      
    }
    const sql = `CALL PROC_PERSONAS(${objPersona.NOM_PERSONA}, ${objPersona.SEX_PERSONA}, ${objPersona.EDAD_PERSONAL}, ${objPersona.TIP_PERSONA}, ${objPersona.Num_Identidad}, ${objPersona.IND_CIVIL}, ${objPersona.IND_PERSONA}, 1, '')`
    mysql.query(sql, error=>{
        if(error) throw error;
        res.send('Los datos se insertaron correctamente')
    })
    console.log('Datos insertados correctamente');
});
//actualizar
router.put('/persona/actualizar/:cod',(req,res)=>{
    const  {cod}= req.params;
    const objPersona ={
        
        NOM_PERSONA: req.body.NOM_PERSONA,
        SEX_PERSONA: req.body.SEX_PERSONA,
        EDAD_PERSONAL: req.body.EDAD_PERSONAL,
        TIP_PERSONA: req.body.TIP_PERSONA,
        Num_Identidad: req.body.Num_Identidad,
        IND_CIVIL: req.body.IND_CIVIL,
        IND_PERSONA: req.body.IND_PERSONA,
      
    }
    const sql = `CALL PROC_PERSONAS(${objPersona.NOM_PERSONA}, ${objPersona.SEX_PERSONA}, ${objPersona.EDAD_PERSONAL}, ${objPersona.TIP_PERSONA}, ${objPersona.Num_Identidad}, ${objPersona.IND_CIVIL}, ${objPersona.IND_PERSONA}, 2, ${cod})`
    mysql.query(sql, error=>{
        if(error) throw error;
        res.send('Los datos se actualizaron correctamente')
    })
    console.log('Datos actualizados correctamente');
});

router.delete('/persona/borrar/:cod',(req,res)=>{
    const{cod}= req.params;
    const sql = `CALL PROC_PERSONAS('?', '?', '?', '?', '?', '?', '?', 3, ${cod})`
    mysql.query(sql, error=>{
        if(error) throw error;
        res.send('Los datos fueron borrados correctamente')
    })
    console.log('Datos borrados correctamente');
})

/*---------------------------------------------------------------------------------------------------- */
//insertar datos en la tabla telefonos

router.get(["/Telefonos", "/Leer"],(req, res)=>{
    const sql = `CALL PROC_TELEFONOS('?', '?', '?', 4, '');`
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

router.get('/Telefonos/Leer/:cod',(req, res)=>{
    const {cod}= req.params
    const sql=`CALL PROC_TELEFONOS('?', '?', '?', 5, ${cod});`
    mysql.query(sql,(error,results)=>{
        if(error) throw error;
        if(results.length>0){
            res.json(results[0]); //SE LE AGREGA UN 0
        }else{
            res.send('No se pudo obtener resultados')
        }
    });
    console.log('Datos leidos correctamente con el cod');
});
//Insertar telefonos

router.post('/Telefonos/nuevo',(req,res)=>{
    const objTelefonos = {
        
        COD_PERSONA: req.body.COD_PERSONA,
        NUM_TELEFONO: req.body.NUM_TELEFONO,
        TIP_TELEFONO: req.body.TIP_TELEFONO
    }
    const sql = `CALL PROC_TELEFONOS(${objTelefonos.COD_PERSONA}, ${objTelefonos.NUM_TELEFONO}, ${objTelefonos.TIP_TELEFONO}, 1, '')`
    mysql.query(sql, error=>{
        if(error) throw error;
        res.send('Los datos se insertaron correctamente')
    })
    console.log('Datos insertados correctamente');
});

//actualizar
router.put('/Telefonos/actualizar/:cod',(req,res)=>{
    const  {cod}= req.params;
    const objTelefonos = {
        
        COD_PERSONA: req.body.COD_PERSONA,
        NUM_TELEFONO: req.body.NUM_TELEFONO,
        TIP_TELEFONO: req.body.TIP_TELEFONO
    }
    const sql = `CALL PROC_TELEFONOS(${objTelefonos.COD_PERSONA}, ${objTelefonos.NUM_TELEFONO}, ${objTelefonos.TIP_TELEFONO}, 2, ${cod})`
    mysql.query(sql, error=>{
        if(error) throw error;
        res.send('Los datos se actualizaron correctamente')
    })
    console.log('Datos actualizados correctamente');
});
router.delete('/Telefono/borrar/:cod',(req,res)=>{
    const{cod}= req.params;
    const sql=`CALL PROC_TELEFONOS('?', '?', '?', 3, ${cod});`
    mysql.query(sql, error=>{
        if(error) throw error;
        res.send('Los datos fueron borrados correctamente')
    })
    console.log('Datos borrados correctamente');
});


/*---------------------------------------------------------------------------------------------------- */
//insertar datos en la tabla Direcciones

router.get(["/Direcciones", "/Leer"],(req, res)=>{
    const sql = `CALL PROC_DIRECCIONES('?', '?', 4, '')`
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

router.get('/Direcciones/Leer/:cod',(req, res)=>{
    const {cod}= req.params
    const sql=`CALL PROC_DIRECCIONES('?', '?', 5, ${cod})`
    mysql.query(sql,(error,results)=>{
        if(error) throw error;
        if(results.length>0){
            res.json(results[0]); //SE LE AGREGA UN 0
        }else{
            res.send('No se pudo obtener resultados')
        }
    });
    console.log('Datos leidos correctamente con el cod');
});
//Insertar Direcciones

router.post('/Direcciones/nuevo',(req,res)=>{
    const objDirecciones = {
        
            COD_PERSONA: req.body.COD_PERSONA,
            DIRECCION: req.body.DIRECCION
        }

    const sql = `CALL PROC_DIRECCIONES(${objDirecciones.COD_PERSONA}, ${objDirecciones.DIRECCION}, 1, '')`
    mysql.query(sql, error=>{
        if(error) throw error;
        res.send('Los datos se insertaron correctamente')
    })
    console.log('Datos insertados correctamente');
});

//actualizar
router.put('/Direcciones/actualizar/:cod',(req,res)=>{
    const  {cod}= req.params;
    const objDirecciones = {
        
        COD_PERSONA: req.body.COD_PERSONA,
        DIRECCION: req.body.DIRECCION
    }

const sql = `CALL PROC_DIRECCIONES(${objDirecciones.COD_PERSONA}, ${objDirecciones.DIRECCION}, 2, ${cod})`
mysql.query(sql, error=>{
    if(error) throw error;
    res.send('Los datos se actualizaron correctamente')
})
console.log('Datos actualizados correctamente');
});
router.delete('/Direcciones/borrar/:cod',(req,res)=>{
    const{cod}= req.params;
    const sql=`CALL PROC_DIRECCIONES('?', '?', 3, ${cod})`
    mysql.query(sql, error=>{
        if(error) throw error;
        res.send('Los datos fueron borrados correctamente')
    })
    console.log('Datos borrados correctamente');
});




/*---------------------------------------------------------------------------------------------------- */
//insertar datos en la tabla Correos

router.get(["/Correos", "/Leer"],(req, res)=>{
    const sql = `CALL PROC_CORREOS('?', '?', 4, '')`
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

router.get('/Correos/Leer/:cod',(req, res)=>{
    const {cod}= req.params
    const sql=`CALL PROC_CORREOS('?', '?', 5, ${cod})`
    mysql.query(sql,(error,results)=>{
        if(error) throw error;
        if(results.length>0){
            res.json(results[0]); //SE LE AGREGA UN 0
        }else{
            res.send('No se pudo obtener resultados')
        }
    });
    console.log('Datos leidos correctamente con el cod');
});
//Insertar Correos

router.post('/Correos/nuevo',(req,res)=>{
    const objCorreos = {

            COD_PERSONA: req.body.COD_PERSONA,
            CORREO: req.body.CORREO
        }
           

    const sql = `CALL PROC_CORREOS(${objCorreos.COD_PERSONA}, ${objCorreos.CORREO}, 1, '')`
    mysql.query(sql, error=>{
        if(error) throw error;
        res.send('Los datos se insertaron correctamente')
    })
    console.log('Datos insertados correctamente');
});

//actualizar
router.put('/Correos/actualizar/:cod',(req,res)=>{
    const  {cod}= req.params;
    const objCorreos = {

        COD_PERSONA: req.body.COD_PERSONA,
        CORREO: req.body.CORREO
    }
       

const sql = `CALL PROC_CORREOS(${objCorreos.COD_PERSONA}, ${objCorreos.CORREO}, 2, ${cod})`
mysql.query(sql, error=>{
    if(error) throw error;
    res.send('Los datos se actualizaron correctamente')
})
console.log('Datos actualizados correctamente');
});

router.delete('/Correos/borrar/:cod',(req,res)=>{
    const{cod}= req.params;
    const sql=`CALL PROC_CORREOS('?', '?', 3, ${cod})`
    mysql.query(sql, error=>{
        if(error) throw error;
        res.send('Los datos fueron borrados correctamente')
    })
    console.log('Datos borrados correctamente');
});



/*---------------------------------------------------------------------------------------------------- */
//insertar datos en la tabla Rol

router.get(["/Rol", "/Leer"],(req, res)=>{
    const sql = `CALL PROC_ROL('?', '?', '?', '?', 4, '')`
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

router.get('/Rol/Leer/:cod',(req, res)=>{
    const {cod}= req.params
    const sql=`CALL PROC_ROL('?', '?', '?', '?', 5, ${cod})`
    mysql.query(sql,(error,results)=>{
        if(error) throw error;
        if(results.length>0){
            res.json(results[0]); //SE LE AGREGA UN 0
        }else{
            res.send('No se pudo obtener resultados')
        }
    });
    console.log('Datos leidos correctamente con el cod');
});
//Insertar Rol

router.post('/Rol/nuevo',(req,res)=>{
    const objRol = {
   
            COD_PERSONA: req.body.COD_PERSONA,
            ROL_PER: req.body.ROL_PER,
            DESCR: req.body.DESCR,
            ESTADO: req.body.ESTADO
        }
           

    const sql = `CALL PROC_ROL(${objRol.COD_PERSONA}, ${objRol.ROL_PER}, ${objRol.DESCR}, ${objRol.ESTADO}, 1, '')`
    mysql.query(sql, error=>{
        if(error) throw error;
        res.send('Los datos se insertaron correctamente')
    })
    console.log('Datos insertados correctamente');
});

//actualizar
router.put('/Rol/actualizar/:cod',(req,res)=>{
    const  {cod}= req.params;
    const objRol = {
   
        COD_PERSONA: req.body.COD_PERSONA,
        ROL_PER: req.body.ROL_PER,
        DESCR: req.body.DESCR,
        ESTADO: req.body.ESTADO

    }
       

const sql = `CALL PROC_ROL(${objRol.COD_PERSONA}, ${objRol.ROL_PER}, ${objRol.DESCR}, ${objRol.ESTADO}, 2, ${cod})`
mysql.query(sql, error=>{
    if(error) throw error;
    res.send('Los datos se actualizaron correctamente')
})
console.log('Datos actualizados correctamente');
});

router.delete('/Rol/borrar/:cod',(req,res)=>{
    const{cod}= req.params;
    const sql=`CALL PROC_ROL('?', '?', '?', '?', 3, ${cod})`
    mysql.query(sql, error=>{
        if(error) throw error;
        res.send('Los datos fueron borrados correctamente')
    })
    console.log('Datos borrados correctamente');
});


/*---------------------------------------------------------------------------------------------------- */
//insertar datos en la tabla Usuarios

router.get(["/Usuarios", "/Leer"],(req, res)=>{
    const sql = `CALL PROC_USUARIOS('?', '?', '?','?', 4, '')`
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

router.get('/Usuarios/Leer/:cod',(req, res)=>{
    const {cod}= req.params
    const sql=`CALL PROC_USUARIOS('?', '?', '?','?', 5, ${cod})`
    mysql.query(sql,(error,results)=>{
        if(error) throw error;
        if(results.length>0){
            res.json(results[0]); //SE LE AGREGA UN 0
        }else{
            res.send('No se pudo obtener resultados')
        }
    });
    console.log('Datos leidos correctamente con el cod');
});
//Insertar Usuarios

router.post('/Usuarios/nuevo',(req,res)=>{
    const objUsuarios = {

        COD_PERSONA: req.body.COD_PERSONA,
        COD_ROL: req.body.COD_ROL,
        COD_COR: req.body.COD_COR,
        estado: req.body.estado,

    }  

    const sql = `CALL PROC_USUARIOS(${objUsuarios.COD_PERSONA}, ${objUsuarios.COD_ROL}, ${objUsuarios.COD_COR}, ${objUsuarios.estado}, 1, '')`
    mysql.query(sql, error=>{
        if(error) throw error;
        res.send('Los datos se insertaron correctamente')
    })
    console.log('Datos insertados correctamente');
});

//actualizar
router.put('/Usuarios/actualizar/:cod',(req,res)=>{
    const  {cod}= req.params;
    const objUsuarios = {

        COD_PERSONA: req.body.COD_PERSONA,
        COD_ROL: req.body.COD_ROL,
        COD_COR: req.body.COD_COR,
        estado: req.body.estado,

    }  

    const sql = `CALL PROC_USUARIOS(${objUsuarios.COD_PERSONA}, ${objUsuarios.COD_ROL}, ${objUsuarios.COD_COR}, ${objUsuarios.estado}, 2, ${cod})`
    mysql.query(sql, error=>{
        if(error) throw error;
        res.send('Los datos se actualizaron correctamente')
    })
    console.log('Datos actualizados correctamente');
});

router.delete('/Usuarios/borrar/:cod',(req,res)=>{
    const{cod}= req.params;
    const sql=`CALL PROC_USUARIOS('?', '?', '?','?', 3, ${cod})`
    mysql.query(sql, error=>{
        if(error) throw error;
        res.send('Los datos fueron borrados correctamente')
    })
    console.log('Datos borrados correctamente');
});

module.exports=router;




