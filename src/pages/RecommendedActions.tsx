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
    <p>
      Thai Clean Air Network (Thai CAN), a citizen led group composed of multidisciplinary professionals, have drafted an Innovative Clean Air Act to make systematic changes in Thailand to fix this air pollution problem.
      <br/>
      <br/>
      A summary of this innovative clean air legislation:
      <br/>
      <br/>
      <ul style={{textAlign: 'left'}}>
        <li>
          Focuses addressing the root causes and symptoms of air pollution in Thailand and enforcing the polluter pay principle for trans-boundary haze
        </li>
        <li>
          Ask the Thai government to assign and integrate key state agencies to work together for clean air, addressing both environmental and public health concerns
        </li>
        <li>
          A balance approached that focuses on ensuring good collaboration between government and civil society (including local communities) but also improving teamwork between central and provincial government agencies.
        </li>
        <li>
          Provide economic incentives to motivate polluters to adopt environmentally/sustainable operational practices and setting up a clean air fund for victims
        </li>
        <li>
          This draft legislation is aligned to international standards and is endorsed by the United Nations Special Rapporteur, Dr. David R. Boyd.
        </li>
      </ul>
      <br/>
      Thai CAN needs your support to show the Thai government that air pollution needs urgent action.
    </p>
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
