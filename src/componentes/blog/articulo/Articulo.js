import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

const Articulo = () => {
  const styleImage = {
    width: "400px",
    height: "300px",
  };

  const styleTitle = {
    color: "#ea8118",
    font: "bold",
  };
  return (
    <>
      <Col xs={12} md={10}>
        <Card text="black">
          <br />
          <Card.Img
            style={styleImage}
            src="https://cdn.pixabay.com/photo/2021/02/04/03/57/comida-5980184_960_720.jpg"
            align="center"
          />
          <Card.Body>
            <Card.Title style={styleTitle} align="center">
              “PLATILLOS TÍPICOS MEXICANOS DURANTE SEPTIEMBRE”
            </Card.Title>
            <Card.Text
              className="lead text-muted"
              font="bold"
              align="justify"
              size="20px"
              font-family="GoldmanBold"
            >
              <p>
                La gastronomía mexicana se destaca por ser una de las más
                deliciosas gracias a sus variantes, colores y claro, sus sabores
                únicos que son capaces de cautivar hasta al paladar más
                complicado y especial del mundo.
              </p>

              <p>
                {" "}
                Si bien, todo el año se pueden disfrutar de las delicias
                culinarias de México, es en el mes de septiembre es cuando los
                platillos típicos salen para cautivar a los comensales que todos
                esos días se unen para sentir los sabores de la gastronomía
                mexicana más representativa.
              </p>

              <p>
                Es por eso que nos encargamos de buscar los platillos más
                representativos que se pueden disfrutar en el mes de la
                Independencia de México, y de algo estamos seguros, ¡te van a
                encantar!
              </p>

              <p>
                Uno de los platillos más emblemáticos en el mes de septiembre es
                el <b>Chile en Nogada</b>, originario de Puebla y que en sus
                colores representa a los colores de la bandera nacional; el
                color verde con el chile, el blanco en la salsa y el rojo en la
                granada. Se compone de un chile poblano relleno de picadillo con
                frutas secas, bañado en salsa de crema y nuez, y adornado con la
                granada; además es un platillo rico en vitamina C, provitamina A
                y es alto en antioxidantes, lo que ayuda al cuidado de la piel y
                la vista.
              </p>

              <p>
                Una de las delicias preferidas en el mes de septiembre son las{" "}
                <b>Tostadas</b> , mismas que se pueden acompañar de distintos
                guisados, en los que destacan: la tinga, picadillo, pollo con
                rajas y la pata de res preparada, además, se les complementan
                con frijoles refritos, crema, queso y lechuga. Y si no es
                suficiente, para degustar se puede ofrecer una gran variedad de
                salsas.
              </p>

              <p>
                Sin lugar a dudas, algo que no puede faltar en el mes de
                septiembre, son los tradicionales <b>Tamales</b>, que, a pesar
                de prepararse de diferentes maneras en cada estado de la
                República Mexicana, no pierden el don de ser una delicia. Los
                hay rellenos de pollo, carne de cerdo, queso, rajas, con o sin
                salsa, en hoja de maíz o plátano, además de haber tamales dulces
                de guayaba, chocolate, rompope, cajeta y rellenos con pasas,
                nuez o arándanos.
              </p>

              <p>
                Cerraremos este listado con el <b>Pollo con mole poblano</b>,
                uno de los platillos icónicos de la cocina mexicana y que
                consiste en una salsa elaborada con una variedad de chiles,
                semillas, hierbas y especias. El mole se puede comer con pollo o
                pavo, y frecuentemente la salsa sobrante se utiliza para hacer
                enmoladas.
              </p>

              <p>
                Sin lugar a dudas la gastronomía mexicana que se presenta
                durante el mes de septiembre es de disfrutar en cada probada, tú
                como nosotros disfruta de cada platillo. ¡Buen provecho!
              </p>
            </Card.Text>
          </Card.Body>
          <Card.Footer align="center">
            <small className="text-muted">Actualizado 2 Octubre 2021</small>
          </Card.Footer>
        </Card>
        <br />
      </Col>

      <Col xs={12} md={10}>
        <Card text="black">
          <br />
          <Card.Img
            style={styleImage}
            src="https://cdn.pixabay.com/photo/2013/11/05/23/55/coffee-206142_960_720.jpg"
            align="center"
          />
          <Card.Body>
            <Card.Title style={styleTitle} align="center">
              “BENEFICIOS DEL CAFÉ”
            </Card.Title>
            <Card.Text
              className="lead text-muted"
              font="bold"
              align="justify"
              size="20px"
              font-family="lucida"
            >
              <p>
                Una de las bebidas más consumidas en el mundo es el café, y es
                que, los consumidores no escatiman en tiempo y precio para el
                consumo del mismo. Mayormente los países europeos son los que
                promedian el mayor consumo de café por persona, pero en cuanto a
                países latinoamericanos, es Brasil el mejor posicionado (lugar
                31) promediando un consumo de 0.6 tazas por persona al día, y
                nuestro país, México se encuentra posicionado en el lugar 54 en
                consumo de esta bebida con un promedio de 0.21 tazas por persona
                al día.
              </p>
              <p>
                En cuanto a la exportación, México es uno de los principales
                exportadores latinoamericanos, datos que parecen apuntar a que
                el consumo de café en el país crecerá bastante debido a esto y a
                la nueva cultura del café.
              </p>
              <p>
                Con todo eso, han surgido distintas investigaciones científicas
                que buscan demostrar las razones de su impacto en cuestión de
                gustos y de beneficios que otorga al cuerpo humano, coincidiendo
                en que un consumo moderado de café (entre tres y cuatro tazas al
                día) es beneficioso para la salud debido al aporte de los
                nutrientes.
              </p>
              <p>
                Razón por la que nos hemos encargado de investigar cuáles son
                los beneficios del café, teniendo cómo resultado los siguientes
                seis que te compartimos:
              </p>
              <p>
                1. <b>El café ayuda a quemar grasas. </b>La cafeína es un
                acelerador natural del metabolismo, pues ésta aumenta los
                niveles de adrenalina en el cuerpo liberando los ácidos grasos
                de manera directa desde los tejidos grasos.
              </p>
              <p>
                2.{" "}
                <b>
                  Una taza de café aporta nutrientes como vitaminas y minerales.
                </b>{" "}
                Entre ellos se encuentra la Riboflavina, Niacina, Ácido
                pantoténico, manganeso, Potasio y Magnesio.
              </p>
              <p>
                3. <b>El café es una fuente de antioxidantes. </b> Además de las
                vitaminas y minerales, el café aporta una carga de antioxidantes
                que incluye polifenoles y ácidos hidroxicinámicos; estos
                retrasan el proceso natural del envejecimiento y previenen
                enfermedades.
              </p>
              <p>
                4.{" "}
                <b>
                  Tomar café disminuye la probabilidad de contraer enfermedades.
                </b>{" "}
                Entre esas enfermedades se encuentran: Diabetes tipo 2,
                Alzheimer y Parkinson.
              </p>
              <p>
                5. <b>El café protege al corazón e hígado.</b> Además de
                combatir las enfermedades crónicas y degenerativas, el café
                ayuda al hígado previniendo cirrosis e hígado graso.
              </p>
              <p>
                6.{" "}
                <b>
                  Tomar café diariamente de manera moderada reduce la
                  probabilidad de desarrollar cáncer de hígado y colorrectal
                </b>
                , que es uno de los tipos de cáncer más frecuentes y con mayor
                mortalidad entre la población.
              </p>
              <p>
                Ahora que ya sabes los beneficios del café, seguramente lo
                seguirás consumiendo por placer y por salud. ¡Disfrútalo!
                Fuente:
                https://www.rentokil-initial.cl/blog/6-beneficios-de-salud-del-cafe
              </p>
            </Card.Text>
          </Card.Body>
          <Card.Footer align="center">
            <small className="text-muted">Actualizado 2 Octubre 2021</small>
          </Card.Footer>
        </Card>
        <br />
      </Col>
    </>
  );
};

export default Articulo;
