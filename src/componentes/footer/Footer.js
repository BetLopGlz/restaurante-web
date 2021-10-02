import React, {useState} from 'react';
import {faArrowUp} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Footer = () => {
  const styleB={
    backgroundColor:'#ea8118',
  borderColor:'#ea8118'
  }
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      
    });
  };

  const textoInicial=useState(
    '©'+ new Date().getFullYear()+ ' Mi Proyecto,Inc. '
  )
  
    return (

        <footer className="container">
            <p className="float-right"><button  style= {styleB} className='btn btn-warning btn-sm float-right'  onClick={scrollToTop} rel="noopener noreferrer"><FontAwesomeIcon icon={faArrowUp} /> </button></p>
            <p> {textoInicial}  
              <a href="#" rel="noopener noreferrer">Política de Privacidad </a> 
              <a href="#" rel="noopener noreferrer">Términos</a>
            </p>
        </footer>

    )
    
  }



export default Footer;