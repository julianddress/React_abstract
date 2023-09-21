import './App.css';

// FORMA DE IMPORTAR COMPONENTES EN REACT
import Header from './components/Header/Header';
import Formulario from './components/Formulario/formulario';
import MiOrg from './components/MiOrg';

function App() {
  return (
    <div>

      {/* FORMA DE LLAMAR UNA FUNCION JSX */}
      <Header/>
      <Formulario />
      <MiOrg/>
    </div>
  );
}

export default App;
