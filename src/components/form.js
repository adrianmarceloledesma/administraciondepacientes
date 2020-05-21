import React, {useState} from 'react'

function Form(props) {
    const [cita, setCita] = useState({
        mascota:'',
        dueño:'',
        fecha:'',
        hora:'',
        sintomas:''
    })
    
    // creamos otro state para el error
    const [error, setError] = useState(false)


    
    const handleChange = (e) =>{
        setCita({
            ...cita ,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit =(e) =>{
        e.preventDefault();

        // validar
        if(cita.mascota.trim() === '' || cita.dueño.trim() === '' || cita.fecha.trim() === '' || cita.hora.trim() === '' ||
        cita.sintomas.trim() === '' ){
            setError(true)
            return;
        
        }
        // eliminar el mensaje de error si se escribe bien despues
        setError(false)

  

        
        // crear la cita
        props.crearCita(cita)
         // esta recibiendo el metodo crearCita por props desde app.js, y a la vez esta pasando como prop desde esta 
        // prop el objeto state "cita" que contiene todos los datos de la mascota, dueño, fecha, etc. y asi puede 
        // ponerlos en el array state vacio "citas" de app.js
               // asignar un ID

               
        cita.id = Math.random();
        // como es un objeto se puede agregar propiedades extra

        // reiniciar el formulario
        setCita({
            mascota:'',
            dueño:'',
            fecha:'',
            hora:'',
            sintomas:''
        })
    }
  

    return (
        <div className="contenedores">
            <h2>Crear Cita</h2>
            {
                error? <p>Error! Completar Todos Los Campos</p> : null
            }
            <form onSubmit={onSubmit}>
                <label>Nombre Mascota</label>
                <input 
                   type="text"
                   name="mascota"
                   onChange={handleChange}
                   value={cita.mascota}
                />
                <label>Nombre Dueño</label>
                <input 
                   type="text"
                   name="dueño"
                   onChange={handleChange}
                   value={cita.dueño}
                />
                <label>Fecha</label>
                <input 
                   type="date"
                   name="fecha"
                   onChange={handleChange}
                   value={cita.fecha}
                />
                <label>Hora</label>
                <input 
                   type="time"
                   name="hora" 
                   onChange={handleChange}
                   value={cita.hora}
                /> 
                <label>Síntomas</label>
                <textarea
                   name="sintomas"
                   onChange={handleChange}
                   value={cita.sintomas}
                ></textarea>    
                
                <button
                  type="submit"
                >Enviar</button>
            </form>
        </div>
    )
}

export default Form
