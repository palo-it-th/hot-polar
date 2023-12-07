import { Button, ButtonGroup } from "react-bootstrap"
import Layout from "../components/Layout"
import axios from "axios";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

const Story = () => {
    const { state } = useLocation();
    const [loading, setLoading] = useState(false);
    const [paragraphs, setParagraphs] = useState([]);

    useEffect(() => {
        const fetchData = async () =>{
            setLoading(true);
            try {
                const {data: response} = await axios.post('https://yvaadapva66i7mmveoo7bvni240gpgyi.lambda-url.us-east-1.on.aws/', {
                    ...state.form
                });
                console.log(response)
                setParagraphs(response.split);
            } catch (error: any) {
                console.error(error.message);
            }
            setLoading(false);
        }
        fetchData();
    }, []);

    return (
        <Layout>

            <h1>Story Page</h1>
            {loading ? <Skeleton count={25} highlightColor='#757B82'/> :
                paragraphs.map((text) => (
                    <p>{text}</p>
                ))
            }


            <ButtonGroup className="me-2">
                <Button href="#">Share to your friends</Button>
            </ButtonGroup>
            <ButtonGroup>
                <Button href="/recommended-actions" className="btn btn-primary">Recommended Actions</Button>
            </ButtonGroup>
        </Layout>
    )
}

export default Story
