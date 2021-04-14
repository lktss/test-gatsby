import React from "react";
//import PropTypes from "prop-types";
import {Row, Col, Card} from 'react-bootstrap';

export const Score = (props) => {
    const resultat = Math.round(props.nb * 100 / props.length); 
    var text;
    switch(true) {
        case (resultat <= 25):
          text ='Seul conseil, prépares tes économies ! Le RGPD va te coûter cher ...';
          break;
        case (resultat <= 50):
          text = 'L\'espoir fait vivre non ?';
          break;
        case (resultat <= 75):
          text = 'Tu es sur la bonne voie, jeune Padawan !';
          break;
        default:
          text = 'Un nouvel expert RGPD est dans la place !';
          break;
    };

    return (
        <div>
            <h1>Ton score est de {resultat}%</h1>
            <p>{text}</p>
        </div>
    );
}

export const Correction = (props) => {
    const qr = props.data.questions;   
    return (
        <Row>
            {qr.map((question, index) => (
                <Col xs={12} md={4} key={index}>
                    <Card body>
                        <Card.Title>{question.question}</Card.Title>
                        <Card.Text>
                            {question.reponses.map((reponse, id) => (
                                <CorrectRep key={id} repUser={props.rep[index]} repJuste={props.data.references[index]} reponses={reponse}/>
                            ))}
                        </Card.Text>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}

const CorrectRep = (props) => {
   
    for (const value in props.reponses){
            
        if(value === props.repJuste){
            return (
                <div className="m-3" >
                    <p className="true">{props.reponses[value]}</p>
                </div>
            )
        }else{
            if(value !== props.repJuste && value === props.repUser){
                return (
                    <div className="m-3" >
                        <p className="false">{props.reponses[value]}</p>
                    </div>
                )
            }else{
                return (
                    <div className="m-3" >
                        <p>{props.reponses[value]}</p>
                    </div>
                )
            }
        } 

    //fin for object
    }
}
 

export const Description = (props) => {
    for(const name in props.json){
        if(name === props.personnalite) return (props.json[name][0])
    }        
}



export const NamePersonnality = (props) => {
    switch(props.name) {
      case 'RomainM':
        return <h1>Tu es Romain Marquois</h1>;
      case 'RomainP':
        return <h1>Tu es Romain Petit</h1>;
      case 'Thea':
        return <h1>Tu es  Théa</h1>;
      case 'Stagiaire':
        return (
          <h1>Tu es <span>Expert</span> Stagiaire</h1>
        );
      default:
        return <h1>Tu es {props.name}</h1>;
    }
  }

  export const NameAscendant = (props) => {
    switch(props.name) {
      case 'RomainM':
        return <h2>Ascendant Romain Marquois</h2>;
      case 'RomainP':
        return <h2>Ascendant Romain Petit</h2>;
      case 'Thea':
        return <h2>Ascendant  Théa</h2>;
      case 'Stagiaire':
        return (
          <h2>Ascendant <span>Expert</span> Stagiaire</h2>
        );
      default:
        return <h2>Ascendant {props.name}</h2>;
    }
  }