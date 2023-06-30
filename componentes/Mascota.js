//1. IMPORTAR REACT
import React, { useEffect, useState } from 'react';
import axios from 'axios';

//2.CREAR LA FUNCION 
function Mascota() {
    const[mascotas, setMascotas]=useState([]);
    useEffect(()=> {
        axios.get('http://localhost:8082/obtenerMascotas')
        .then(respuesta => {
            if(respuesta.data.mensaje === "exitoso"){
                setMascotas(respuesta.data.contenido);
            }
        }) 
        .catch(error => console.log("Error al almacenar datos"));
    });

    //3. METODO QUE REGRESA EL HTML
    return (
        <>
            {mascotas.map((lamascota, index) =>{
                return <h1>{lamascota.nombre} tiene {lamascota.edad} años</h1>
            })}
        </>
    )
}

//4. EXPORTAR ENCABEZADO

export default Mascota;