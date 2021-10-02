import React, { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../footer/Footer';
import FormularioReservaciones from './FormularioReservaciones'
import ConsultaCitas from './ConsultaCitas'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'


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
			[event.target.name]: event.target.value
		})
	}

	const enviarDatos = (event) => {
		event.preventDefault()
		console.log('enviando datos...' + datos.nombre + ' ' + datos.apellido)
	}

	return (

		<>

			<Header />
			<main role="main" className="flex-shrink-0 mt-5">
				<section className="text-center">
				    <div className="container">
				      <h1 className="jumbotron-heading" style={styleTitle}>Reservaciones </h1>
				      <p className="lead text-muted">
				      	Registro y Consulta de Reservaciones
				      </p>				      
				    </div>
				</section>
				<Container>
				<Row >
					<Col md={4}>
						<FormularioReservaciones />
					</Col>
					<Col xs={0}/>
					<Col xs={8} md={7}>
						<ConsultaCitas />
					</Col>
				</Row>
				</Container>
				</main>
			<Footer />

		</>

	)
}



export default Reservaciones;