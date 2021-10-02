import React from 'react';
import {Carousel} from 'react-bootstrap'
const Slider = () =>  {
	const styleA={
        backgroundColor: '#ea8118',
        borderColor: '#ea8118'
      }
	  const imgStyle= {
		width: 'auto',
		height: '500px',
		maxHeight: '500px'
	  }
  	return (

		<Carousel>
		<Carousel.Item>
		  <img style={imgStyle}
			className="d-block w-100"
			src="https://cdn.pixabay.com/photo/2020/02/13/23/57/mexican-food-4847184_960_720.jpg"
			
		  />
		  <Carousel.Caption>
		  <h3>PROMO SEMANAL 1</h3>
			<p>Prueba nuestras enchiladas</p>
		  </Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item>
		  <img style={imgStyle}
			className="d-block w-100"
			src="https://cdn.pixabay.com/photo/2018/07/14/21/30/club-sandwich-3538455_960_720.jpg"
			
		  />
	  
		  <Carousel.Caption>
		  <h3>PROMO SEMANAL 2</h3>
			<p>Esta semana promociones en todos los Sandwich</p>
		  </Carousel.Caption>
		</Carousel.Item>
		<Carousel.Item>
		  <img style={imgStyle}
			className="d-block w-100"
			src="https://cdn.pixabay.com/photo/2017/03/27/12/03/breakfast-2178268_960_720.jpg/400x400?text=Promocion3"
			alt="Third slide"
		  />
	  
		  <Carousel.Caption>
			<h3>PROMO SEMANAL 3</h3>
			<p>Descuento en la compra de un capuchino</p>
		  </Carousel.Caption>
		</Carousel.Item>
	  </Carousel>

  	)
    
  }


export default Slider;