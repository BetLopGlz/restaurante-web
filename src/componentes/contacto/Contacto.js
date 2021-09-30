import React from 'react';
import Header from '../Header/Header';
import Formulario from './formulario/Formulario';
import Mapa from './mapa/Mapa';
import Footer from '../footer/Footer';


const Contacto = () =>    {
	 const style={
		 color: '#ea8118',
		 align:'center',
		 font:'bold'
	 }
	

		return(

			<>

			<Header />

			<main role="main" className="flex-shrink-0 mt-5">

				<div className="container">

					<h1 className="mb-5" style={style}>Contacto</h1>

            		<div className="row">

            			<div className="col-md-6">
		        
							<Formulario />

						</div>

						<div className="col-md-6">
		        
							<Mapa />

						</div>

					</div>
				</div>	

	  		</main>

	  		<Footer />

	  		</>

		)

	}



export default Contacto;