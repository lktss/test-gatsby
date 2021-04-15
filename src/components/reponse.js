import React from "react";
import PropTypes from "prop-types";

import {Col, Container} from 'react-bootstrap';

const Reponses = (props) => {
    return(
     
        <Col xs={12} md={6} className="reponses">
            <Container className="px-5">
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

Reponses.propTypes = {
    validChoice: PropTypes.func.isRequired,
    data : PropTypes.object.isRequired
} 

export default Reponses

/* ************************ */

const Reponse = (props) => {
    for ( const property in props.data){
        return (
            <div className="m-3" >
                <button 
                    className="btn text-left"
                    key={property}
                    value={property}
                    onClick={props.onChange}
                >
                    {props.data[property]}
                </button>
            </div>
        ) 
    }
    
}

Reponse.propTypes = {
    onChange : PropTypes.func.isRequired,
    data : PropTypes.object.isRequired
} 