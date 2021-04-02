import React, { useState} from "react";
import PropTypes from "prop-types"

import {Row, Col, Container, Form, Button} from 'react-bootstrap';

const Quiz = () => {
    const arrayQuestion = [
        'Quel élément est associé à ton signe astrologique ?',
        'Si je te parle du RGPD ... ?',
        'Chez Awa tu choisis ?'
      ]

      /* const arrayReponses = {
        0 : ['Feu', 'Air', 'On s’en fout'],
        1 : ['Ne m’en parle pas', 'Connais pas', 'J’ai quelques notions', 'ça dépend, ça me concerne ?'],
        2 : ['Rougail', 'Couscous', 'Tiep', 'Un truc qui change']
      } */

    const arrayReponses = {
        0 : [{'A' : 'Feu'}, {'B' : 'Air'}, {'C' : 'On s’en fout'}],
        1 : [{'A' : 'Ne m’en parle pas'}, {'B' : 'Connais pas}'}, {'C' : 'J’ai quelques notions'}, {'D' : 'ça dépend, ça me concerne ?'}],
        2 : [{'A': 'Rougail'}, {'B': 'Couscous'}, {'C': 'Tiep'}, {'D': 'Un truc qui change'}]
    }

    const [compteurQt, setcompteurQt] = useState(0);

    const question = arrayQuestion[compteurQt]


    function handleSubmit() {
        setcompteurQt(compteurQt + 1);


    }

    return(
        <Row>
            <Col className="questions">
                <Container>
                    {/* barre de progression */}
                    <div></div>
                    {/* Questions */}
                    <div>
                        <Question data={question} />
                    </div>
                </Container>
            </Col>
            <Col className="reponses">
                <Container>
                    {/* Réponses */}
                    <Reponses data={arrayReponses[compteurQt]} />
                    {/* Valider */}
                    <Button 
                        variant="primary"
                        onClick={handleSubmit}
                    >   Question suivante</Button>
                </Container>
            </Col>
        </Row>
    )
}

/* Quiz.propTypes = {
  arrayQuestion: PropTypes.array.isRequired,
} */

export default Quiz


const Question = (props) => {
    return (
        <h1>{props.data}</h1>
    )
}

const Reponses = (props) => {
    return (
        <div>
        {props.data.forEach(element => {
                <Form.Check 
                    key={element[0]}
                    value={element[0]}
                    type='radio'
                    label={element[1]}
                    name='reponse'
                />
            })
        }
        </div>
    ) 
}