import { Button } from "react-bootstrap"
import Layout from "../components/Layout"
import './Index.css'
import {useNavigate} from "react-router-dom";

const Index = () => {
    const navigate = useNavigate();
    return (
        <Layout className="index">
            <img src="/assets/logo.png" alt="logo"/>
            <h1>Your Future with Air Pollution</h1>
            <p>Average life reduction of Thai population is 2 years!</p>
            <Button variant="primary" onClick={() => navigate('questionnaire')}>Get Started!</Button>
        </Layout>
    )
}

export default Index
