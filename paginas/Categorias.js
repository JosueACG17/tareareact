//1. IMPORTAR REACT
import React from 'react';
import Encabezado from '../componentes/Encabezado';
import Mascota from '../componentes/Mascota';

//2.CREAR LA FUNCION 
function Categorias() {
    //3. METODO QUE REGRESA EL HTML
    return (
        <>
            <Encabezado/>
            <div className='container'>
                <h1>Categorias</h1>
                <Mascota/>
            </div>
        </>
    )
}

//4. EXPORTAR ENCABEZADO

export default Categorias;