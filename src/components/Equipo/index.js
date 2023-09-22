import './Equipo.css'
import Colaborador from '../Colaboradores' 

const Equipo = (props) => {

    // DESTRUCTURACIÓN
    const { fondoColor, cardColor, titulo } = props.datos
    const { colaboradores } = props

    const obj = {
        backgroundColor: fondoColor 
    }

    const obj2 = {
        borderColor: cardColor 
    }

    return  <>
        { colaboradores.length > 0 &&
            <section className='equipo' style={obj}>
                <h3 style={obj2}>{titulo}</h3>
                <div className='colaboradores'>
                    { colaboradores.map( (colaborador, index) => 
                        <Colaborador 
                            datos={colaborador} 
                            key={index} 
                            cardColor={cardColor}
                        /> 
                        ) 
                    }
                </div>
            </section>
        }
    </>        
}

export default Equipo