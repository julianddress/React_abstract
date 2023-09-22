import './Equipo.css'

const Equipo = (props) => {

    // DESTRUCTURACIÓN
    const { fondoColor, cardColor, titulo } = props.datos

    const obj = {
        backgroundColor: fondoColor 
    }

    const obj2 = {
        borderColor: cardColor 
    }

    return  <section className='equipo' style={obj}>
                <h3 style={obj2}>{titulo}</h3>
                <div></div>
            </section>
}

export default Equipo