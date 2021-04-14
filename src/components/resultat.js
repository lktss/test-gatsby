import React from "react";
import { Link} from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import PropTypes from "prop-types";

import {Description, NameAscendant, NamePersonnality} from './customAnswer';

import {Row, Col, Container} from 'react-bootstrap';

const Resultat = (props) => {
    //je récupère les tableaux de référence
    const references = props.json.references[0];
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
                    <NamePersonnality name={result[0].signe[0]} /> 
                    <p><Description personnalite={result[0].signe[0]} json={props.json.resultats[0]} /></p>
                </Container>
                <Container data-aos="fade-right" className="py-3">
                    <NameAscendant name={result[0].ascendant[0]} />
                    <p><Description personnalite={result[0].ascendant[0]} json={props.json.resultats[0]} /></p>
                    <p>Tu es stagiaire ? Félicitations tu peux nous rejoindre dans l'opensapce, sinon
                    <Link to="/" className="link"> try again !</Link>
                    </p>
                </Container>
            </Col>
        </Row>
        
    )

  }


Resultat.propTypes = {
  data: PropTypes.array.isRequired,
  json: PropTypes.object.isRequired,
} 

export default Resultat


