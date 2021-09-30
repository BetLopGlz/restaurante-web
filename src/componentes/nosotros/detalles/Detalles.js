import React,{useState} from 'react';

const Detalles = () => {

  const [texto,setTexto]=useState('Leer Más>>')
  const styleA={
    backgroundColor: '#ea8118',
    borderColor: '#ea8118',
   

  }

  const styleH2={
    color:'#ea8118'
  }
  
  const styleP={
      align: 'justify'
  }
 

    return (

        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <h2 style={styleH2}>Objetivo</h2>
                    <p style={styleP}>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
                    <p><a className="btn btn-secondary" style={styleA} href="#" rel="noopener noreferrer" role="button">Leer más &raquo;</a></p>
                </div>
                <div className="col-md-4">
                    <h2 style={styleH2} >Misión</h2>
                    <p style={styleP}>Ser el mejor restaurante familiar por la calidad del servicio y por elaborar diariamente pan artesanal, café de especialidad y platillos  con sazón casero.</p>
                    <p><a className="btn btn-secondary" style={styleA} href="#" rel="noopener noreferrer" role="button" >Leer más &raquo;</a></p>
                </div>
                <div className="col-md-4">
                    <h2 style={styleH2}>Visión</h2>
                    <p style={styleP}>Consolidarnos en la zona centro y bajío del país, como la mejor opción en el sector restaurantero, brindando el mejor servicio, café de especialidad, pan artesanal y platillos innovadores de alta calidad, elaborados diariamente con ingredientes de la más alta calidad.</p>
                    <p><a className="btn btn-secondary" style={styleA} href="#" rel="noopener noreferrer" role="button">{texto} </a></p>
                </div>
            </div>

            <hr/>

        </div>

    )
    
  }



export default Detalles;