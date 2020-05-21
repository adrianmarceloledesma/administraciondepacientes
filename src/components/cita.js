import React from 'react'

function Cita(props) {
    return (
        <div className="contenedor-cita">
            <p>Mascota : <span className="span">{props.citaa.mascota}</span></p>
            <p>Dueño : <span className="span">{props.citaa.dueño}</span></p>
            <p>Fecha : <span className="span">{props.citaa.fecha}</span></p>
            <p>Hora : <span className="span">{props.citaa.hora}</span></p>
            <p>Síntomas : <span className="span">{props.citaa.sintomas}</span></p>
            <input 
               type="button"
               value="Eliminar &times;"
               onClick={() => props.eliminarCita(props.citaa.id)}  
            /> 
        </div>
    )
}

export default Cita
