import express, { json } from "express";
import mysql from 'mysql';
import cors from "cors";
import jwt from "jsonwebtoken";

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
    console.log(peticion.body)
    conexion.query(sql,(error,resultado) => {
        if (error) return respuesta.json ({respuesta: "error"});
        return respuesta.json({mensaje:"exitoso", contenido:resultado})
    });
});


// ACCESO A USUARIO
app.post('/acceso', (peticion, respuesta) =>{
    const sql= "SELECT * FROM usuarios where correo_electronico = ? AND contrasenia = ?"
    console.log(peticion.body);
    conexion.query(sql, [peticion.body.correo_electronico, peticion.body.contrasenia], (error, resultado) => {
        if (error) return respuesta.json({Error: "Error en la consulta"});
        if (resultado.lenght > 0) {
            const token = jwt.sign({usuario: "administrador"}, "12", {expiresIn: '1d'});
            respuesta.cookie(token);
            return respuesta.json({Estatus: "exitoso", usuario:token})
        } else {
            return respuesta.json({Estatus: "error", Error: "Usuario o Contraseña Incorrecta"})
        }
    })
})

//INICIAMOS EL SERVIDOR 
app.listen(8082, ()=>{
    console.log("Servidor Iniciado");
});