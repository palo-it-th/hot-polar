import { Button, Form } from "react-bootstrap";
import Layout from "../components/Layout";
import './Questionnaire.css';

const Questionnaire = () => (
  <Layout className="questionnaire">
    <h1>Do you wish to know what your future looks like living with air pollution?</h1>
    <p>Please answer a few questions and we will share your future and offer some advice on what you can do.</p>

    <Form>
      <Form.Group controlId="formBasicGender">
        <Form.Label>Gender</Form.Label>
        <Form.Select>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Secret">Secret</option>
        </Form.Select>


        <Form.Label>Age</Form.Label>
        <Form.Control type="number" placeholder="Enter age" required />


        <Form.Label>Lives In</Form.Label>
        <Form.Control type="text" placeholder="Enter location" required />


        <Form.Label>Occupation</Form.Label>
        <Form.Control type="text" placeholder="Enter occuation" required />


        <Form.Label>Hobby</Form.Label>
        <Form.Control type="text" placeholder="Enter hobby" />


        <Form.Label>Allergy</Form.Label>
        <Form.Control type="text" placeholder="Enter allergy" />
      </Form.Group>
    </Form>

    <Button href="/story" variant="primary" type="submit">
      See Your Future!
    </Button>
  </Layout>
)

export default Questionnaire
