import './listaOpciones.css'

const ListaOpciones = (props) =>{

    // metodo map -> 
    // arreglo.map( () => {
    //    return <option> </option>
    // })

    const equipos = [
        "Programación",
        "Data science",
        "Devops",
        "UX y Diseño",
        "Móvil",
        "Innovación y gestión"
    ]

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
                    {equipos.map( (equipo, index) => <option key={index} value={equipo}>{equipo}</option> )}               
                </select>
            </div>
}

export default ListaOpciones