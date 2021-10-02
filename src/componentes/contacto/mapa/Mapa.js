import React from 'react';

class Mapa extends React.Component {

  render() {

    return (

        <div className="embed-responsive embed-responsive-4by3">
            <iframe className="embed-responsive-item" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=Av.%20de%20los%20Casta%C3%B1os%20809%20local%208,%2052148%20Metepec,%20M%C3%A9x.+(Vida%20y%20Caf%C3%A9)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
        </div>
        

    )
    
  }

}

export default Mapa;