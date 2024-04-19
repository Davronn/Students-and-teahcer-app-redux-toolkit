import React, { useEffect, useState } from "react";
import Dashboard from "../components/Dashboard";
import { Table, Input, Button } from "antd";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, fetchTodos } from "../app/students/studentsSlice";

const { Search } = Input;

const Students = () => {
  const [students, setStudents] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const { loading, todos, error } = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  const handleSearch = (value) => {
    setSearchQuery(value);
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
      title: "LastName",
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
      key: "email",
      render: (text, record) => (
        <Button
          danger
          value="small"
          onClick={() => dispatch(deleteTodo(record.id))}
        >
          {"Delete"}
        </Button>
      ),
    },
  ];

  return (
    <div className="d-flex">
      <Dashboard />
      <div className="container">
        <div className="d-flex justify-content-between p-3">
          <h2 className="">Students app</h2>
          <Button
            type="default"
            value="large"
            style={{ backgroundColor: "green", color: "white", width: "90px" }}
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
          <Table size="small" dataSource={filteredStudents} columns={columns} />
        </div>
      </div>
    </div>
  );
};

export default Students;
