import React from 'react';
import {Col,Row,Container} from 'react-bootstrap';

const Jumbotron = () =>  {

  const style = {
    textAlign: 'center',
    font: 'bold',
    color:'#ea8118',
};
const styleP={
  textAlign: 'justify',
  font:'bold',
}
const styleDiv={
  backgroundColor: '#ffebad'
}

const styleA={
  backgroundColor: '#ea8118',
  borderColor: '#ea8118'

}
    return (
      
        <div className="jumbotron" style={styleDiv}>
            <Container>
              <Row>
                <Col md-auto> 
                <h1 style={style} className="display-3">Nosotros </h1>
                  <p style={styleP} >
                  Iniciamos nuestro recorrido por el mundo del sabor en el año de 1945 con la apertura de “La Perla de Oriente" en un pequeño local en la avenida Álvaro Obregón con el número 60 de la Colonia Roma en la Ciudad de México. Su fama creció rápidamente, gracias a los deliciosos bizcochos recién horneados y la forma tan llamativa de servir el café con leche.
                  </p>
                  <p style={styleP} >
                  A partir de ahí, Vida y Café se consolidó como uno de los restaurantes con la mejor comida mexicana por su gran calidad y tener platillos ideales para desayunar, comer y cenar.
                  </p>
                  <p style={styleP} >
                  Desde el principio, los socios fundadores han tenido el sueño de contribuir en el desarrollo de todos sus colaboradores y de seguir haciendo crecer esta gran familia, hoy llamada  Vida y Café, con presencia en más de cuatro estados y con la firme convicción de ofrecer a sus invitados calidad en su servicio, pan artesanal, café de especialidad y platillos mexicanos con exquisito sazón casero.
                  </p>
               </Col> 
               </Row>
            </Container>
            </div>
       

    )
    
  }

export default Jumbotron;