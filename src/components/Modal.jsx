import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { addTodo } from "../app/students/studentsSlice";

function Modall(props) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    group: "",
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(formData));
    props.onHide(); 
  };

  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Student Add</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="firstName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="lastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="group">
            <Form.Label>Group</Form.Label>
            <Form.Select
              aria-label="Default select example"
              name="group"
              value={formData.group}
              onChange={handleChange}
            >
              <option>Select</option>
              <option value="N45">N45</option>
              <option value="N32">N32</option>
              <option value="N29">N29</option>
            </Form.Select>
          </Form.Group>
          <Button variant="danger" onClick={props.onHide}>
            Close
          </Button>
          <Button variant="success" className="mx-2" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default Modall;
