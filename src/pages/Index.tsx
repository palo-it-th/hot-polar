import { Button } from "react-bootstrap"
import Layout from "../components/Layout"
import './Index.css'

const Index = () =>
  <Layout className="index">
    <img src="/assets/logo.png" alt="logo" />
    <h1>Your Future with Air Pollution</h1>
    <p>Average life reduction of Thai population is 2 years!</p>
    <Button href="/questionnaire" variant="primary">Get Started!</Button>
  </Layout>

export default Index
