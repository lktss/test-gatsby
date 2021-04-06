import React, { useState} from "react";
//import PropTypes from "prop-types";
import jsonData from "../content.json"

import Question from "./question.js"
import Reponses from "./reponse.js"
import Resultat from "./resultat.js"

import {Row} from 'react-bootstrap';

const Quiz = () => {
    const arrayQuestion = jsonData.questions;
    const [compteurQt, setcompteurQt] = useState(0);
    const [history, setHistory] = useState([]);
    

    function handleSubmit(event) {
        setcompteurQt(compteurQt + 1);
        setHistory(history.concat(event.target.value));
        console.log(history);
    }

    if(compteurQt === arrayQuestion.length){
        alert('fin')
        return(
            <Row className="align-items-center h-100">
                <Resultat data={history}/>
            </Row>
        )
    }else{
        return(
            <Row className="align-items-center h-100">
                <Question data={arrayQuestion[compteurQt]} compteur={compteurQt} maxQuestions={arrayQuestion.length} />
                <Reponses data={arrayQuestion[compteurQt]} validChoice={handleSubmit}/>
            </Row>
        )
    }
}

/* Quiz.propTypes = {
  arrayQuestion: PropTypes.array.isRequired,
} */

export default Quiz


