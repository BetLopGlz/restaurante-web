import React from 'react';

const Servicios = () =>   {
    
const styleA={
        backgroundColor: '#ea8118',
        borderColor: '#ea8118'
      
      }

      const style = {
        textAlign: 'left',
        font: 'bold',
        color:'#ea8118',
    };
 

    return (

        <div className="container servicios">

            <div className="row">

                <div className="col-lg-4">
                <img className="rounded-circle" src="https://media.istockphoto.com/vectors/line-fork-knife-and-plate-continuous-one-line-drawing-cutlery-cooking-vector-id1254016301?s=612x612" alt="Generic placeholder image" width="140" height="140"/>
                    <h2 style={style}>Comer en Restaurant</h2>
                    <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                    <p><a className="btn btn-secondary" style={styleA} href="#" rel="noopener noreferrer" role="button" >Leer más &raquo;</a></p>
                </div>

                <div className="col-lg-4">
                <img class="rounded-circle" src="https://cdn.pixabay.com/photo/2019/03/13/13/25/grocery-4052896_960_720.jpg" alt="Generic placeholder image" width="140" height="140"/>
                    <h2 style={style}>Para Llevar</h2>
                    <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
                    <p><a className="btn btn-secondary" style={styleA}  href="#" rel="noopener noreferrer" role="button">Leer más &raquo;</a></p>
                </div>

                <div className="col-lg-4">
                <img class="rounded-circle" src="https://cdn.pixabay.com/photo/2021/03/05/03/06/food-delivery-6070101_960_720.png" width="140" height="140"/>
                    <h2 style={style}>Servicio a Domicilio</h2>
                    <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                    <p><a className="btn btn-secondary" style={styleA} href="#" rel="noopener noreferrer" role="button">Leer más &raquo;</a></p>
                </div>

            </div>

        </div>

    )
    
  }



export default Servicios;