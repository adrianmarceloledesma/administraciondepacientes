import React, { Fragment, useState} from 'react';

import './App.css';
import Form from './components/form';
import Cita from './components/cita';


function App() {
  

  // agregar citas del form
  const [citas, setCitas] = useState([])



  // funcion que tome las citas actuales y agrege las nuevas
  const crearCita = (cita) =>{
    setCitas([
      // tomo una copia del state asi evita que se sobreescriban los datos
      ...citas,
      // y agregamos el objeto que viene como prop desde form.js
      cita
    ])
  }

  // funcion que elimina una cita por ID
  const eliminarCita = (id) =>{
    const nuevasCitas = citas.filter(cita => cita.id !== id);
     // los id que son diferentes a cita.id van a aprecer en pantalla y el que es igual se eliminará
    setCitas(nuevasCitas);
   
  }
  
  // condicional de h2 si hay citas o no hay
  const titulo = citas.length === 0 ? 'No Hay Citas' : 'Administra Tus Citas'


  return (
    <Fragment>
      <header>
        <h1>Administrador de Tareas</h1>
      </header>

      <Form crearCita={crearCita} />
      <div className="contenedores">
         <h2 >{titulo}</h2>

         {
           citas.map((cita) =>
             <Cita
                citaa={cita}
                key={cita.id}
               //  viene de form.js el id
                eliminarCita={eliminarCita}
             />
           )
         }
      </div>   
    </Fragment>
  );
}

export default App;
