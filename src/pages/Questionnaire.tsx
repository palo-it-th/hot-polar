import { Button, Form } from "react-bootstrap";
import Layout from "../components/Layout";
import './Questionnaire.css';
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const Questionnaire = () => {
  const [form, setForm] = useState({
    gender: "none",
    age: "",
    livesIn: "",
    occupation: "",
    hobby: "",
    allergy: ""
  });
  const navigate = useNavigate();


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setForm({
      ...form,
      [e.target.name]: value
    });
  };

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setForm({
      ...form,
      [e.target.name]: value
    });
  }

  const handleSubmit = (e: any) => {
    if (form.gender === "none") {
      return alert('Please select gender!')
    }
    e.preventDefault();
    navigate("/story", {
      state: {
        form
      }
    })
  }

  return (
    <Layout className="questionnaire">
      <h1>Will the future you envisioned for yourself align with a future plagued by air pollution in 10 years?</h1>
      <p>Please answer a few questions and we will share your future and offer some advice on what you can do.</p>

      <Form>
        <Form.Group controlId="formBasicGender">
          <Form.Label>Gender</Form.Label>
          <Form.Select name="gender" value={form.gender} onChange={handleSelectChange}>
            <option disabled value="none">Please select an option</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="LGBTIQA+">LGBTIQA+</option>
              <option value="no-share">Prefer not to share</option>
          </Form.Select>


          <Form.Label>Age</Form.Label>
          <Form.Control name="age" type="number" placeholder="Enter age" required onChange={handleChange} />


          <Form.Label>Lives In</Form.Label>
          <Form.Control name="livesIn" type="text" placeholder="Enter location" required onChange={handleChange} />


          <Form.Label>Occupation</Form.Label>
          <Form.Control name="occupation" type="text" placeholder="Enter occuation" required onChange={handleChange} />


          <Form.Label>Hobby</Form.Label>
          <Form.Control name="hobby" type="text" placeholder="Enter hobby" onChange={handleChange} />


          <Form.Label>Allergy</Form.Label>
          <Form.Control name="allergy" type="text" placeholder="Enter allergy" onChange={handleChange} />
        </Form.Group>
      </Form>

      <Button variant="primary" type="submit" onClick={handleSubmit}>
        See Your Future!
      </Button>
    </Layout>
  )
}

export default Questionnaire
