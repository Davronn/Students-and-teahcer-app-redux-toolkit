import React, { useEffect, useState } from "react";
import Dashboard from "../components/Dashboard";
import { Table, Input, Button } from "antd";
import { Button as Btn, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTodo,
  editTodo,
  fetchTodos,
} from "../app/students/studentsSlice";
import Modall from "../components/Modal";

const { Search } = Input;

const Students = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [editModalShow, setEditModalShow] = useState(false);
  const [formData, setFormData] = useState({
    id: "",
    firstName: "",
    lastName: "",
    group: "",
  });

  const { loading, todos, error } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  const handleSearch = (value) => {
    setSearchQuery(value);
  };

  const handleEdit = (todo) => {
    // Set the formData state with the selected student's data
    setFormData({
      id: todo.id,
      firstName: todo.firstName,
      lastName: todo.lastName,
      group: todo.group,
    });
    setEditModalShow(true);
    // Show modal when edit button is clicked
  };

  const handleInputChange = (e) => {
    // Update the corresponding field in the formData state
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    dispatch(editTodo(formData)); 
    
    setFormData({
      id: "",
      firstName: "",
      lastName: "",
      group: "",
    });
    setEditModalShow(false); //
  };

  const filteredStudents = todos.filter(
    (student) =>
      student.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.lastName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const columns = [
    {
      title: "No",
      dataIndex: "id",
      render: (text, record, index) => index + 1,
      key: "firstName",
    },
    {
      title: "Name",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Group",
      dataIndex: "group",
      key: "group",
    },
    {
      title: "Actions",
      key: "actions",
      render: (text, record) => (
        <div>
          <Btn
            variant="info"
            onClick={() => handleEdit(record)}
            className="mx-1"
            style={{ color: "white" }}
          >
            Edit
          </Btn>
          <Btn variant="danger" onClick={() => dispatch(deleteTodo(record.id))}>
            Delete
          </Btn>
        </div>
      ),
    },
  ];

  return (
    <div className="d-flex">
      <Dashboard />
      <div className="container">
        <div className="d-flex justify-content-between p-3">
          <h2>Students app</h2>
          <Button
            type="default"
            style={{ backgroundColor: "green", color: "white", width: "90px" }}
            onClick={() => setModalShow(true)}
          >
            Add
          </Button>
        </div>
        <div className="search mb-3" style={{ width: "260px" }}>
          <Search
            placeholder="input search text"
            onSearch={handleSearch}
            enterButton
          />
        </div>
        <div>
          {loading && <h1 className="text-center mt-5 ">Loading...</h1>}
          {error && <div>{error}</div>}
          <Table size="small" dataSource={filteredStudents} columns={columns} />
          {/* Editable input fields */}
          <Modall show={modalShow} onHide={() => setModalShow(false)}></Modall>
          <Modal show={editModalShow} onHide={() => setEditModalShow(false)}>
            <Form onSubmit={handleSubmit}>
              <Input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
              />
              <Input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
              />
              <Form.Select
                name="group"
                value={formData.group}
                onChange={handleInputChange}
              >
                <option>Select</option>
                <option value="N45">N45</option>
                <option value="N32">N32</option>
                <option value="N29">N29</option>
              </Form.Select>
              <button type="submit">Save</button>
            </Form>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Students;
