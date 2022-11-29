import React from "react";
import '../estilos/Boton.css';
function Boton({texto, esAumentar, esRestar, pulsarBoton}) {
    return(
        <button className={esAumentar ? 'boton-aumentar' : esRestar ? 'boton-restar' : 'boton-reiniciar'} onClick={pulsarBoton}>
            {texto}
        </button>
    );
}

export default Boton;