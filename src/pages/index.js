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
        <Row className="align-items-center h-100">
            <Col className="questions">
                <Container data-aos="fade-right">
                     <StaticImage
                        src="../images/undraw_Questions_re_1fy7.svg"
                        width={300}
                        quality={95}
                        formats={["AUTO", "WEBP", "AVIF"]}
                        alt="Quiz picture"
                        style={{ marginBottom: `1.45rem` }}
                      />
                </Container>
            </Col>
            <Col className="reponses">
                <Container data-aos="fade-left">
                  <h1>Quel Ubi"dreamer" est tu ?</h1>
                   <Link to="/play" className="btn btn-primary">Commencer le quiz</Link>
                </Container>
            </Col>
        </Row>
    </Layout>
 )
}

export default IndexPage


