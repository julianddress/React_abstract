import './campo.css'

const Campo = (props) =>{

    const { type = 'text' } = props

    console.log(type);
    // OBTENEMOS EL VALOR DE LOS INPUTS APARTIR DEL PROP.
    // OSEA EL ESTADO DEL HOOK QUE CREAMOS EN FORMULARIO
    const manejarCambio = (e) => {
        props.actualizarValor(e.target.value)
    }

    const placeholderModificado = `${props.placeholder}`

    return  <div className={`campo campo-${type}`}>
                <label >
                    {props.titulo}
                </label>
                <input 
                    placeholder={placeholderModificado} 
                    required={props.required}
                    value={props.valor}
                    onChange={manejarCambio}
                    type={type}
                />
            </div>
} 

export  default Campo