import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function Modall(props) {
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <h1>Student Add</h1>
      </Modal.Header>
      <Modal.Body>
        <div>
          <Form>
            <div className="m-5">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Select aria-label="Default select example">
                <option>Select</option>
                <option value="N45">N45</option>
                <option value="N32">N32</option>
                <option value="N29">N29</option>
              </Form.Select>
            </div>
            <div className="m-5">
              <Button className="mx-2" variant="primary" type="submit">
                Submit
              </Button>
              <Button onClick={props.onHide}>Close</Button>
            </div>
          </Form>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default Modall;
