import React from "react";
import { StaticImage } from "gatsby-plugin-image"
//import PropTypes from "prop-types";
import { Link} from "gatsby"
import jsonData from "../content.json"

import {Row, Col, Container} from 'react-bootstrap';

const Resultat = (props) => {

  //je récupère les tableaux de référence
    const references = jsonData.references[0];
  //je récupère les réponses de l'utilisateur
    const userAnswer = props.data;
    
    var result = [{"signe" : ['null' , 1], "ascendant" : ['null' , 1]}];

    for(const property in references){
        
        var count = 0; 
        for ( var i = 0; i < references[property].length; i++ ) {
            
            if ( references[property][i] === userAnswer[i] ){
              count += 1; 
            } 
            
        }
        
        //je compare les résultats actuels et stocke les valeurs les plus grandes
        if(count > result[0].signe[1]){
          result[0].signe.splice(0, 2, property, count)
        }else{
          if(count > result[0].ascendant[1]){
            result[0].ascendant.splice(0, 2, property, count)
          }
        }
      }
        

      const textPersonnality = (personnalite) => {
        for(const name in jsonData.resultats[0]){
          if(name === personnalite) return (jsonData.resultats[0][name][0])
        }
      } 

      const textAscendant = (personnalite) => {
        for(const name in jsonData.resultats[0]){
          if(name === personnalite) return (jsonData.resultats[0][name][1])
        }
      } 
      
      const namePersonnality = (name) => {
        switch(name) {
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
            return <h1>Tu es {name}</h1>;
        }
      }

      const nameAscendant = (name) => {
        switch(name) {
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
            return <h2>Ascendant {name}</h2>;
        }
      }


    return(
        
        <Row className="align-items-center rowQuiz">
            <Col xs={12} md={6}>
              <Container className="text-center">
                  <StaticImage
                    src="../images/picture1.png"
                    width={500}
                    quality={100}
                    
                    alt="Quiz picture"
                    style={{ margin: `auto` }}
                  />
              </Container>
            </Col>
            <Col xs={12} md={6}>
              <Container data-aos="fade-left">
                  <div>
                      {namePersonnality(result[0].signe[0])} 
                      <p>{textPersonnality(result[0].signe[0])}</p>
                  </div>
              </Container>
              <Container data-aos="fade-right" className="py-3">
                  {nameAscendant(result[0].ascendant[0])}
                  <p>{textAscendant(result[0].ascendant[0])}</p>
                  <p>Tu es stagiaire ? Félicitations tu peux nous rejoindre dans l'opensapce, sinon
                  <Link to="/" className="link"> try again !</Link>
                  </p>
              </Container>
            </Col>
          </Row>
       
 
    )
}

/* Quiz.propTypes = {
  arrayQuestion: PropTypes.array.isRequired,
} */

export default Resultat


