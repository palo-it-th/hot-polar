import { Button, ButtonGroup } from "react-bootstrap"
import Layout from "../components/Layout"

const Story = () => (
  <Layout>
    <h1>Story Page</h1>

    <p>TO BE ADDED</p>

    <ButtonGroup className="me-2">
      <Button href="#">Share to your friends</Button>
      </ButtonGroup> 
    <ButtonGroup>
      <Button href="/recommended-actions" className="btn btn-primary">Recommended Actions</Button>
    </ButtonGroup> 
  </Layout>
)

export default Story
