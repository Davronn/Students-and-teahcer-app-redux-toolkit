import React from "react";
import { Button, Card, List } from "antd";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const name = localStorage.getItem("userName");
  const password = localStorage.getItem("password");
  const nav = useNavigate();
  const logout = () => {
    localStorage.removeItem("password");
    localStorage.removeItem("userName");
    nav("/")
  };
  return (
    <div className=" w-50 m-auto justify-content-center mt-5 ">
      <div className="mb-3" onClick={() => nav(-1)}>
        <Button type="primary">Back</Button>
      </div>
      <Card className="align-items-center text-center bg-primary bg-opacity-25">
        <h1 className="p-3">Username: {name}</h1>
        <br />
        <h1 className="p-3">Password: {password}</h1>
      </Card>
      <div className="mb-3" onClick={logout}>
        <Button  color="primary" className="mt-3" danger>Log out</Button>
      </div>
    </div>
  );
};
export default Profile;
