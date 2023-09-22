import './listaOpciones.css'

const ListaOpciones = (props) =>{

    // metodo map -> 
    // arreglo.map( () => {
    //    return <option> </option>
    // })

    const manejarEnvio = (e) => {
        props.actualizarEquipo(e.target.value)
    }

    return  <div className='lista-opciones'>
                <label>Equipo</label>
                <select value={props.valor} onChange={manejarEnvio}>
                    <option 
                        value='' 
                        defaultValue='' 
                        disabled 
                        hidden
                    >Seleccionar un equipo</option>
                    {props.equipo.map( (equipo, index) => <option key={index} value={equipo}>{equipo}</option> )}               
                </select>
            </div>
}

export default ListaOpciones