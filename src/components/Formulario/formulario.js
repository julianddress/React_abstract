import './formulario.css'
import Campo  from '../Campo'
import ListaOpciones from '../ListaOpciones'
import Boton from '../Boton'
import { useState } from 'react'

const Formulario = (props) => {

    // CREAMOS UN ESTADO PARA CADA INPUT DEL FORMULARIO
    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")

    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")

    // DESTRUCTURACIÓN
    const { registrarColaborador, crearEquipo} = props

    // ACA MOSTRAMOS O VEMOS EL VALOR DEL ESTADO
    // OSEA LE QUITAMOS LA RESPONSABILIDAD A NUESTRO NAVEGADOR 
    const manejoEnvio = (e) =>{
        e.preventDefault()
        const DatosEnviar = {
            nombre,
            puesto,
            foto,
            equipo,
        }
        registrarColaborador(DatosEnviar)
    } 

    const manejarNuevoEquipo = (e) =>{
        e.preventDefault()
        crearEquipo({titulo, cardColor: color})
    }

    return  <section className='formulario'>
                <form onSubmit={manejoEnvio}>
                    <h2>Rellena el formulario para crear el colaborador</h2>
                    <Campo 
                        titulo='Nombre' 
                        placeholder='Registrar Nombre' 
                        required
                        valor={nombre}
                        actualizarValor={actualizarNombre}
                    />
                    <Campo 
                        titulo='Puesto' 
                        placeholder='Registrar Puesto' 
                        required
                        valor={puesto}
                        actualizarValor={actualizarPuesto}
                    />
                    <Campo 
                        titulo='Foto' 
                        placeholder='Registrar enlace de foto ' 
                        required
                        valor={foto}
                        actualizarValor={actualizarFoto}
                    />
                    <ListaOpciones
                        valor={equipo}
                        actualizarEquipo={actualizarEquipo}
                        equipo={props.equipos}
                    />
                    <Boton>Enviar</Boton>
                </form>
                <form onSubmit={manejarNuevoEquipo}>
                    <h2>Rellena el formulario para crear el equipo</h2>
                    <Campo 
                        titulo='Titulo' 
                        placeholder='Registrar titulo' 
                        required
                        valor={titulo}
                        actualizarValor={actualizarTitulo}
                    />
                    <Campo 
                        titulo='Color' 
                        placeholder='Registrar color en Hex' 
                        required
                        valor={color}
                        actualizarValor={actualizarColor}
                        type="color"
                    />
                    <Boton>Registar Equipo</Boton>
                </form>
            </section>
}

export default Formulario