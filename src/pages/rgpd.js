import React, { useState} from "react";


//import des composants 
import Layout from "../components/layout"
import SEO from "../components/seo"
import Question from "../components/question.js"
import Reponses from "../components/reponse.js"
import ResultatRgpd from "../components/resultRgpd.js"

//import des données
import rgpdData from "../rgpd.json"

//import composants bootstrap
import {Row} from 'react-bootstrap';


const Rgpd = () => {
    
    //récupération des données json
    const arrayQuestion = rgpdData.questions;
    //mise en place d'un état des composants via les hooks (compteur des questions, historique de réponse)
    const [compteurQt, setcompteurQt] = useState(0);
    const [history, setHistory] = useState([]);
    
    //fonction de validation de la réponse (j'augmente le compteur pour passer à la question suivante et stocke la réponse dans l'historique)
    function handleSubmit(event) {
        setcompteurQt(compteurQt + 1);
        setHistory(history.concat(event.target.value));
        event.target.blur();
    }

    //Si j'arrive à la dernière question alors j'affiche les résultats
    if(compteurQt === arrayQuestion.length){
       
        return(
            <Layout>
                <SEO title="Ton niveau RGPD" />
                <ResultatRgpd data={history} json={rgpdData}/>
            </Layout>
        )    
        
    }else{
        //sinon je continu l'affichage des questions
        return(
            <Layout>
                <SEO title="Quiz-Rgpd" />
                <Row className="align-items-center rowQuiz">
                    <Question data={arrayQuestion[compteurQt]} compteur={compteurQt} maxQuestions={arrayQuestion.length} />
                    <Reponses data={arrayQuestion[compteurQt]} validChoice={handleSubmit}/>
                </Row>
            </Layout>
        )
    }
}


export default Rgpd