import './formulario.css'
import CampoTexto  from '../CampoTexto'
import ListaOpciones from '../ListaOpciones'
import Boton from '../Boton'

const Formulario = () => {

    return  <section className='formulario'>
                <form>
                    <h2>Rellena el formulario para crear el colaborador</h2>
                    <CampoTexto titulo='Nombre' placeholder='Registrar Nombre' />
                    <CampoTexto titulo='Puesto' placeholder='Registrar Puesto'/>
                    <CampoTexto titulo='Foto' placeholder='Registrar enlace de foto '/>
                    <ListaOpciones/>
                    <Boton>Enviar</Boton>
                </form>
            </section>
}

export default Formulario