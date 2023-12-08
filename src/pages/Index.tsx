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
            <p>On average, air pollution is stealing 2 years of life expectancy from each person living in Thailand.</p>
            <p>What is 2 years worth? Priceless time with family and friends, time to pursue your dreams personally or professionally, time to complete educational degrees, time to travel the world, or just time to spend on your hobbies etc.</p>
            <div>
                <p>We invite you to learn more about your future and what you can do!</p>
                <Button variant="primary" onClick={() => navigate('questionnaire')} style={{marginTop: 0}}>Get Started!</Button>
            </div>
        </Layout>
    )
}

export default Index
