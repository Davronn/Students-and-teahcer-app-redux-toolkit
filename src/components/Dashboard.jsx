import { TeamOutlined, UserOutlined } from "@ant-design/icons";
import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const nav = useNavigate()
  return (
    <div
      style={{
        width: "100px",
        backgroundColor: "blueviolet",
        height: "100vh",
        alignItems: "center",
      }}
    >
      <div className="d-flex flex-column align-items-center mt-4">
        <div onClick={()=> nav('/profile')} style={{cursor:'pointer'}} >
          <UserOutlined style={{fontSize:"30px"}}/>
        </div>
        <div className="mt-5" style={{cursor:'pointer'}}  >
          <TeamOutlined style={{fontSize:"24px"}} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
