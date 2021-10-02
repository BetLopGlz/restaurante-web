import React, {Fragment} from 'react'
import firebase from '../../firebase'
import Table from 'react-bootstrap/Table'



const ConsultaCitas = () => {
  const [citas, setCitas] = React.useState([])

  const eliminar = async (id) => {
    try {
      const db = firebase.firestore()
      await db.collection('citas').doc(id).delete()
      const arrayFiltrado = citas.filter(item => item.id !== id)
      setCitas(arrayFiltrado)
    } catch (error) {
      console.log(error)
    }
}

  React.useEffect(() => {
    const obtenerDatos = async () => {
      const db = firebase.firestore()
      try {
        const data = await db.collection('citas').get()
        const arrayData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }))
        //console.log(arrayData)
        console.log(arrayData)
        setCitas(arrayData)
      } catch (error) {
        console.log(error)
      }
    }
    obtenerDatos()
  }, [])
  return (
    
      <Fragment>
          <h3>Lista Reservaciones</h3>
          <Table  responsive="sm">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Fecha</th>
                <th>Hora</th>
                <th center>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {citas.map(item => (
                <tr>
                  <td>{item.nombre}</td>
                  <td>{item.fecha}</td>
                  <td>{item.hora}</td>
                  <td center>
                    <button className='btn btn-danger btn-sm float-right' onClick={() => eliminar(item.id)}>
                      Eliminar
                    </button>
                    
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
       </Fragment> 
    
  )
}

export default ConsultaCitas
