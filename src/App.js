import { useState } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';

// FORMA DE IMPORTAR COMPONENTES EN REACT
import Header from './components/Header/Header';
import Formulario from './components/Formulario/formulario';
import MiOrg from './components/MiOrg';
import Equipo from './components/Equipo';
import Footer from './components/Footer';

function App() {

  // HOOKS o Estados de componentes
  const [mostarFormulario, actualizarMostar] = useState(true);
  const [colaboradores, actualizarColaboradores] = useState([{
    id: uuidv4(),
    equipo: 'Front End',
    nombre: 'Julian Motta',
    puesto: 'Instructor',
    foto: 'https://github.com/julianddress.png',
    fav: true
  },
  {
    id: uuidv4(),
    equipo: 'Móvil',
    nombre: 'Andrea Pardo',
    puesto: 'Instructora',
    foto: 'https://github.com/andrea.png',
    fav: false
  }
  ])

  const [equipos, actualizarEquipos] = useState([
    {
      id: uuidv4(),
      titulo: "Programación",
      cardColor: "#57C278",
      fondoColor: "#D9F7E9"
    },
    {
      id: uuidv4(),
      titulo: "Front End",
      cardColor: "#82CFFA",
      fondoColor: "#E8F8FF"
    },
    {
      id: uuidv4(),
      titulo: "Data science",
      cardColor: "#A6D157",
      fondoColor: "#E8F8FF"
    },
    {
      id: uuidv4(),
      titulo: "Devops",
      cardColor: "#E06B69",
      fondoColor: "#F0F8E2"
    },
    {
      id: uuidv4(),
      titulo: "UX y Diseño",
      cardColor: "#DB6EBF",
      fondoColor: "#FAE9F5"
    },
    {
      id: uuidv4(),
      titulo: "Móvil",
      cardColor: "#FFBA05",
      fondoColor: "#FFF5D9"
    },
    {
      id: uuidv4(),
      titulo: "Innovación y gestión",
      cardColor: "#FF8A29",
      fondoColor: "#FFEEDF"
    }
  ])

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

  // Eliminar un colaborador
  const eliminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id);
    actualizarColaboradores(nuevosColaboradores);
  }
  

  // Actualizar color del equipo
  const actualizarColor = (color, id) => {
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
        equipo.cardColor = color;
      }
      return equipo;
    });
    actualizarEquipos(equiposActualizados);
  }
  
  // Crear Equipo
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo)
    actualizarEquipos([ ...equipos, { ...nuevoEquipo, id: uuidv4() } ])
  }

  // Dar like a un colaborador
  const like = (id) => {
    const actualizarFav = colaboradores.map( (colaborador) => {
      if (colaborador.id === id){
          // NEGAMOS EL VALOR DEL FAV
          colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(actualizarFav)
  }

  return (
          <div>
            <Header/>
            {
              mostarFormulario && <Formulario 
                equipos={equipos.map((equipo) => equipo.titulo)}
                registrarColaborador={registrarColaborador}
                crearEquipo={crearEquipo}
              />
            }
            <MiOrg cambiarMostrar={cambiarMostar}/>
            {
              equipos.map( (equipo) => 
                <Equipo 
                  key={equipo.titulo} 
                  datos={equipo}
                  colaboradores={colaboradores.filter( (colaborador) => colaborador.equipo === equipo.titulo)}
                  eliminarColaborador={eliminarColaborador}
                  actualizarColor={actualizarColor}
                  like={like}
                />
              )
            }

            <Footer />
          </div>
  );
}

export default App;
