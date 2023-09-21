import { useState } from 'react'
import './MiOrg.css'

// ESTADOS - Hooks
// useState()
//           variable        funcion()
// const [nombreVariable, funcionActualiza] = useState(valor);

const MiOrg = () => {

    // APLICAMOS EL HOOK
    const [mostar, actualizarMostrar] = useState(true);

    // CREAMOS UNA FUNCION PARA CONTROLAR EL EVENTO onClick DE LA IMG
    const manejarClick = () => {
        actualizarMostrar(!mostar)
    }
    
    return  <section className='orgSection'>
                <h2 className='title'>Mi organización</h2>
                <img src="./img/Agregar.png" alt="Boton Agregar" onClick={manejarClick}/>
            </section>
}

export default MiOrg