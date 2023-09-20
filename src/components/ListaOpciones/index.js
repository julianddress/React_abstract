import './listaOpciones.css'

const ListaOpciones = () =>{

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

    return  <div className='lista-opciones'>
                <label>Equipo</label>
                <select>
                    {equipos.map( (equipo, index) => <option key={index}>{equipo}</option> )}               
                </select>
            </div>
}

export default ListaOpciones