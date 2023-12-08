import {Button, Card} from "react-bootstrap";
import Layout from "../components/Layout"
import './RecommendedActions.css'
import {FacebookIcon, FacebookShareButton, LineIcon, LineShareButton} from "react-share";

const actions = [
  {
    name: "ThaiCAN",
    description: "Sign the Thailand Clean Air Network (Thai CAN) petition in support of the citizen led bill HERE.",
    linkName: "Sign for ThaiCAN",
    link: 'https://thailandcan.org/en'
  },

  {
    name: "Reduce the use of private vehicles",
    description: "Increase your use of public transportation whenever possible and pay attention to the air quality index in your local area and use mask and air purifier when appropriate etc.",
    linkName: "",
    link: ''
  },

  {
    name: "Share",
    description: "Share this with your friends to spread awareness about air pollution, its negative impacts, and support the draft bill and Thai CAN.",
    linkName: "Share",
    link: '',
    webShare: true,
  },
  {
    name: "Donate",
    description: "Donate to Thai CAN and support their important work. (COMING SOON!)",
    linkName: "",
    link: ''
  },
]

const RecommendedActions = () => {
  function handleShare() {
    //@ts-ignore
    if (window.navigator.canShare) {
      console.log('Can share with web-share api')
      // Web Share API is supported
      navigator.share({
        title: 'ThaiCAN',
        url: 'https://thailandcan.org/en'
      }).then(() => {
        console.log('Thanks for sharing!');
        alert('Thanks for sharing!')
      })
        .catch(console.error);
    } else {
      // Fallback
      console.log('Cannot share with web-share api due to unsupported browser')
    }
  }

  function renderActions(action: any) {
    if (action.webShare) {
      // @ts-ignore
      if (window.navigator.canShare) {
        return <Button onClick={handleShare}>{action.linkName}</Button>;
      } else {
        return (
            <div style={{margin: 10}}>
              <FacebookShareButton url='https://hot-polar.com' children={<FacebookIcon size={32} round={true}/>} />
              <LineShareButton url='https://hot-polar.com' title='Thailand Air Pollution Story' children={<LineIcon  size={32} round={true}/>}/>
            </div>
        )
      }
    } else if (action.linkName && action.link) {
      return <Button href={action.link} variant="primary">{action.linkName}</Button>
    }
  }

  return (
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
                  {
                    renderActions(action)
                    // (action.link && action.linkName) &&
                    //     <Button href={action.link} variant="primary">{action.linkName}</Button>
                  }
                </Card.Body>
              </Card>
          ))}
        </div>
      </Layout>
  )
}

export default RecommendedActions
