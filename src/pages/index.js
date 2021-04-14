import * as React from "react"
 import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import {Row, Col, Container} from 'react-bootstrap';


const IndexPage = () => {
 return (
  <Layout>
      <SEO title="Accueil" />
        <Row className="align-items-center h-100">
            <Col xs={12} md={6} className="questions">
                <Container data-aos="fade-right" className="text-center">
                     <StaticImage
                        src="../images/picture1.png"
                        width={500}
                        quality={100}
                        
                        alt="Quiz picture"
                        style={{ margin: `auto` }}
                      />
                </Container>
            </Col>
            <Col  xs={12} md={6} className="reponses">
                <Container data-aos="fade-left" className="p-5">
                    <Link  to={`/quiz/`} state={{ id : 1 }} className="link">
                        <h3>Es-tu RGPD friendly ?</h3>
                    </Link>
                   <Link to={`/quiz/`} state={{ id : 2 }} className="link">
                       <h3>Quel Ubi'dreamer' es-tu ?</h3>
                       </Link>
                </Container>
            </Col>
        </Row>
    </Layout>
 )
}

export default IndexPage


