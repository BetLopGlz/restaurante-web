import React from 'react';

class Mapa extends React.Component {

  render() {

    return (

        <div className="embed-responsive embed-responsive-4by3">
            <iframe className="embed-responsive-item" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=Boulevard%20Aeropuerto%20Miguel%20Alem%C3%A1n,%20No%2055,%20esq.%20Tolloc%C3%A1n,%20Col.%20Parque%20Industrial%20de%20Lerma,%20Localidad%20Lerma,%20Estado%20de%20M%C3%A9xico,%20C.P.%2052000%20(Plaza%20Sendero)+(Vida%20y%20Caf%C3%A9)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        </div>
        

    )
    
  }

}

export default Mapa;