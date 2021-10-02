import React, { Fragment } from 'react'
import Card from 'react-bootstrap/Card'
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {
  faWhatsapp,
  faInstagram,
  faFacebook,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ContactoCard = () => {
    const styleHeader={
        backgroundColor:'#343a40'
    }
    const style={
        color: 'white',
        align:'center',
        font:'bold'
    }
    const styleText={
        backgroundColor: '##ffebad',
        font:'bold',
        fontSize: 25,
        align:'left'
    }
    return (
        <Fragment>
            <Card className="text-center">
                <Card.Header style={styleHeader}><h2 style={style}>Contactanos!!</h2></Card.Header>
                <Card.Body style={styleText}>
               
                    <Card.Text>
                    <FontAwesomeIcon icon={faWhatsapp} />  0123456789
                    <br/>
                    <FontAwesomeIcon icon={faEnvelope} /> vidaycafe@midominio.com
                    <br/>
                    <FontAwesomeIcon icon={faFacebook} /> vidayCafeOf  
                    <br/>
                    <FontAwesomeIcon icon={faTwitter} /> @vidayCafe
                    <br/>
                    <FontAwesomeIcon icon={faInstagram} /> vidaycafeMx
                    </Card.Text>
                   
                </Card.Body>
                <Card.Footer className="text-muted" style={styleHeader}></Card.Footer>
            </Card>
        </Fragment>
    )
}

export default ContactoCard
