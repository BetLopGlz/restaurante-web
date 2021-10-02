import React, { useState } from "react";

const Detalles = () => {
  const [texto, setTexto] = useState("Leer Más>>");
  const styleA = {
    backgroundColor: "#ea8118",
    borderColor: "#ea8118",
  };

  const styleH2 = {
    color: "#ea8118",
  };

  

  return (
    <div className="container">
      <div className="row">
      
        <div className="col-md-4">
          <h2 style={styleH2}>Objetivo</h2>
          <p align='justify'>
            Brindar una gastronomía única e inolvidable, creada con nuestro
            sabor y creatividad. Ofrecer la mejor atención a nuestros clientes.
            Contar con personal altamente calificado en la preparación de
            comidas criollas y comidas marinas,los cuales deben tener un alto
            nivel de creatividad para innovar en los sabores de nuestros platos
            y bebidas.
          </p>
          <p>
            <a
              className="btn btn-secondary"
              style={styleA}
              href="#"
              rel="noopener noreferrer"
              role="button"
            >
              Leer más &raquo;
            </a>
          </p>
        </div>
        <div className="col-md-4">
          <h2 style={styleH2}>Misión</h2>
          <p align='justify'>
            Ser el mejor restaurante familiar por la calidad del servicio y por
            elaborar diariamente pan artesanal, café de especialidad y platillos
            con sazón casero.
          </p>
          <p>
            <a
              className="btn btn-secondary"
              style={styleA}
              href="#"
              rel="noopener noreferrer"
              role="button"
            >
              Leer más &raquo;
            </a>
          </p>
        </div>
        <div className="col-md-4">
          <h2 style={styleH2}>Visión</h2>
          <p salign='justify'>
            Consolidarnos en la zona centro y bajío del país, como la mejor
            opción en el sector restaurantero, brindando el mejor servicio, café
            de especialidad, pan artesanal y platillos innovadores de alta
            calidad, elaborados diariamente con ingredientes de la más alta
            calidad.
          </p>
          <p>
            <a
              className="btn btn-secondary"
              style={styleA}
              href="#"
              rel="noopener noreferrer"
              role="button"
            >
              {texto}{" "}
            </a>
          </p>
        </div>
      </div>

      <hr />
    </div>
  );
};

export default Detalles;
