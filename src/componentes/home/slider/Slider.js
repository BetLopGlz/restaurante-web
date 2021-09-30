import React from 'react';

const Slider = () =>  {
	const styleA={
        backgroundColor: '#ea8118',
        borderColor: '#ea8118'
      }
  	return (

  		<div id="slider" className="carousel slide" data-ride="carousel" >
		    <ol className="carousel-indicators" >
		        <li data-target="#slider" data-slide-to="0" className="active"></li>
		        <li data-target="#slider" data-slide-to="1"></li>
		        <li data-target="#slider" data-slide-to="2"></li>
		    </ol>
		    <div className="carousel-inner">
		        <div className="carousel-item active">
		            <img className="img-fluid" src="https://cdn.pixabay.com/photo/2021/01/19/08/47/sandwich-5930496_960_720.jpg" />
		            <div className="elementos">
		                <a className="btn btn-lg btn-dark" href="#" style={styleA}  role="button">Leer más</a>
		            </div>
		        </div>
		        <div className="carousel-item">
		            <img className="img-fluid" src="https://media.istockphoto.com/photos/vegetable-paneer-sandwich-using-cottage-cheese-with-tomato-onion-and-picture-id1300443216?s=612x612" />
		            <div className="elementos">
		                <a className="btn btn-lg btn-dark" href="#" style={styleA} role="button">Leer más</a>
		            </div>
		        </div>
		        <div className="carousel-item">
		            <img className="img-fluid" src="https://cdn.pixabay.com/photo/2016/11/06/23/16/breakfast-1804436_960_720.jpg" />
		            <div className="elementos">
		                <a className="btn btn-lg btn-dark" href="#" style={styleA} role="button">Leer más</a>
		            </div>
		        </div>
		    </div>
		    <a className="carousel-control-prev" href="#slider" role="button" data-slide="prev">
		        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
		        <span className="sr-only">Previous</span>
		    </a>
		    <a className="carousel-control-next" href="#slider" role="button" data-slide="next">
		        <span className="carousel-control-next-icon" aria-hidden="true"></span>
		        <span className="sr-only">Next</span>
		    </a>
		</div>

  	)
    
  }


export default Slider;