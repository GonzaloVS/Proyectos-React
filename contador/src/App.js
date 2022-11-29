import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import {useState} from 'react';

function App() {

  const [numContador, setNumContador] = useState(0);

  const aumentarValor = () => {
    setNumContador(numContador + 1);
  }

  const restarValor = () => {
    setNumContador(numContador - 1);
  }

  const reiniciarContador = () => {
    setNumContador(0);
  }

  return (
    <div className="App">
      <div className='contenedor-contador'>
        <div>
          <Contador numContador={numContador}/>
        </div>
        <div className='auemtar-restar'>
          <Boton texto='Aumentar'
            esAumentar={true}
            pulsarBoton={aumentarValor}/>

          <Boton texto='Restar'
            esAumentar={false}
            esRestar ={true}
            pulsarBoton={restarValor}/>
        </div>
        <div className='reiniciar'>
          <Boton texto='Reiniciar'
            esAumentar={false}
            esRestar ={false}
            pulsarBoton={reiniciarContador}/>
        </div>    
      </div>
    </div>
  );
}

export default App;
