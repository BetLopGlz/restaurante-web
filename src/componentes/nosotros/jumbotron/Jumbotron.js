import React from 'react';

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
            <div className="container" >
                <h1 style={style} className="display-3">Nosotros </h1>
                <p style={styleP} >
                Iniciamos nuestro recorrido por el mundo del sabor en el año de 1945 con la apertura de “La Perla de Oriente" en un pequeño local en la avenida Álvaro Obregón con el número 60 de la Colonia Roma en la Ciudad de México. Su fama creció rápidamente, gracias a los deliciosos bizcochos recién horneados y la forma tan llamativa de servir el café con leche.

                A partir de ahí, Vida y Café se consolidó como uno de los restaurantes con la mejor comida mexicana por su gran calidad y tener platillos ideales para desayunar, comer y cenar.
                </p>
                <p ><a className="btn btn-primary btn-lg" style={styleA} href="#" rel="noopener noreferrer" target="_blank" role="button">Visitar Web</a></p>
            </div>
        </div>

    )
    
  }



export default Jumbotron;