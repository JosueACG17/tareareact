import express from "express";
import mysql from 'mysql';
import cors from "cors";

//CREA LA INSTANCIA DE EXPRESS

const app=express();
app.use(cors());

//CREAR LA CONEXION

const conexion=mysql.createConnection({
    server: 'localhost',
    user: 'root',
    password: '',
    database: 'mascotitas'
});

//VERIFICANDO LA CONEXION A LA BASE DE DATOS

conexion.connect(function (error){
    if (error) {
        console.log("Error al conectarse a ala base de datos")
    } else {
        console.log("Conectado Exitosamente");
    }
});

//CONSULTAR LA LISTA DE MASCOTAS

app.get('/obtenerMascotas',(peticion, respuesta) =>{
    const sql = "SELECT * FROM mascotas";
    conexion.query(sql,(error,resultado) => {
        if (error) return respuesta.json ({respuesta: "error"});
        return respuesta.json({mensaje:"exitoso", contenido:resultado})
    });
});

//INICIAMOS EL SERVIDOR 

app.listen(8082, ()=>{
    console.log("Servidor Iniciado");
});