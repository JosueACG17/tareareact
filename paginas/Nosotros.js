//1. IMPORTAR REACT
import React from 'react';
import Encabezado from '../componentes/Encabezado';

//2.CREAR LA FUNCION 
function Nosotros() {
    //3. METODO QUE REGRESA EL HTML
    return (
        <>
            <Encabezado/>
            <div className='container'>
                <h1>Nosotros</h1>
            </div>
        </>
    )
}

//4. EXPORTAR ENCABEZADO

export default Nosotros;