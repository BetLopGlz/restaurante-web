import React, { useState} from 'react';
import Header from '../Header/Header';
import Footer from '../footer/Footer';
import FormularioReservaciones from './FormularioReservaciones'


const Reservaciones = () => {

	const styleTitle = {
		textAlign: 'center',
		font: 'bold',
		color: '#ea8118',
	}

	const [datos, setDatos] = useState({
        nombre: '',
        apellido: ''
    })

    const handleInputChange = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault()
        console.log('enviando datos...' + datos.nombre + ' ' + datos.apellido)
    }

	return (

		<>

			<Header />
				<section className="text-center">
					<div className="container">
						<h1 className="jumbotron-heading" style={styleTitle}>Reservaciones </h1>
						<p className="lead text-muted">
							Aqui puedes realizar una reservacion!!
						</p>
					</div>
				</section>
				<div className="container">
				<div className="col-md-6">
		        
				<FormularioReservaciones/>
				</div>
			</div>
			
			<Footer />

		</>

	)
}



export default Reservaciones;