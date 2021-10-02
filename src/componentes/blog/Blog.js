import React from 'react'
import Header from '../Header/Header';
import Footer from '../footer/Footer';
import Articulo from './articulo/Articulo';

const Blog = () => {
    const styleTitle={
        color: '#ea8118',
        align:'center',
        font:'bold'
    }
    return (
        <>
      
            <Header/>

            <main role="main" className="flex-shrink-0 mt-5">
				<section className="text-center">
				    <div className="container">
				      <h1 className="jumbotron-heading" style={styleTitle}>Blog</h1>
				      <p className="lead text-muted">
				      	Artículos disponibles
				      </p>				      
				    </div>
				</section>
            		
                    <Articulo/>
           </main> 

					

						

				

	  		
            
            <Footer/>
        
        </>
    )
}

export default Blog
