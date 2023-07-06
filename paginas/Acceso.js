//1. IMPORTAR REACT
import axios, { Axios } from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


//2.CREAR LA FUNCION 
function Acceso() {
    //DECLARAR QUE MI VARIABLE CAMBIARA DE ESTADO
    const [campos,setCampos]=useState({
        correo_electronico: "",
        contrasenia: ""
    });
    const[error,setError] = useState('');
    //redireccionamiento
    const navegacion = useNavigate();

    const acceder=(e)=>{
        e.preventDefault(); //PREVIENE QUE LA PAGINA SE RECARGUE AL ENVIAR AL FORMULARIO
        axios.post('http://localhost:8082/acceso', campos)
        .then(respuesta=> {
            if(respuesta.data.Estatus === "exitoso"){
                localStorage.setItem('usuario',respuesta.data);
                navegacion('/')
            }else{
               setError(respuesta.data.Error);
            }
        })
        .catch(error=> console.log("Hay un error"))
    };
    //3. METODO QUE REGRESA EL HTML
    return (
        <>
           <form onSubmit={acceder}>
            <input type='email' placeholder='Email' name='correo_electronico' onChange={(e) => setCampos({...campos, correo_electronico: e.target.value})}></input>
            <input type='password' placeholder='Contraseña' name='contrasenia'onChange={(e) => setCampos({...campos, contrasenia: e.target.value})}></input>
            <button type='submit'>Ingresar</button>
           </form>
        </>
    )
}

//4. EXPORTAR pagina

export default Acceso;