import React from 'react';
import '../estilos/Boton.css';

const BotonClear = (props) => (
    <div className='boton-clear' onClick={props.clear}>
        {props.children}
    </div>
);

export default BotonClear;