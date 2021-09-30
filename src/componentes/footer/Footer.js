import React, {useState} from 'react';


const Footer = () => {

  const textoInicial=useState(
    '©'+ new Date().getFullYear()+ ' Mi Proyecto,Inc. '
  )
  
    return (

        <footer className="container">
            <p className="float-right"><a href="#" rel="noopener noreferrer">Subir</a></p>
            <p> {textoInicial}  
              <a href="#" rel="noopener noreferrer">Política de Privacidad </a> 
              <a href="#" rel="noopener noreferrer">Términos</a>
            </p>
        </footer>

    )
    
  }



export default Footer;