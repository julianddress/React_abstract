import './MiOrg.css'

const MiOrg = (props) => {

    return  <section className='orgSection'>
                <h2 className='title'>Mi organización</h2>
                <img src="./img/Agregar.png" alt="Boton Agregar" onClick={props.cambiarMostrar}/>
            </section>
}

export default MiOrg