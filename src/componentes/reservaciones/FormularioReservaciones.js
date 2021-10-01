import React, {Fragment,useState}  from 'react';
import '../../App.css';




const FormularioReservaciones = () =>    {
  const styleB={
    backgroundColor:'#ea8118',
  borderColor:'#ea8118'
  }  

  const [cita, actualizarCita] = useState({
    nombre: '',
    email: '',
    telefono: '',
    fecha: '',
   hora: '',
   noPersonas: '',
   indicaciones: '',
});
const [ error, actualizarError ] = useState(false)

// Función que se ejecuta cada que el usuario escribe en un input
const actualizarState = e => {
  actualizarCita({
    ...cita,
    [e.target.name]: e.target.value 
 })
}

// Extraer los valores
const { nombre,email,telefono,fecha,hora,noPersonas,indicaciones } = cita;
const submitCita = e => {
  e.preventDefault();
 
// Validar
if(nombre.trim() === '' || email.trim() === ''  || telefono.trim() === ''  || fecha.trim() === ''  || hora.trim() === '' || noPersonas.trim()===''|| indicaciones.trim()==='' ){
  actualizarError(true);
  return;
}

// Eliminar el mensaje previo 
actualizarError(false);
  console.log(cita)

  // Reiniciar el form
  actualizarCita({
    nombre: '',
    email: '',
    telefono: '',
    fecha: '',
   hora: '',
   noPersonas: '',
   indicaciones: '',
})
}

  return (
    <Fragment>
    { error? <p className="alerta-error">Todos los campos son obligatorios</p> : null }
      <form className="mb-4" onSubmit={submitCita}>

        <div className="form-group">
          <label htmlFor="nya" className="negrita">Nombre y Apellidos</label>
          <input type="text" className="form-control" name="nombre" required onChange={actualizarState} value={nombre}/>            
        </div>

        <div className="form-group">
          <label htmlFor="email" className="negrita">Email</label>
          <input type="email" className="form-control" id="email" name="email" required onChange={actualizarState} value={email}/> 
        </div>

        <div className="form-group">
          <label htmlFor="telefono" className="negrita">Telefono</label>
          <input type="text" className="form-control" id="telefono" name="telefono" required onChange={actualizarState} value={telefono} />
        </div>

        <div><label htmlFor="fecha" className="negrita">Fecha:</label>
        <input type="date" className="form-control" className="form-control" id="fecha" name="fecha" required onChange={actualizarState} value={fecha}/>
        </div> 

        <div className="form-group">
          <label htmlFor="hora" className="negrita">Hora</label>
          <input type="time" name="hora" className="form-control" required onChange={actualizarState} value={hora}/>
        </div>
        <div className="form-group">
          <label htmlFor="noPersonas" className="negrita" required>No. de Personas</label>
          <input type="number" name="noPersonas" className="form-control" required onChange={actualizarState} value={noPersonas}/>
        </div>

        <div className="form-group">
          <label htmlFor="indicaciones" className="negrita">Indicaciones Especiales</label>
          <textarea className="form-control" id="indicaciones" name="indicaciones" onChange={actualizarState} value={indicaciones}></textarea>
        </div>

        <button type="submit" style={styleB} className="btn btn-dark">Reservar</button>

      </form>
      </Fragment>
  )
  
}

   


export default FormularioReservaciones;