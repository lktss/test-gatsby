import React from "react";
//import PropTypes from "prop-types";

import jsonData from "../content.json"

//import {Col, Container, ProgressBar} from 'react-bootstrap';

const Resultat = (props) => {

    const references = jsonData.references[0];
    
    
    const userAnswer = props.data;
    
    
    var result = ['null' , 1];

    for(const property in references){
        
        var count = 0; 
        for ( var i = 0; i < references[property].length; i++ ) {
            
            if ( references[property][i] === userAnswer[i] ){
              count += 1; 
            } 
            
        }
        if(count > result[1]){
          result.splice(0, 2, property, count)
        }
      }
      var pourcentageResult = Math.round(result[1] * 100 / userAnswer.length);
      console.log(result)
        
    
      return (
          <div>
            Tu ressembles à {pourcentageResult}% à {result[0]}
          </div>
      ) 


    /* return(
        
        <Col className="questions">
            <Container>
                {/* barre de progression 
                <div>
                    <ProgressBar striped variant="info" now={props.compteur} max={props.maxQuestions}/>
                </div>
                {/* Questions 
                <div>
                    <h1>{props.data.question}</h1>
                </div>
            </Container>
        </Col>
 
    ) */
}

/* Quiz.propTypes = {
  arrayQuestion: PropTypes.array.isRequired,
} */

export default Resultat



