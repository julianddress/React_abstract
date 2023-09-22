import { useState } from 'react';
import './App.css';

// FORMA DE IMPORTAR COMPONENTES EN REACT
import Header from './components/Header/Header';
import Formulario from './components/Formulario/formulario';
import MiOrg from './components/MiOrg';
import Equipo from './components/Equipo';
import Footer from './components/Footer';

function App() {

  const [mostarFormulario, actualizarMostar] = useState(true);
  const [colaboradores, actualizarColaboradores] = useState([])

  // TERNARIO --> condicion ? seMuestra : noSeMuestra;
  // CORTOCIRCUITO --> condicion && seMuestra

  const registrarColaborador= (colaborador) => {

      // SPREAD OPERATOR ( [COPIAR_UNA_INFORMACION, NUEVO_VALOR] )
      actualizarColaboradores([...colaboradores, colaborador])
      console.log('Nuevo colaborador: ', colaborador)
  }

  const cambiarMostar = () => {
        actualizarMostar(!mostarFormulario)
  }

  // ARREGLO LISTA EQUIPOS
  const equipos = [
    {
      titulo: "Programación",
      cardColor: "#57C278",
      fondoColor: "#D9F7E9"
    },
    {
      titulo: "Front End",
      cardColor: "#E8F8FF",
      fondoColor: "#82CFFA"
    },
    {
      titulo: "Data science",
      cardColor: "#A6D157",
      fondoColor: "#E8F8FF"
    },
    {
      titulo: "Devops",
      cardColor: "#E06B69",
      fondoColor: "#FDE7E8"
    },
    {
      titulo: "UX y Diseño",
      cardColor: "#DB6EBF",
      fondoColor: "#FAE9F5"
    },
    {
      titulo: "Móvil",
      cardColor: "#FFBA05",
      fondoColor: "#FFF5D9"
    },
    {
      titulo: "Innovación y gestión",
      cardColor: "#FF8A29",
      fondoColor: "#FFEEDF"
    },
  ]

  return (
          <div>
            <Header/>
            {
              mostarFormulario && <Formulario 
                equipos={equipos.map((equipo) => equipo.titulo)}
                registrarColaborador={registrarColaborador}
              />
            }
            <MiOrg cambiarMostrar={cambiarMostar}/>
            {
              equipos.map( (equipo) => 
                <Equipo 
                  key={equipo.titulo} 
                  datos={equipo}
                  colaboradores={colaboradores.filter( colaborador => colaborador.equipo === equipo.titulo)}
                />
              )
            }

            <Footer />
          </div>
  );
}

export default App;
