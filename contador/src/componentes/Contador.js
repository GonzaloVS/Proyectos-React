import React from "react";
import '../estilos/Contador.css'
function Contador (props) {
    return (
        <div className="contador">
            {props.numContador}
        </div>
    );
}

export default Contador;