import './formulario.css'
import CampoTexto  from '../CampoTexto'
import ListaOpciones from '../ListaOpciones'
import Boton from '../Boton'
import { useState } from 'react'

const Formulario = (props) => {

    // CREAMOS UN ESTADO PARA CADA INPUT DEL FORMULARIO
    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")

    // ACA MOSTRAMOS O VEMOS EL VALOR DEL ESTADO
    // OSEA LE QUITAMOS LA RESPONSABILIDAD A NUESTRO NAVEGADOR 
    const manejoEnvio = (event) =>{
        event.preventDefault()
        const DatosEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }

        console.log(DatosEnviar)
    } 

    return  <section className='formulario'>
                <form onSubmit={manejoEnvio}>
                    <h2>Rellena el formulario para crear el colaborador</h2>
                    <CampoTexto 
                        titulo='Nombre' 
                        placeholder='Registrar Nombre' 
                        required
                        valor={nombre}
                        actualizarValor={actualizarNombre}
                    />
                    <CampoTexto 
                        titulo='Puesto' 
                        placeholder='Registrar Puesto' 
                        required
                        valor={puesto}
                        actualizarValor={actualizarPuesto}
                    />
                    <CampoTexto 
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
            </section>
}

export default Formulario