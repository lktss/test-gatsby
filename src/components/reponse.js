import React from "react";
//import PropTypes from "prop-types";

import {Col, Container, Form} from 'react-bootstrap';

const Reponses = (props) => {
    return(
     
        <Col className="reponses">
            <Container>
                {/* Réponses */}
                {props.data.reponses.map((element, index) => (
                    <div key={index}>
                        <Reponse onChange={props.validChoice} data={element} />
                    </div>
                ))}
            </Container>
        </Col>
 
    )
}

/* Quiz.propTypes = {
  arrayQuestion: PropTypes.array.isRequired,
} */

export default Reponses



const Reponse = (props) => {
    for ( const property in props.data){
        return (
            <div>
                <Form.Check 
                    key={property}
                    value={property}
                    type='radio'
                    label={props.data[property]}
                    name='reponse'
                    onClick={props.onChange}
                />
            </div>
        ) 
    }
    
}