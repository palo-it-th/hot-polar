import { Button, Card } from "react-bootstrap";
import Layout from "../components/Layout"
import './RecommendedActions.css'

const actions = [
  {
    name: "Reduce the use of private vehicles",
    description: "Use public transportation, walk, or cycle instead of driving your own car.",
    linkName: "Sign for ThaiCAN",
    link: '#'
  },

  {
    name: "Reduce the use of private vehicles",
    description: "Use public transportation, walk, or cycle instead of driving your own car.",
    linkName: "Share",
    link: '#'
  },

  {
    name: "Donation",
    description: "Use public transportation, walk, or cycle instead of driving your own car.",
    linkName: "Donate",
    link: '#'
  },


  {
    name: "Donation",
    description: "Use public transportation, walk, or cycle instead of driving your own car.",
    linkName: "Donate",
    link: '#'
  }
]

const RecommendedActions = () => (
  <Layout>
    <h1>Recommended Actions</h1>

    <div className="card-container">
      {actions.map((action) => (
        <Card>
        <Card.Header>{action.name}</Card.Header>
        <Card.Body>
          <Card.Text>{action.description}</Card.Text>
          <Button href={action.link} variant="primary">{action.linkName}</Button>
        </Card.Body>
      </Card>
      ))}
    </div>
  </Layout>
)

export default RecommendedActions
