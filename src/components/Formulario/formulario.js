import './formulario.css'
import CampoTexto  from '../CampoTexto'
import ListaOpciones from '../ListaOpciones'
import Boton from '../Boton'

const Formulario = () => {

    const manejoEnvio = (event) =>{
        event.preventDefault()
    } 

    return  <section className='formulario'>
                <form onSubmit={manejoEnvio}>
                    <h2>Rellena el formulario para crear el colaborador</h2>
                    <CampoTexto titulo='Nombre' placeholder='Registrar Nombre' required/>
                    <CampoTexto titulo='Puesto' placeholder='Registrar Puesto' required/>
                    <CampoTexto titulo='Foto' placeholder='Registrar enlace de foto ' required/>
                    <ListaOpciones/>
                    <Boton>Enviar</Boton>
                </form>
            </section>
}

export default Formulario