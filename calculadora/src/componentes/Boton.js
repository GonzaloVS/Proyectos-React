import React from 'react';
import '../estilos/Boton.css';

function Boton(props){

    const esOperador=valor=>{
        return isNaN(valor)&&(valor !='.') && (valor!='=');
    };

    return(
        <div className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()} onClick={ () => props.clic(props.children)}> 
            {props.children}
        </div>
        //Si el resultado es true devuelve operador y si es false nada. Añadimos .trimEnd() para eliminar el espacio final si no devuelve operador.
    );
}

export default Boton;