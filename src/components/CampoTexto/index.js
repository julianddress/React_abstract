import './campoTexto.css'

const CampoTexto = (props) =>{

    // OBTENEMOS EL VALOR DE LOS INPUTS APARTIR DEL PROP.
    // OSEA EL ESTADO DEL HOOK QUE CREAMOS EN FORMULARIO
    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }

    const placeholderModificado = `${props.placeholder}`

    return  <div className='campo-texto'>
                <label >
                    {props.titulo}
                </label>
                <input 
                    placeholder={placeholderModificado} 
                    required={props.required}
                    value={props.valor}
                    onChange={manejarCambio}
                />
            </div>
} 

export  default CampoTexto