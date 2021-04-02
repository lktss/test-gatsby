import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Quiz from "../components/quiz"


const Game = () => {
 return (
    <Layout>
        <SEO title="quiz" />
        <Quiz />
    </Layout>
 )
}

export default Game
