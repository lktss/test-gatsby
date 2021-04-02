import * as React from "react"
 import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import {Row, Col, Container} from 'react-bootstrap';


const IndexPage = () => {
 return (
  <Layout>
      <SEO title="Home" />
        <Row>
            <Col className="questions">
                <Container>
                     <StaticImage
                        src="../images/gatsby-astronaut.png"
                        width={300}
                        quality={95}
                        formats={["AUTO", "WEBP", "AVIF"]}
                        alt="A Gatsby astronaut"
                        style={{ marginBottom: `1.45rem` }}
                      />
                </Container>
            </Col>
            <Col className="reponses">
                <Container>
                  <h1>Quel Ubi"dreamer" est tu ?</h1>
                   <Link to="/play" className="btn btn-primary">Commencer le quiz</Link>
                </Container>
            </Col>
        </Row>
    </Layout>
 )
}

export default IndexPage



const References = () => {
  const references = {
    "Quentin" : ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A'], 
    "Damien" : ['B', 'B', 'B', 'A', 'B', 'B', 'B', 'B', 'A', 'B', 'B', 'B', 'A', 'B', 'B', 'A', 'A', 'A', 'B'],
    "Ahmed" : ['A', 'B', 'C', 'B', 'B', 'A', 'A', 'B', 'B', 'C', 'C', 'C', 'A', 'A', 'A', 'B', 'B', 'A', 'A'],
    "RomainP" : ['B', 'B', 'B', 'C', 'A', 'B', 'A', 'B', 'A', 'B', 'B', 'B', 'A', 'A', 'B', 'C', 'B', 'A', 'A'],
    "RomainM" : ['B', 'A', 'A', 'A', 'A', 'C', 'A', 'A', 'B', 'B', 'C', 'B', 'A', 'C', 'A', 'A', 'B', 'B', 'C'],
    "Thea" : ['B', 'C', 'D', 'D', 'C', 'D', 'B', 'C', 'B', 'D', 'C', 'C', 'A', 'C', 'A', 'C', 'B', 'B', 'B'],
    "Manon" : ['A', 'C', 'C', 'D', 'C', 'D', 'B', 'B', 'A', 'C', 'C', 'B', 'A', 'A', 'A', 'C', 'C', 'C', 'C'],
    "Clement" : ['B', 'C', 'D', 'C', 'C', 'D', 'B', 'C', 'C', 'D', 'C', 'B', 'A', 'C', 'A', 'C', 'A', 'A', 'A'],
    "Stagiaire" : ['C', 'D', 'D', 'C', 'D', 'A', 'B', 'C', 'C', 'A', 'D', 'A', 'B', 'D', 'C', 'D', 'C', 'C', 'D'],
};

var userAnswer = ['C', 'B', 'C', 'B', 'D', 'A', 'B', 'C', 'C', 'D', 'B', 'B', 'A', 'A', 'A', 'C', 'C', 'C', 'B'];

var result = ['null' , 1];
for(const property in references){
    console.log ({property: references[property]})
    //var matches = [];
    var count = 0; 
    for ( var i = 0; i < references[property].length; i++ ) {
        
        if ( references[property][i] === userAnswer[i] ){
          count += 1; 
          //matches.push( a[i] );
        } 
        
    }
    if(count > result[1]){
      result.splice(0, 2, property, count)
    }
  }
  var pourcentageResult = Math.round(result[1] * 100 / userAnswer.length);
  console.log(pourcentageResult)
    

  return (
      <div>
        Tu ressembles à {pourcentageResult}% à {result[0]}
      </div>
  ) 
} 
