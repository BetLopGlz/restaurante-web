import React from 'react';

import Header from '../Header/Header';
import Jumbotron from './jumbotron/Jumbotron';
import Detalles from './detalles/Detalles';
import Footer from '../footer/Footer';


class Nosotros extends React.Component {

	render() {

		return(

			<>

			<Header />

			<main role="main" className="flex-shrink-0 mt-5">
		        
				<Jumbotron />
				<Detalles />	

	  		</main>

	  		<Footer />

	  		</>

		)

	}

}

export default Nosotros;