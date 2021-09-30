import React from 'react';

import Header from '../Header/Header';

import Footer from '../footer/Footer';

import MenuRest from '../platillos/MenuRest';

const Platillos = () =>  {

	const styleTitle={
		textAlign: 'center',
		font: 'bold',
		color:'#ea8118',
	}

		return(

			<>

			<Header />

			<main role="main" className="flex-shrink-0 mt-5">
				<section className="text-center">
				    <div className="container">
				      <h1 className="jumbotron-heading" style={styleTitle}>Menú </h1>
				      <p className="lead text-muted">
				      	Lista de platillos disponibles
				      </p>				      
				    </div>
				</section>

			<MenuRest/>
			
			</main>	
	  		<Footer />

	  		</>

		)

	}



export default Platillos;