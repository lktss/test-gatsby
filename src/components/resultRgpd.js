import React from "react";
import { Link} from "gatsby";
import PropTypes from "prop-types";
import { StaticImage } from "gatsby-plugin-image";

import {Score, Correction} from './customAnswer';

import {Row, Col, Container} from 'react-bootstrap';

const ResultatRgpd = (props) => {
    const userAnswer = props.data;
    const reference = props.json.references
    var score = 0; 
    for ( var j = 0; j < reference.length; j++ ) {
        
        if ( reference[j] === userAnswer[j] ){
          score += 1; 
        }   
    }

    return(
        <Row className="align-items-center rowQuiz">
            <Col xs={12} md={6}>
                <Container className="text-center">
                    <StaticImage
                        src="../images/Illustration.png"
                        width={500}
                        quality={100}
                        
                        alt="Quiz picture"
                        style={{ margin: `auto` }}
                    />
                </Container>
            </Col>
            <Col xs={12} md={6}>
                <Container data-aos="fade-left">
                    <Score nb={score} length={userAnswer.length} />
                    <p><Link to="/" className="link">Bye Bye</Link></p>
                </Container>
            </Col>
            <Col xs={12} md={12}>
                <Container data-aos="fade-bottom" className="py-3">
                    <Correction rep={userAnswer} data={props.json}/>
                </Container>
            </Col>
        </Row>
      
    )
    
}

ResultatRgpd.propTypes = {
    data: PropTypes.array.isRequired,
    json: PropTypes.object.isRequired,
  } 
  

export default ResultatRgpd


