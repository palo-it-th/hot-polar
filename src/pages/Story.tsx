import { Button, ButtonGroup } from "react-bootstrap"
import Layout from "../components/Layout"
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import {
  FacebookShareButton,
  LineShareButton,
    FacebookIcon,
    LineIcon
} from "react-share";

const Image = ({ text }: { text: string }) => {
  const [src, setSrc] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchImage = async () => {
      setLoading(true);

      try {
        const { data: response } = await axios.post('https://vlmrsvzionvfien5ong22j6m3m0kunph.lambda-url.us-east-1.on.aws/', { text: `${text}, Thai, Unhappy` });
        setSrc('data:image/png;base64,' + response.image);
      } catch (error: any) {
        console.error(error.message);
      }

      setLoading(false);
    }
    fetchImage();
  }, [])

  return (
    loading ? <Skeleton height={50} width={50} circle /> : <img src={src} />
  )
}

const Story = () => {
  const { state } = useLocation();
  const [loading, setLoading] = useState(false);
  const [paragraphs, setParagraphs] = useState([]);
  const [fullStory, setFullStory] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        const { data: response } = await axios.post('https://yvaadapva66i7mmveoo7bvni240gpgyi.lambda-url.us-east-1.on.aws/', {
          ...state.form
        });
        setParagraphs(response.split);
        setFullStory(response.split.join(' '));
      } catch (error: any) {
        console.error(error.message);
      }

      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <Layout>
      <h1>A glimpse into your future with air pollution</h1>
      {loading ? <Skeleton count={25} highlightColor='#757B82' /> :
        paragraphs.map((text) => (
          <>
            <Image text={text} />
            <p style={{ paddingTop: 10 }}>{text}</p>
          </>
        ))
      }

      <br />
      <div style={{margin: 10}}>
        <FacebookShareButton url='https://hot-polar.com' children={<FacebookIcon size={32} round={true}/>} />
        <LineShareButton url='https://hot-polar.com' title='Thailand Air Pollution Story' children={<LineIcon  size={32} round={true}/>}/>
      <ButtonGroup className="me-2">
        {/*<Button href="#">Share to your friends</Button>*/}
      </ButtonGroup>
      </div>
      <ButtonGroup>
        <Button href="/recommended-actions" className="btn btn-primary">Recommended Actions</Button>
      </ButtonGroup>
    </Layout>
  )
}

export default Story
