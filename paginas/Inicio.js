//1. IMPORTAR REACT
import React from 'react';
import Encabezado from '../componentes/Encabezado';

//2.CREAR LA FUNCION 
function Inicio() {
    //3. METODO QUE REGRESA EL HTML
    return (
        <>
            <Encabezado/>
            <div className='container'>
                <h1>Bienvenidos a nuestro portal</h1>
            </div>
        </>
    )
}

//4. EXPORTAR ENCABEZADO

export default Inicio;