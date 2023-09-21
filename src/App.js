import { useState } from 'react';
import './App.css';

// FORMA DE IMPORTAR COMPONENTES EN REACT
import Header from './components/Header/Header';
import Formulario from './components/Formulario/formulario';
import MiOrg from './components/MiOrg';

function App() {

  const [mostarFormulario, actualizarMostar] = useState(true);

  // TERNARIO --> condicion ? seMuestra : noSeMuestra;
  // CORTOCIRCUITO --> condicion && seMuestra

  const cambiarMostar = () => {
        actualizarMostar(!mostarFormulario)
  }
  return (
          <div>
            <Header/>
            {mostarFormulario && <Formulario />}
            <MiOrg cambiarMostrar={cambiarMostar}/>
          </div>
  );
}

export default App;
