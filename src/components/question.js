import React from "react";
//import PropTypes from "prop-types";

import {Col, Container, ProgressBar} from 'react-bootstrap';

const Question = (props) => {
    return(
     
        <Col className="questions">
            <Container>
                {/* barre de progression */}
                <div>
                    <ProgressBar striped variant="info" now={props.compteur} max={props.maxQuestions}/>
                </div>
                {/* Questions */}
                <div>
                    <h1>{props.data.question}</h1>
                </div>
            </Container>
        </Col>
 
    )
}

/* Quiz.propTypes = {
  arrayQuestion: PropTypes.array.isRequired,
} */

export default Question



