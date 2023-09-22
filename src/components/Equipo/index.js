import './Equipo.css'
import Colaborador from '../Colaboradores' 
import hexToRgba from 'hex-to-rgba'

const Equipo = (props) => {

    // DESTRUCTURACIÓN
    const { cardColor, titulo } = props.datos
    const { colaboradores, eliminarColaborador, actualizarColor } = props

    const obj = {
        backgroundColor: hexToRgba(cardColor, 0.6) 
    }

    const obj2 = {
        borderColor: cardColor 
    }

    return  <>
        { colaboradores.length > 0 &&
            <section className='equipo' style={obj}>
                <input 
                    type="color"  
                    className='input-color'
                    value={cardColor}
                    onChange={(event) => {
                        actualizarColor(event.target.value, titulo)
                    }}

                />
                <h3 style={obj2}>{titulo}</h3>
                <div className='colaboradores'>
                    { colaboradores.map( (colaborador, index) => 
                        <Colaborador 
                            datos={colaborador} 
                            key={index} 
                            cardColor={cardColor}
                            eliminarColaborador={eliminarColaborador}
                        /> 
                        ) 
                    }
                </div>
            </section>
        }
    </>        
}

export default Equipo