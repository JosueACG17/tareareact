import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Registro() {
    //declaramos la variable que cambia estados
    const [campos, setCampos] = useState({
        nombre_usuario: "",
        correo_electronico: "",
        contrasenia: ""
    });
    const [error, setError] = useState('');
    // redireccionamiento
    const navegacion = useNavigate();
    const registrar = (e) => {
        e.preventDefault(); //previene que se recargue la pagina cuanndo envies el formulario
        axios.post('http://localhost:8082/registro', campos)
            .then(respuesta => {
                if (respuesta.data.Estatus === "CORRECTO") {
                    navegacion('/acceso');
                } else {
                    setError(respuesta.data.Error);
                }
            })
            .catch(error => console.log("hay un error"))
    }
    return (
        <form onSubmit={registrar}>
            <input type='text' placeholder="Nombre" name="nombre_usuario"
                onChange={(e) => setCampos({ ...campos, nombre_usuario: e.target.value })} />
            <input type='email' placeholder="Email"
                name="Correo_electronico"
                onChange={(e) => setCampos({ ...campos, correo_electronico: e.target.value })} />
            <input type='password' placeholder="Contraseña"
                name="Contrasenia"
                onChange={(e) => setCampos({ ...campos, contrasenia: e.target.value })} />
            <button type="submit">Ingresar</button>
        </form>
    );
}
export default Registro;
