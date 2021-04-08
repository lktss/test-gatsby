import React from "react";
import PropTypes from "prop-types";

import {Col, Container, ProgressBar} from 'react-bootstrap';

const Question = (props) => {
    return(
     
        <Col xs={12} md={6} className="questions">
            <Container className="px-5">
                {/* barre de progression */}
                <div className="mb-4">
                    <ProgressBar variant="info" now={props.compteur} max={props.maxQuestions}/>
                </div>
                {/* Questions */}
                <div className="pt-4">
                    <h1>{props.data.question}</h1>
                </div>
            </Container>
        </Col>
 
    )
}

Question.propTypes = {
  compteur: PropTypes.number.isRequired,
  maxQuestions: PropTypes.number.isRequired,
  data : PropTypes.object.isRequired
} 

export default Question



