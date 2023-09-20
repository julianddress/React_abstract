import './App.css';

// FORMA DE IMPORTAR COMPONENTES EN REACT
import Header from './components/Header/Header';
import Formulario from './components/Formulario/formulario';

function App() {
  return (
    <div>

      {/* FORMA DE LLAMAR UNA FUNCION JSX */}
      <Header/>
      <Formulario />

    </div>
  );
}

export default App;
